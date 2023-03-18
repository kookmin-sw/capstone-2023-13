import React from "react";
import "../../pages/Startpage/StartPage.css"
import "./LoginBox.css";

function LoginBox({ onPage }) {
  const signupClick = () => {
    onPage("signup")
  }

  const findClick = () => {
    onPage("find")
  }

  return (
    <div>
        <div className="TitleDiv">
            <div className="login-MetaIcon"></div>
            <div className="TitleText">Meta-Pop</div>
        </div>
        
        <div className="inputDiv">
          <div className="labelDiv">이메일 주소</div>
          <input className="inputBox" type="text"></input>
        </div>
        <div className="inputDiv">
          <div className="labelDiv">비밀번호</div>
          
          <input className="inputBox" type="password"></input>
        </div>
        <div className="maintainDiv">
          <input className="checkStyle" type="checkbox"></input>
          <label className="checkLabel">로그인 유지</label>
          <a className="findDiv" onClick={findClick}>비밀번호 찾기</a>
        </div>
        
        <button className="lastBtn">로그인</button>
        <button className="lastBtn signupBtn" onClick={signupClick}>회원가입</button>
        
        <div className="hrLine">or</div>
        <button className="googleBtn">
          <div className="googleLogo"></div>
          구글로 로그인하기
        </button>
    </div>
  );
}

export default LoginBox;