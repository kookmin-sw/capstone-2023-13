gdjs.Store_32sceneCode = {};
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1= [];
gdjs.Store_32sceneCode.GDMaleCharacter10Objects2= [];
gdjs.Store_32sceneCode.GDTextInputObjects1= [];
gdjs.Store_32sceneCode.GDTextInputObjects2= [];
gdjs.Store_32sceneCode.GDBlankEmoteMidObjects1= [];
gdjs.Store_32sceneCode.GDBlankEmoteMidObjects2= [];
gdjs.Store_32sceneCode.GDChatTextObjects1= [];
gdjs.Store_32sceneCode.GDChatTextObjects2= [];
gdjs.Store_32sceneCode.GDGraniteMarbleFloorTilesObjects1= [];
gdjs.Store_32sceneCode.GDGraniteMarbleFloorTilesObjects2= [];
gdjs.Store_32sceneCode.GDWhiteDoorObjects1= [];
gdjs.Store_32sceneCode.GDWhiteDoorObjects2= [];
gdjs.Store_32sceneCode.GDGreyTableObjects1= [];
gdjs.Store_32sceneCode.GDGreyTableObjects2= [];
gdjs.Store_32sceneCode.GDWhiteBackgroundPopupObjects1= [];
gdjs.Store_32sceneCode.GDWhiteBackgroundPopupObjects2= [];
gdjs.Store_32sceneCode.GDBlueTitlePopupObjects1= [];
gdjs.Store_32sceneCode.GDBlueTitlePopupObjects2= [];
gdjs.Store_32sceneCode.GDProductListPopupObjects1= [];
gdjs.Store_32sceneCode.GDProductListPopupObjects2= [];
gdjs.Store_32sceneCode.GDDohEmoteMidPopupObjects1= [];
gdjs.Store_32sceneCode.GDDohEmoteMidPopupObjects2= [];
gdjs.Store_32sceneCode.GDPerchaseButtonObjects1= [];
gdjs.Store_32sceneCode.GDPerchaseButtonObjects2= [];
gdjs.Store_32sceneCode.GDCancelButtonObjects1= [];
gdjs.Store_32sceneCode.GDCancelButtonObjects2= [];


gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Store_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDWhiteDoorObjects1Objects = Hashtable.newFrom({"WhiteDoor": gdjs.Store_32sceneCode.GDWhiteDoorObjects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Store_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDGreyTableObjects1Objects = Hashtable.newFrom({"GreyTable": gdjs.Store_32sceneCode.GDGreyTableObjects1});
gdjs.Store_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( !(gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDoor"), gdjs.Store_32sceneCode.GDWhiteDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDWhiteDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Square scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyTable"), gdjs.Store_32sceneCode.GDGreyTableObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDGreyTableObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Popup Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CancelButton"), gdjs.Store_32sceneCode.GDCancelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDCancelButtonObjects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDCancelButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Store_32sceneCode.GDCancelButtonObjects1[k] = gdjs.Store_32sceneCode.GDCancelButtonObjects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDCancelButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Popup Layer");
}}

}


};

gdjs.Store_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Store_32sceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Store_32sceneCode.GDTextInputObjects1.length = 0;
gdjs.Store_32sceneCode.GDTextInputObjects2.length = 0;
gdjs.Store_32sceneCode.GDBlankEmoteMidObjects1.length = 0;
gdjs.Store_32sceneCode.GDBlankEmoteMidObjects2.length = 0;
gdjs.Store_32sceneCode.GDChatTextObjects1.length = 0;
gdjs.Store_32sceneCode.GDChatTextObjects2.length = 0;
gdjs.Store_32sceneCode.GDGraniteMarbleFloorTilesObjects1.length = 0;
gdjs.Store_32sceneCode.GDGraniteMarbleFloorTilesObjects2.length = 0;
gdjs.Store_32sceneCode.GDWhiteDoorObjects1.length = 0;
gdjs.Store_32sceneCode.GDWhiteDoorObjects2.length = 0;
gdjs.Store_32sceneCode.GDGreyTableObjects1.length = 0;
gdjs.Store_32sceneCode.GDGreyTableObjects2.length = 0;
gdjs.Store_32sceneCode.GDWhiteBackgroundPopupObjects1.length = 0;
gdjs.Store_32sceneCode.GDWhiteBackgroundPopupObjects2.length = 0;
gdjs.Store_32sceneCode.GDBlueTitlePopupObjects1.length = 0;
gdjs.Store_32sceneCode.GDBlueTitlePopupObjects2.length = 0;
gdjs.Store_32sceneCode.GDProductListPopupObjects1.length = 0;
gdjs.Store_32sceneCode.GDProductListPopupObjects2.length = 0;
gdjs.Store_32sceneCode.GDDohEmoteMidPopupObjects1.length = 0;
gdjs.Store_32sceneCode.GDDohEmoteMidPopupObjects2.length = 0;
gdjs.Store_32sceneCode.GDPerchaseButtonObjects1.length = 0;
gdjs.Store_32sceneCode.GDPerchaseButtonObjects2.length = 0;
gdjs.Store_32sceneCode.GDCancelButtonObjects1.length = 0;
gdjs.Store_32sceneCode.GDCancelButtonObjects2.length = 0;

gdjs.Store_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Store_32sceneCode'] = gdjs.Store_32sceneCode;
