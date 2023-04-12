gdjs.Store_32sceneCode = {};
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1= [];
gdjs.Store_32sceneCode.GDMaleCharacter10Objects2= [];
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

gdjs.Store_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Store_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Store_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Store_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Store_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDWhiteDoorObjects1Objects = Hashtable.newFrom({"WhiteDoor": gdjs.Store_32sceneCode.GDWhiteDoorObjects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Store_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDGreyTableObjects1Objects = Hashtable.newFrom({"GreyTable": gdjs.Store_32sceneCode.GDGreyTableObjects1});
gdjs.Store_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( !(gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Store_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Store_32sceneCode.GDMaleCharacter10Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDoor"), gdjs.Store_32sceneCode.GDWhiteDoorObjects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Store_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Store_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDWhiteDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Store_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Store_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.Store_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Square scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyTable"), gdjs.Store_32sceneCode.GDGreyTableObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Store_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Store_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Store_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Store_32sceneCode.mapOfGDgdjs_46Store_9532sceneCode_46GDGreyTableObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Store_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Store_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.Store_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Popup Layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CancelButton"), gdjs.Store_32sceneCode.GDCancelButtonObjects1);

gdjs.Store_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Store_32sceneCode.GDCancelButtonObjects1.length;i<l;++i) {
    if ( gdjs.Store_32sceneCode.GDCancelButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Store_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Store_32sceneCode.GDCancelButtonObjects1[k] = gdjs.Store_32sceneCode.GDCancelButtonObjects1[i];
        ++k;
    }
}
gdjs.Store_32sceneCode.GDCancelButtonObjects1.length = k;}if (gdjs.Store_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Popup Layer");
}}

}


};

gdjs.Store_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Store_32sceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Store_32sceneCode.GDMaleCharacter10Objects2.length = 0;
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
