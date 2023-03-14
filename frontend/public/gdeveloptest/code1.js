gdjs.StartScreenCode = {};
gdjs.StartScreenCode.GDBackgroundColoredLandObjects1= [];
gdjs.StartScreenCode.GDBackgroundColoredLandObjects2= [];
gdjs.StartScreenCode.GDTitleObjects1= [];
gdjs.StartScreenCode.GDTitleObjects2= [];
gdjs.StartScreenCode.GDStartObjects1= [];
gdjs.StartScreenCode.GDStartObjects2= [];

gdjs.StartScreenCode.conditionTrue_0 = {val:false};
gdjs.StartScreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition1IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition2IsTrue_0 = {val:false};


gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartScreenCode.GDStartObjects1});
gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartScreenCode.GDStartObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.StartScreenCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.StartScreenCode.GDTitleObjects1.length = 0;
gdjs.StartScreenCode.GDTitleObjects2.length = 0;
gdjs.StartScreenCode.GDStartObjects1.length = 0;
gdjs.StartScreenCode.GDStartObjects2.length = 0;

gdjs.StartScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
