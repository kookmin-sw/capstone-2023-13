
if (typeof gdjs.evtsExt__PixelPerfectMovement__SpeedToReach !== "undefined") {
  gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PixelPerfectMovement__SpeedToReach = {};

gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0) >= 0);
}
}if (gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.sqrt(2 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Deceleration")) || 0 : 0)); }}}

}


{


gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0) < 0);
}
}if (gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = -(Math.sqrt(-(2) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Deceleration")) || 0 : 0))); }}}

}


};

gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func = function(runtimeScene, Distance, Deceleration, parentEventsFunctionContext) {
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
if (argName === "Distance") return Distance;
if (argName === "Deceleration") return Deceleration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.registeredGdjsCallbacks = [];