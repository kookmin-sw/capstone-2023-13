gdjs.Square_32sceneCode = {};
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1= [];
gdjs.Square_32sceneCode.GDMaleCharacter10Objects2= [];
gdjs.Square_32sceneCode.GDWoodBackgroundObjects1= [];
gdjs.Square_32sceneCode.GDWoodBackgroundObjects2= [];
gdjs.Square_32sceneCode.GDWhiteDoorObjects1= [];
gdjs.Square_32sceneCode.GDWhiteDoorObjects2= [];

gdjs.Square_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Square_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Square_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Square_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Square_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDWhiteDoorObjects1Objects = Hashtable.newFrom({"WhiteDoor": gdjs.Square_32sceneCode.GDWhiteDoorObjects1});
gdjs.Square_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( !(gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Square_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;}if (gdjs.Square_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDoor"), gdjs.Square_32sceneCode.GDWhiteDoorObjects1);

gdjs.Square_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Square_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Square_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDWhiteDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Square_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Square_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.Square_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Store scene", true);
}}

}


};

gdjs.Square_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Square_32sceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Square_32sceneCode.GDWoodBackgroundObjects1.length = 0;
gdjs.Square_32sceneCode.GDWoodBackgroundObjects2.length = 0;
gdjs.Square_32sceneCode.GDWhiteDoorObjects1.length = 0;
gdjs.Square_32sceneCode.GDWhiteDoorObjects2.length = 0;

gdjs.Square_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Square_32sceneCode'] = gdjs.Square_32sceneCode;
