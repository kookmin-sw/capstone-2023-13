gdjs.Square_32sceneCode = {};
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1= [];
gdjs.Square_32sceneCode.GDMaleCharacter10Objects2= [];
gdjs.Square_32sceneCode.GDTextInputObjects1= [];
gdjs.Square_32sceneCode.GDTextInputObjects2= [];
gdjs.Square_32sceneCode.GDBlankEmoteMidObjects1= [];
gdjs.Square_32sceneCode.GDBlankEmoteMidObjects2= [];
gdjs.Square_32sceneCode.GDChatTextObjects1= [];
gdjs.Square_32sceneCode.GDChatTextObjects2= [];
gdjs.Square_32sceneCode.GDWoodBackgroundObjects1= [];
gdjs.Square_32sceneCode.GDWoodBackgroundObjects2= [];
gdjs.Square_32sceneCode.GDWhiteDoorObjects1= [];
gdjs.Square_32sceneCode.GDWhiteDoorObjects2= [];


gdjs.Square_32sceneCode.userFunc0x7fd7d0 = function(runtimeScene) {
"use strict";
runtimeScene.ws = new WebSocket("ws://43.201.210.173:9001/ws");

runtimeScene.ws.onopen = function(event) {

    const data = {
        user_id: "001", 
        channel_id : "Square3",
        X : 0,
        Y : 0
    }
    setTimeout(() => {
        runtimeScene.ws.send(JSON.stringify(data))
    }, 500);

}

function disconnectWebSocket(runtimeScene) {
  if (runtimeScene.ws) {
    console.log('Disconnecting WebSocket...');
    runtimeScene.ws.close();
  } else {
    console.log('WebSocket is not connected.');
  }
}

function createChat(e) {
    const newTextObjects = new gdjs.TextRuntimeObject(runtimeScene, {
        characterSize: 28,
        name: "newTextObjects",
        effects: {},
        behaviors: {},
        variables: {},
        color: {r: 0, g: 0, b: 0},
        string: e.msg,
        fontFamily: "Arial",
        fontStyle: {
            bold: false,
            italic: false,                
            underline: false
        },
        alignment: "left",
    });
    const newTextIdObjects = new gdjs.TextRuntimeObject(runtimeScene, {
        characterSize: 20,
        name: "newTextIdObjects",
        effects: {},
        behaviors: {},
        variables: {},
        color: {r: 0, g: 0, b: 0},
        string: e.user_id,
        fontFamily: "Arial",
        fontStyle: {
            bold: false,
            italic: false,
            underline: false
        },
        alignment: "left",
    });
    console.log(newTextObjects);
    // 새로운 텍스트 객체를 씬에 추가합니다.
    runtimeScene.addObject(newTextIdObjects);
    runtimeScene.addObject(newTextObjects);
    newTextIdObjects.setX(10);
    newTextIdObjects.setY(490);
    newTextIdObjects.setZOrder(6);
    newTextIdObjects.setLayer("UI Layer");
    newTextObjects.setX(10);
    newTextObjects.setY(510);
    newTextObjects.setZOrder(6);
    newTextObjects.setLayer("UI Layer");
}

function manageChat(e) {
    const chatNum = runtimeScene.getObjects("newTextObjects");
    const idNum = runtimeScene.getObjects("newTextIdObjects");

    if (chatNum.length >= 1) {
        for (let i = 0; i < chatNum.length; i++) {
            const cY = chatNum[i].getY();
            const iY = idNum[i].getY();
            console.log(cY, iY);
            chatNum[i].setY(cY - 60);
            idNum[i].setY(iY - 60);
        }
    }
    createChat(e);
}



// 1번 단계: 메시지를 받았을 때 처리하는 코드
runtimeScene.ws.onmessage = function(event) {
    const e = JSON.parse(event.data);
    console.log(e.status);
    if (e.type === "chat") {
        manageChat(e);
    }
}

runtimeScene.onSceneUnloaded = function() {
    // 게임이 종료되거나 창이 닫히는 경우 웹소켓 연결을 종료합니다.
    disconnectWebSocket(runtimeScene);
};

window.onerror = function(message, source, lineno, colno, error) {
    // 에러 메시지를 콘솔에 출력합니다.
    console.error('An error occurred:', message, source, lineno, colno, error);

    // 사용자에게 에러가 발생했음을 알리는 다이얼로그를 표시합니다.
    // alert('게임에서 오류가 발생했습니다. 새로고침하거나 다시 시도해주세요.');

    // 필요한 경우 서버에 에러 정보를 전송하거나 저장할 수 있습니다.
    disconnectWebSocket(runtimeScene);
    // 에러가 처리되었음을 나타내려면 true를 반환합니다.
    return true;
};

};
gdjs.Square_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Square_32sceneCode.userFunc0x7fd7d0(runtimeScene);

}


};gdjs.Square_32sceneCode.userFunc0x80be90 = function(runtimeScene) {
"use strict";
// 메시지 전송 함수
function sendMessage(message) {
  const data = { type : "chat", user_id : "001", msg : message };
  // runtimeScene.ws.send(JSON.stringify(data));
  setTimeout(() => {
    runtimeScene.ws.send(JSON.stringify(data))
  }, 500);
}

// 입력된 텍스트 가져오기
const myText = runtimeScene.getObjects("TextInput")[0];
const inputText = myText.getString();

// const inputManager = runtimeScene.getGame().getInputManager();
// const RETURN_KEY_CODE = 13; // Return 키의 키 코드는 13입니다.

const currentValue = myText.getString();
// 이전 값과 현재 값이 다른지 확인하고 엔터 키를 눌렀는지 확인합니다.
const isEnterPressed = currentValue.endsWith("\n") && currentValue !== runtimeScene.textInputLastValue;

//console.log(isEnterPressed);
// TextInput의 값을 업데이트합니다.
runtimeScene.textInputLastValue = currentValue;

if (isEnterPressed) {
  //console.log(inputManager.getLastPressedKey() === RETURN_KEY_CODE);
  sendMessage(inputText);
  myText.setString("");
}
};
gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDMaleCharacter10Objects1Objects = Hashtable.newFrom({"MaleCharacter10": gdjs.Square_32sceneCode.GDMaleCharacter10Objects1});
gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDWhiteDoorObjects1Objects = Hashtable.newFrom({"WhiteDoor": gdjs.Square_32sceneCode.GDWhiteDoorObjects1});
gdjs.Square_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].setAnimationName("Walking Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length;i<l;++i) {
    if ( !(gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[k] = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i];
        ++k;
    }
}
gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Square_32sceneCode.GDMaleCharacter10Objects1 */
{for(var i = 0, len = gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length ;i < len;++i) {
    gdjs.Square_32sceneCode.GDMaleCharacter10Objects1[i].pauseAnimation();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Square_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Square_32sceneCode.userFunc0x80be90(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("MaleCharacter10"), gdjs.Square_32sceneCode.GDMaleCharacter10Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDoor"), gdjs.Square_32sceneCode.GDWhiteDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDMaleCharacter10Objects1Objects, gdjs.Square_32sceneCode.mapOfGDgdjs_46Square_9532sceneCode_46GDWhiteDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Store scene", true);
}}

}


};

gdjs.Square_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Square_32sceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Square_32sceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Square_32sceneCode.GDTextInputObjects1.length = 0;
gdjs.Square_32sceneCode.GDTextInputObjects2.length = 0;
gdjs.Square_32sceneCode.GDBlankEmoteMidObjects1.length = 0;
gdjs.Square_32sceneCode.GDBlankEmoteMidObjects2.length = 0;
gdjs.Square_32sceneCode.GDChatTextObjects1.length = 0;
gdjs.Square_32sceneCode.GDChatTextObjects2.length = 0;
gdjs.Square_32sceneCode.GDWoodBackgroundObjects1.length = 0;
gdjs.Square_32sceneCode.GDWoodBackgroundObjects2.length = 0;
gdjs.Square_32sceneCode.GDWhiteDoorObjects1.length = 0;
gdjs.Square_32sceneCode.GDWhiteDoorObjects2.length = 0;

gdjs.Square_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Square_32sceneCode'] = gdjs.Square_32sceneCode;
