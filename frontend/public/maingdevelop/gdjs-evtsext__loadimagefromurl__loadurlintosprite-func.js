
if (typeof gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite !== "undefined") {
  gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite = {};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1= [];


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.userFunc0x9f4820 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (eventsFunctionContext.getArgument("ChangeResource")) {
    const texture = PIXI.BaseTexture.from(eventsFunctionContext.getArgument("URL"));
    for (const obj of objects) obj.getRendererObject().texture.baseTexture = texture;
} else {
    const texture = PIXI.Texture.from(eventsFunctionContext.getArgument("URL"));
    for (const obj of objects) obj.getRendererObject().texture = texture;
}

};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1);
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.userFunc0x9f4820(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func = function(runtimeScene, URL, Object, ChangeResource, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "URL") return URL;
if (argName === "ChangeResource") return ChangeResource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1.length = 0;

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks = [];