import React from "react";
import "../pages/StartPage.css";
import "./SignupBox.css";

function SignupBox() {
  return (
    <div>
        <div className="TitleDiv">
            <div className="signup-MetaIcon"></div>
            <div className="SignupText">회원가입</div>
        </div>
        <div className="inputForm">
            <div className="inputDiv">
              <div className="labelDiv">이메일 주소</div>
              <input className="inputBox" type="text"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">비밀번호</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">비밀번호 확인</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">이름</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">생년월일</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">닉네임</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">주소</div>
              <input className="inputBox" type="password"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">계좌</div>
              <input className="inputBox" type="password"></input>
            </div>
        </div>
        <button className="lastBtn">완료</button>
    </div>
  );
}

export default SignupBox;