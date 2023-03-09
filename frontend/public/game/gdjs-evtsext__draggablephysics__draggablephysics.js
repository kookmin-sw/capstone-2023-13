
gdjs.evtsExt__DraggablePhysics__DraggablePhysics = gdjs.evtsExt__DraggablePhysics__DraggablePhysics || {};

/**
 * Behavior generated from Draggable (for physics objects)
 */
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics = class DraggablePhysics extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsBehavior = behaviorData.PhysicsBehavior !== undefined ? behaviorData.PhysicsBehavior : "";
    this._behaviorData.MouseButton = behaviorData.MouseButton !== undefined ? behaviorData.MouseButton : "Left";
    this._behaviorData.MaxForce = behaviorData.MaxForce !== undefined ? behaviorData.MaxForce : Number("500") || 0;
    this._behaviorData.Frequency = behaviorData.Frequency !== undefined ? behaviorData.Frequency : Number("10") || 0;
    this._behaviorData.Damping = behaviorData.Damping !== undefined ? behaviorData.Damping : Number("1") || 0;
    this._behaviorData.MouseJointID = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsBehavior !== newBehaviorData.PhysicsBehavior)
      this._behaviorData.PhysicsBehavior = newBehaviorData.PhysicsBehavior;
    if (oldBehaviorData.MouseButton !== newBehaviorData.MouseButton)
      this._behaviorData.MouseButton = newBehaviorData.MouseButton;
    if (oldBehaviorData.MaxForce !== newBehaviorData.MaxForce)
      this._behaviorData.MaxForce = newBehaviorData.MaxForce;
    if (oldBehaviorData.Frequency !== newBehaviorData.Frequency)
      this._behaviorData.Frequency = newBehaviorData.Frequency;
    if (oldBehaviorData.Damping !== newBehaviorData.Damping)
      this._behaviorData.Damping = newBehaviorData.Damping;
    if (oldBehaviorData.MouseJointID !== newBehaviorData.MouseJointID)
      this._behaviorData.MouseJointID = newBehaviorData.MouseJointID;

    return true;
  }

  // Properties:
  
  _getPhysicsBehavior() {
    return this._behaviorData.PhysicsBehavior !== undefined ? this._behaviorData.PhysicsBehavior : "";
  }
  _setPhysicsBehavior(newValue) {
    this._behaviorData.PhysicsBehavior = newValue;
  }
  _getMouseButton() {
    return this._behaviorData.MouseButton !== undefined ? this._behaviorData.MouseButton : "Left";
  }
  _setMouseButton(newValue) {
    this._behaviorData.MouseButton = newValue;
  }
  _getMaxForce() {
    return this._behaviorData.MaxForce !== undefined ? this._behaviorData.MaxForce : Number("500") || 0;
  }
  _setMaxForce(newValue) {
    this._behaviorData.MaxForce = newValue;
  }
  _getFrequency() {
    return this._behaviorData.Frequency !== undefined ? this._behaviorData.Frequency : Number("10") || 0;
  }
  _setFrequency(newValue) {
    this._behaviorData.Frequency = newValue;
  }
  _getDamping() {
    return this._behaviorData.Damping !== undefined ? this._behaviorData.Damping : Number("1") || 0;
  }
  _setDamping(newValue) {
    this._behaviorData.Damping = newValue;
  }
  _getMouseJointID() {
    return this._behaviorData.MouseJointID !== undefined ? this._behaviorData.MouseJointID : Number("") || 0;
  }
  _setMouseJointID(newValue) {
    this._behaviorData.MouseJointID = newValue;
  }
}

/**
 * Shared data generated from Draggable (for physics objects)
 */
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.SharedData = class DraggablePhysicsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DraggablePhysics_DraggablePhysicsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DraggablePhysics_DraggablePhysicsSharedData = new gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.SharedData(
      initialData
    );
  }
  return instanceContainer._DraggablePhysics_DraggablePhysicsSharedData;
}

// Methods:
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).isKinematic() ) {
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setDynamic();
}
}}

}


};gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95DraggablePhysics_95_95DraggablePhysics_46DraggablePhysics_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95DraggablePhysics_95_95DraggablePhysics_46DraggablePhysics_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).addMouseJoint(gdjs.evtTools.input.getCursorX(runtimeScene, (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0), (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxForce()), (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency()), (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDamping()), runtimeScene.getScene().getVariables().get("__DraggablePhysics").getChild("MouseJointID"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseJointID(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DraggablePhysics").getChild("MouseJointID")));
}
}}

}


};gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, (( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseButton()));
}if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8148076);
}
}}
if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, (( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseButton()));
}if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReleaseDrag((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setMouseJointTarget((gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseJointID()), gdjs.evtTools.input.getCursorX(runtimeScene, (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0), gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


};gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsBehavior": this._getPhysicsBehavior()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext = {};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).removeJoint((gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseJointID()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseJointID(0);
}
}}

}


};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDrag = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsBehavior": this._getPhysicsBehavior()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.ReleaseDragContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext = {};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1);

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseJointID() != 0 ) {
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsBehavior": this._getPhysicsBehavior()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.IsBeingDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext = {};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReleaseDrag((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsBehavior": this._getPhysicsBehavior()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("DraggablePhysics::DraggablePhysics", gdjs.evtsExt__DraggablePhysics__DraggablePhysics.DraggablePhysics);
