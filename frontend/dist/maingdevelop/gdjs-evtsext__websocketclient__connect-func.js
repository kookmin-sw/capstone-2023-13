
if (typeof gdjs.evtsExt__WebSocketClient__Connect !== "undefined") {
  gdjs.evtsExt__WebSocketClient__Connect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebSocketClient__Connect = {};


gdjs.evtsExt__WebSocketClient__Connect.userFunc0x94a8d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.wsClient.connection = new WebSocket(eventsFunctionContext.getArgument("host"));

gdjs.evtTools.wsClient.connection.addEventListener(
    "message",
    ({ data }) => gdjs.evtTools.wsClient.events.unshift(data)
);

gdjs.evtTools.wsClient.connection.addEventListener(
    "error",
    ({ message }) => (gdjs.evtTools.wsClient.lastError = message)
);

};
gdjs.evtsExt__WebSocketClient__Connect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebSocketClient__Connect.userFunc0x94a8d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WebSocketClient__Connect.func = function(runtimeScene, host, parentEventsFunctionContext) {
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
if (argName === "host") return host;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebSocketClient__Connect.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WebSocketClient__Connect.registeredGdjsCallbacks = [];