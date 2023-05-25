
if (typeof gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown !== "undefined") {
  gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown = {};


gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.userFunc0x796c48 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__pixelPerfectExtension = gdjs.__pixelPerfectExtension || {};

gdjs.__pixelPerfectExtension.PixelPerfectTopDownMovement =  /** @class */ (function () {

  /**
   * @param {gdjs.RuntimeBehavior} pixelPerfectBehavior
   * @param {gdjs.TopDownMovementRuntimeBehavior} topDownBehavior
   */
  function PixelPerfectTopDownMovement(pixelPerfectBehavior, topDownBehavior) {
    /** @type {gdjs.RuntimeBehavior} */
    this.pixelPerfectBehavior = pixelPerfectBehavior;
    /** @type {gdjs.TopDownMovementRuntimeBehavior} */
    this.topDownBehavior = topDownBehavior;

    topDownBehavior.registerHook(this);

    /** @type {number | null} */
    this.targetX = null;
    /** @type {number | null} */
    this.targetY = null;
    this.targetDirectionX = 0;
    this.targetDirectionY = 0;
    this.lastDirection = -1;
    this.isVelocityAdjusted = false;
    this.isVelocityAdjustedOnX = false;
    this.isVelocityAdjustedOnY = false;
  }

  /**
   * Return the direction to use instead of the direction given in
   * parameter.
   * @param {gdjs.TopDownMovementRuntimeBehavior.TopDownMovementHookContext} context
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.overrideDirection = function (context) {
    let direction = context.getDirection();
    if (!this.pixelPerfectBehavior.activated()) {
      return direction;
    }

    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    const that = this.topDownBehavior;
    const object = that.owner;

    if (cellSize <= 0 || that._allowDiagonals) {
      return direction;
    }

    // Forbid to turn before being aligned on the grid.

    const timeDelta = object.getElapsedTime() / 1000;
    const deltaX = Math.abs(that._xVelocity * timeDelta);
    const deltaY = Math.abs(that._yVelocity * timeDelta);

    const isTryingToMoveOnX = direction === 4 || direction === 0;
    const isTryingToMoveOnY = direction === 6 || direction === 2;
    if (isTryingToMoveOnX) {
      if (that._yVelocity < 0) {
        if (Math.abs(this.ceilToCellY(object.y) - object.y) > deltaY) {
          direction = 6;
        } else {
          object.y = this.ceilToCellY(object.y);
        }
      }
      if (that._yVelocity > 0) {
        if (Math.abs(this.floorToCellY(object.y) - object.y) > deltaY) {
          direction = 2;
        } else {
          object.y = this.floorToCellY(object.y);
        }
      }
    } else if (isTryingToMoveOnY) {
      if (that._xVelocity < 0) {
        if (Math.abs(this.ceilToCellX(object.x) - object.x) > deltaX) {
          direction = 4;
        } else {
          object.x = this.ceilToCellX(object.x);
        }
      }
      if (that._xVelocity > 0) {
        if (Math.abs(this.floorToCellX(object.x) - object.x) > deltaX) {
          direction = 0;
        } else {
          object.x = this.floorToCellX(object.x);
        }
      }
    }

    // Ensure sharp turn even with Verlet integrations.
    const speed = Math.abs(that._xVelocity + that._yVelocity);
    if (direction === 0) {
      that._xVelocity = speed;
      that._yVelocity = 0;
    } else if (direction === 4) {
      that._xVelocity = -speed;
      that._yVelocity = 0;
    } else if (direction === 2) {
      that._yVelocity = speed;
      that._xVelocity = 0;
    } else if (direction === 6) {
      that._yVelocity = -speed;
      that._xVelocity = 0;
    }

    this.lastDirection = direction;
    return direction;
  }

  /**
   * Called before the acceleration and new direction is applied to the
   * velocity.
   * @param {gdjs.TopDownMovementRuntimeBehavior.TopDownMovementHookContext} context
   */
  PixelPerfectTopDownMovement.prototype.beforeSpeedUpdate = function (context) {
    if (!this.pixelPerfectBehavior.activated()) {
      return;
    }

    const direction = context.getDirection();
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    const that = this.topDownBehavior;
    const object = that.owner;

    if (cellSize <= 0) {
      return;
    }

    const isMovingOnX =
      direction !== -1 && direction !== 2 && direction !== 6;
    if (isMovingOnX) {
      this.targetX = null;
    } else if (this.targetX === null) {
      // Find where the deceleration should stop the object.
      if (that._xVelocity > 0) {
        this.targetX = this.ceilToCellX(
          object.x + this.getBreakingDistanceX()
        );
        this.targetDirectionX = 1;
      }
      if (that._xVelocity < 0) {
        this.targetX = this.floorToCellX(
          object.x - this.getBreakingDistanceX()
        );
        this.targetDirectionX = -1;
      }
    }

    const isMovingOnY =
      direction !== -1 && direction !== 0 && direction !== 4;
    if (isMovingOnY) {
      this.targetY = null;
    } else if (this.targetY === null) {
      // Find where the deceleration should stop the object.
      if (that._yVelocity > 0) {
        this.targetY = this.ceilToCellY(
          object.y + this.getBreakingDistanceY()
        );
        this.targetDirectionY = 1;
      }
      if (that._yVelocity < 0) {
        this.targetY = this.floorToCellY(
          object.y - this.getBreakingDistanceY()
        );
        this.targetDirectionY = -1;
      }
    }

    // Make as if the player had press button a bit longer to reach exactly
    // the next cell.

    this.isVelocityAdjustedOnX = this.targetX !== null;
    if (this.isVelocityAdjustedOnX) {
      if (this.targetDirectionX > 0) {
        if (this.targetX > object.getX()) {
          that._xVelocity = Math.min(
            that._xVelocity + that._acceleration,
            that._maxSpeed,
            this.getSpeedToReach(this.targetX - object.getX())
          );
        }
        const nextFrameX = object.getX() + that._xVelocity * object.getElapsedTime() / 1000;
        if (this.targetX <= nextFrameX) {
          that._xVelocity = 0;
          object.setX(this.roundToCellX(object.getX()));
          this.targetX = null;
        }
      }
      if (this.targetDirectionX < 0) {
        if (this.targetX < object.getX()) {
          that._xVelocity = Math.max(
            that._xVelocity - that._acceleration,
            -that._maxSpeed,
            this.getSpeedToReach(this.targetX - object.getX())
          );
        }
        const nextFrameX = object.getX() + that._xVelocity * object.getElapsedTime() / 1000;
        if (this.targetX >= nextFrameX) {
          that._xVelocity = 0;
          object.setX(this.roundToCellX(object.getX()));
          this.targetX = null;
        }
      }
      // The velocity is exact. There no need for Verlet integration.
      this.previousVelocityX = that._xVelocity;
    }

    this.isVelocityAdjustedOnY = this.targetY !== null;
    if (this.isVelocityAdjustedOnY) {
      if (this.targetDirectionY > 0) {
        if (this.targetY > object.getY()) {
          that._yVelocity = Math.min(
            that._yVelocity + that._acceleration,
            that._maxSpeed,
            this.getSpeedToReach(this.targetY - object.getY())
          );
        }
        const nextFrameY = object.getY() + that._yVelocity * object.getElapsedTime() / 1000;
        if (this.targetY <= nextFrameY) {
          that._yVelocity = 0;
          object.setY(this.roundToCellY(object.getY()));
          this.targetY = null;
        }
      }
      if (this.targetDirectionY < 0) {
        if (this.targetY < object.getY()) {
          that._yVelocity = Math.max(
            that._yVelocity - that._acceleration,
            -that._maxSpeed,
            this.getSpeedToReach(this.targetY - object.getY())
          );
        }
        const nextFrameY = object.getY() + that._yVelocity * object.getElapsedTime() / 1000;
        if (this.targetY >= nextFrameY) {
          that._yVelocity = 0;
          object.setY(this.roundToCellY(object.getY()));
          this.targetY = null;
        }
      }
      // The velocity is exact. There no need for Verlet integration.
      this.previousVelocityY = that._yVelocity;
    }
  }

  /**
   * Called before the velocity is applied to the object position and
   * angle.
   */
  PixelPerfectTopDownMovement.prototype.beforePositionUpdate = function () {
    if (!this.pixelPerfectBehavior.activated()) {
      return;
    }

    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    if (cellSize <= 0) {
      return;
    }

    const that = this.topDownBehavior;

    if (this.isVelocityAdjustedOnX) {
      // The velocity is exact. There no need for Verlet integration.
      that._xVelocity = this.previousVelocityX;
    }
    if (this.isVelocityAdjustedOnY) {
      // The velocity is exact. There no need for Verlet integration.
      that._yVelocity = this.previousVelocityY;
    }
  }

  const epsilon = 1 / (1 << 20);

  PixelPerfectTopDownMovement.prototype.doStepPostEvents = function (instanceContainer) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    if (cellSize <= 0) {
      return;
    }

    const that = this.topDownBehavior;
    const object = that.owner;

    const isMovingOnX =
      this.lastDirection !== -1 &&
      this.lastDirection !== 2 &&
      this.lastDirection !== 6;
    const isMovingOnY =
      this.lastDirection !== -1 &&
      this.lastDirection !== 0 &&
      this.lastDirection !== 4;

    // Avoid rounding errors after a call to "separate" to make characters
    // move indefinitely in front of a wall because they can't reach the cell.
    if (!isMovingOnX && that._xVelocity !== 0) {
      const x = object.getX();
      const roundedX = this.roundToCellX(x);
      if (Math.abs(roundedX - x) < epsilon) {
        object.setX(roundedX);
        this.targetDirectionX = 0;
        that._xVelocity = 0;
      }
    }
    if (!isMovingOnY && that._yVelocity !== 0) {
      const y = object.getY();
      const roundedY = this.roundToCellY(y);
      if (Math.abs(roundedY - y) < epsilon) {
        object.setY(roundedY);
        this.targetDirectionY = 0;
        that._yVelocity = 0;
      }
    }
  }

  /**
   * @returns {number} the braking distance according to an initial speed and a deceleration.
   */
  PixelPerfectTopDownMovement.prototype.getBreakingDistanceX = function () {
    const that = this.topDownBehavior;
    return (that._xVelocity * that._xVelocity) / (2 * that._deceleration);
  }

  /**
   * @returns {number} the braking distance according to an initial speed and a deceleration.
   */
  PixelPerfectTopDownMovement.prototype.getBreakingDistanceY = function () {
    const that = this.topDownBehavior;
    return (that._yVelocity * that._yVelocity) / (2 * that._deceleration);
  }

  /**
   * @param {number} displacement
   * @returns {number} the speed necessary to cover a distance according to the deceleration.
   */
  PixelPerfectTopDownMovement.prototype.getSpeedToReach = function (displacement) {
    const that = this.topDownBehavior;
    return (
      Math.sign(displacement) *
      Math.sqrt(2 * Math.abs(displacement) * that._deceleration)
    );
  }

  /**
   * @param {number} x
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.ceilToCellX = function (x) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetX = this.pixelPerfectBehavior._getOffsetX();

    return (
      gridOffsetX +
      cellSize * Math.ceil((x - gridOffsetX) / cellSize)
    );
  }

  /**
   * @param {number} x
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.roundToCellX = function (x) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetX = this.pixelPerfectBehavior._getOffsetX();

    return (
      gridOffsetX +
      cellSize * Math.round((x - gridOffsetX) / cellSize)
    );
  }

  /**
   * @param {number} x
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.floorToCellX = function (x) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetX = this.pixelPerfectBehavior._getOffsetX();

    return (
      gridOffsetX +
      cellSize * Math.floor((x - gridOffsetX) / cellSize)
    );
  }

  /**
   * @param {number} y
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.ceilToCellY = function (y) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetY = this.pixelPerfectBehavior._getOffsetY();

    return (
      gridOffsetY +
      cellSize * Math.ceil((y - gridOffsetY) / cellSize)
    );
  }

  /**
   * @param {number} y
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.roundToCellY = function (y) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetY = this.pixelPerfectBehavior._getOffsetY();

    return (
      gridOffsetY +
      cellSize * Math.round((y - gridOffsetY) / cellSize)
    );
  }

  /**
   * @param {number} y
   * @return {number}
   */
  PixelPerfectTopDownMovement.prototype.floorToCellY = function (y) {
    /** @type {number} */
    const cellSize = this.pixelPerfectBehavior._getPixelSize();
    /** @type {number} */
    const gridOffsetY = this.pixelPerfectBehavior._getOffsetY();

    return (
      gridOffsetY +
      cellSize * Math.floor((y - gridOffsetY) / cellSize)
    );
  }

  return PixelPerfectTopDownMovement;
}());


};
gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.userFunc0x796c48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("__pixelPerfect").getChild("TopDownClassesDefined"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__pixelPerfect").getChild("TopDownClassesDefined"), true);
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.registeredGdjsCallbacks = [];