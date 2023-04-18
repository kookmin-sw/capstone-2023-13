import React, { useState } from "react";
import axios from 'axios';
import "@pages/Startpage/StartPage.css"
import "./LoginBox.css";
import { useNavigate } from "react-router-dom";

function LoginBox({ onPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  }
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const isLogin = () => {
    const response = axios.post(
      'http://localhost:8080/users/login',
      {
        "email": email,
        "password": password
      },
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data) {
          localStorage.setItem('login-token', response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  const movePage = useNavigate();

  function loginClick(){
    movePage('/main');
  }

  const signupClick = () => {
    onPage("signup")
  }

  const findClick = () => {
    onPage("find")
  }

  return (
    <div>
        <div className="mainTitleDiv">
            <div className="login-MetaIcon"></div>
            <div className="TitleText">Meta-Pop</div>
        </div>
        
        <div className="inputDiv">
          <div className="labelDiv">이메일 주소</div>
          <input className="inputBox" type="email" value={email} onChange={onEmailHandler} />
        </div>
        <div className="inputDiv">
          <div className="labelDiv">비밀번호</div>
          <input className="inputBox" type="password" value={password} onChange={onPasswordHandler} />
        </div>
        <div className="maintainDiv">
          <input className="checkStyle" type="checkbox"></input>
          <label className="checkLabel">로그인 유지</label>
          <a className="findDiv" onClick={findClick}>비밀번호 찾기</a>
        </div>
        
        <button className="blueBtn" onClick={loginClick}>로그인</button>
        <button className="whiteBtn" onClick={signupClick}>회원가입</button>

        
        <div className="hrLine">or</div>
        <button className="googleBtn">
          <div className="googleLogo"></div>
          구글로 로그인하기
        </button>
    </div>
  );
}

export default LoginBox;