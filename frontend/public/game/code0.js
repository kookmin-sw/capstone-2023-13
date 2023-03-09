gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2= [];
gdjs.Untitled_32sceneCode.GDSummerTilePlatformCenterObjects1= [];
gdjs.Untitled_32sceneCode.GDSummerTilePlatformCenterObjects2= [];
gdjs.Untitled_32sceneCode.GDCannonBallObjects1= [];
gdjs.Untitled_32sceneCode.GDCannonBallObjects2= [];
gdjs.Untitled_32sceneCode.GDBarrelObjects1= [];
gdjs.Untitled_32sceneCode.GDBarrelObjects2= [];
gdjs.Untitled_32sceneCode.GDBrownBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDBrownBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDRedBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDRedBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDYouWINObjects1= [];
gdjs.Untitled_32sceneCode.GDYouWINObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.Untitled_32sceneCode.GDCannonBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBarrelObjects1Objects = Hashtable.newFrom({"Barrel": gdjs.Untitled_32sceneCode.GDBarrelObjects1});
gdjs.Untitled_32sceneCode.asyncCallback8160260 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f78397e2-c9d6-4df5-8bea-42dcea7ee6ee", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScreen", false);
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8160260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.Untitled_32sceneCode.GDCannonBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBackgroundColoredGrassObjects1Objects = Hashtable.newFrom({"BackgroundColoredGrass": gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Barrel"), gdjs.Untitled_32sceneCode.GDBarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.Untitled_32sceneCode.GDCannonBallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCannonBallObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBarrelObjects1Objects, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBarrelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBarrelObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "WinLayer");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackgroundColoredGrass"), gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.Untitled_32sceneCode.GDCannonBallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCannonBallObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBackgroundColoredGrassObjects1Objects, true, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDCannonBallObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCannonBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCannonBallObjects1[i].getBehavior("DraggablePhysics").ReleaseDrag((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Score");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getString() + ("Timer : "));
}
}{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "f78397e2-c9d6-4df5-8bea-42dcea7ee6ee", gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Score"));
}}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSummerTilePlatformCenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSummerTilePlatformCenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCannonBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCannonBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBarrelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBarrelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrownBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrownBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYouWINObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYouWINObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
