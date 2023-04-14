
if (typeof gdjs.evtsExt__PixelPerfectMovement__BrakingDistance !== "undefined") {
  gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PixelPerfectMovement__BrakingDistance = {};


gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) / (2 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Deceleration")) || 0 : 0)); }}}

}


};

gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func = function(runtimeScene, Speed, Deceleration, parentEventsFunctionContext) {
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
if (argName === "Speed") return Speed;
if (argName === "Deceleration") return Deceleration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.registeredGdjsCallbacks = [];