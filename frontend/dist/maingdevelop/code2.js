gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDMaleCharacter10Objects1= [];
gdjs.Untitled_32sceneCode.GDMaleCharacter10Objects2= [];
gdjs.Untitled_32sceneCode.GDTextInputObjects1= [];
gdjs.Untitled_32sceneCode.GDTextInputObjects2= [];
gdjs.Untitled_32sceneCode.GDBlankEmoteMidObjects1= [];
gdjs.Untitled_32sceneCode.GDBlankEmoteMidObjects2= [];
gdjs.Untitled_32sceneCode.GDChatTextObjects1= [];
gdjs.Untitled_32sceneCode.GDChatTextObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallCheckeredFloorTilesObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallCheckeredFloorTilesObjects2= [];
gdjs.Untitled_32sceneCode.GDDevout8Objects1= [];
gdjs.Untitled_32sceneCode.GDDevout8Objects2= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter3Objects1= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter3Objects2= [];
gdjs.Untitled_32sceneCode.GDServerConnectedObjects1= [];
gdjs.Untitled_32sceneCode.GDServerConnectedObjects2= [];


gdjs.Untitled_32sceneCode.userFunc0x96daa0 = function(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
// WebSocket 객체 생성
var socket = new WebSocket("ws://example.com/socket");

// 연결 열기
socket.onopen = function() {
  console.log("WebSocket 연결이 열렸습니다.");

  // JSON 데이터 생성
  // 추후 케릭터 에셋이 정해지면 외형에 대한 데이터 코드도 추가
  var data = {playerId: 1234, x : 30, y : 30, z : 7};

  // JSON 문자열로 변환
  var jsonString = JSON.stringify(data);
  
  // 서버에 JSON 데이터 보내기
  socket.send(jsonString);
};

// 서버로부터 메시지 받기
socket.onmessage = function(event) {
  var data = JSON.parse(event.data);
  
  // 플레이어 위치 처리
  if (data.type === "playerLocation") {
    var playerId = data.playerId;
    // 추후 케릭터 에셋이 정해지면 외형에 대한 데이터 코드도 추가
    var x = data.x;
    var y = data.y;
    var z = data.z;
    // playerId에 해당하는 플레이어의 위치 업데이트
    updatePlayerLocation(playerId, x, y, z);
  }
};

// 에러 처리
socket.onerror = function(error) {
  console.error("WebSocket 에러가 발생했습니다:", error);
};

// 연결 닫기
socket.onclose = function(event) {
  console.log("WebSocket 연결이 닫혔습니다:", event.code, event.reason);
};

// 플레이어 위치 업데이트 함수
function updatePlayerLocation(playerId, x, y, z) {
  if (playerId == 1234) {
    // playerId에 해당하는 플레이어의 위치 업데이트
    // 예를 들어, playerId가 "player1"이면 "player1"의 위치를 x, y로 업데이트합니다.
  }
}
};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebSocketClient__IsConnected.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ServerConnected"), gdjs.Untitled_32sceneCode.GDServerConnectedObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDServerConnectedObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDServerConnectedObjects1[i].setString("Connect");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Untitled_32sceneCode.userFunc0x96daa0(runtimeScene);

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDMaleCharacter10Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDMaleCharacter10Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTextInputObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTextInputObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlankEmoteMidObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlankEmoteMidObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDChatTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDChatTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCheckeredFloorTilesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCheckeredFloorTilesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDevout8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDevout8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDServerConnectedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDServerConnectedObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
