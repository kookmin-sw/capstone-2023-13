import React, {useEffect, useState, useRef} from "react";
import "@pages/Startpage/StartPage.css"
import "./SignupBox.css";
import axios from 'axios';
import axiosInstance from "@/js/axiosInstance";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.minimal.css';

function SignupBox({ onPage }) {
  const notify = () => toast("이미 존재하는 이메일입니다.", {
    transition:Slide
  });
  const finishClick = () => {
    signupPost();
    // onPage("custom");
  }
  const dupClick = () => {
    console.log('중복검사');
    dupCheck();
  }
  const backClick = () => {
    onPage("login");
  }
  const emailInputRef = useRef(null);
  //입력 값 저장
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('12');
  const [password_check, setPasswordCheck] = useState('12');
  const [name, setName] = useState('nametest');
  const [nickname, setNickname] = useState('nicktest');
  const [bank, setBank] = useState('기업은행');
  const [address, setAddress] = useState('test');
  const [account, setAccount] = useState('123');

  //오류 메시지 저장
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  //유효성검사
  
  const [isEmail, setIsEmail] = useState(false)
  const [isDup, setIsDup] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isName, setIsName] = useState(false)
  const [isNickname, setIsNickname] = useState(false)
  const [isBank, setIsBank] = useState(false)
  const [isAccount, setIsAccount] = useState(false)
  const [isAddress, setIsAddress] = useState(false)
  
  const onChangeEmail = (e) => {
    // console.log('유효성검사');
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      // console.log('nono')
      setIsEmail(false)
      setIsDup(false)
      setEmailMessage('이메일 형식이 올바르지 않습니다.')
    } else {
      // console.log('good')
      setIsEmail(true)
      setIsDup(false)
      setEmailMessage('이메일 중복검사를 해주세요')      
    }
  }
  function onChangeBank(e){
    setBank(e.target.value);
  }
  //동기적 처리 
  useEffect(() => {
    if (isEmail){
      setIsEmail(true);
    }
    else{
      setIsEmail(false);
    }
  }, [isEmail]);
  useEffect(() => {
    if (password === password_check){
      setPasswordCheckMessage('비밀번호가 일치합니다.')
      setIsPassword(true)
    }else{
      setPasswordCheckMessage('비밀번호가 일치하지 않습니다.')
      setIsPassword(false)
    }
  }, [password, password_check, isPassword]);
  useEffect(() => {
    if (name !==''){
      setIsName(true);
    }
    else if (name === ''){
      setIsName(false);
    }
  }, [name, isName]);
  useEffect(() => {
    if (nickname !==''){
      setIsNickname(true);
    }
    else if (name === ''){
      setIsNickname(false);
    }
  }, [nickname, isNickname]);
  useEffect(() => {
    if (bank !== '') {
      setIsBank(true);
    }
    else if(bank === ''){
      setIsBank(false);
    }
  }, [bank, isBank]);
  useEffect(() => {
    if (account !== '') {
      setIsAccount(true);
    }
    else if(account === ''){
      setIsAccount(false);
    }
  }, [account, isAccount]);
  useEffect(() => {
    if (address !== '') {
      setIsAddress(true);
    }
    else if(address === ''){
      setIsAddress(false);
    }
  }, [address, isAddress]);
  const dupCheck = async() => {
    try {
      const response = await axiosInstance.post("/users/emailDup", {
        email: email
      });
      console.log(response.data);
      setIsDup(false);
      setEmailMessage('이미 존재하는 이메일입니다.');
    } catch (error) {
        if (error.response.status === 400) { // 400: Conflict (이미 등록된 이메일)
          console.log('success');
          setIsDup(true);
          setEmailMessage('가입할 수 있는 이메일입니다.');
        }
        else {
          console.log(error);
        }
      }
  }
  const signupPost = async () => {
    try {
    const response = await axiosInstance.post("/users/signup", {
      id: 0,
      email: email,
      password: password,
      name: name,
      nickname:nickname,
      bank: bank,
      account: account,
      address: address
    });
    console.log(response.data);
    console.log('success');
    onPage('custom');
  } catch (error) {
    console.log(error);
      // if (error.response.status === 400) { // 400: Conflict (이미 등록된 이메일)
      //   notify();
      //   setIsEmail(false);
      //   emailInputRef.current.focus();
      // }
      // else {
      //   console.log(error);
      // }
    }
  };
  return (
    <div>
        <div className="TitleDiv">
            <div className="signup-MetaIcon"></div>
            <div className="SignupText">회원가입</div>
        </div>
        <div className="inputForm">
        {/* <button onClick={notify}>Notify !</button> */}
        <ToastContainer
        position="bottom-center"
        limit={1}
        closeButton={false}
        autoClose={700}
        hideProgressBar
        transition={Slide}
      />
            <div className="inputDiv">
              {/* <div className="labelDiv">이메일 주소</div> */}
              <input className="emailBox" type="text" value={email} onChange={(e) => onChangeEmail(e)} ref={emailInputRef}></input>
              <button className="dupBtn" onClick={dupClick} disabled={!(isEmail)}>중복확인</button>
              {/* <div>올바른 이메일 형식이 아닙니다.</div> */}
              {email.length > 0 && (
              <div className={`message ${isDup ? 'success' : 'error'}`}>{emailMessage}</div>
          )}
            </div>
            <div className="inputDiv">
              {/* <div className="labelDiv">비밀번호</div> */}
              <input className="signup-inputBox passwordBox" placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              <input className="signup-inputBox passwordBox" placeholder="비밀번호 확인" type="password" value={password_check} onChange={(e) => setPasswordCheck(e.target.value)}></input>
              {password_check.length > 0 && (
              <div className={`message ${isPassword ? 'success' : 'error'}`}>{passwordCheckMessage}</div>
          )}
            </div>
            <div className="inputDiv">
              <input className="signup-inputBox nameBox" placeholder="이름" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            {/* <div className="inputDiv">
              <div className="labelDiv">생년월일</div>
              <input className="signup-inputBox" type="password"></input>
            </div> */}
            <div className="inputDiv">
              <input className="signup-inputBox nicknameBox" placeholder="닉네임" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              <input className="signup-inputBox addressBox" placeholder="주소" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              {/* <input className="signup-inputBox" type="text" value={bank} onChange={(e) => setBank(e.target.value)}></input> */}
              <select className="selectBox" name="bank" onChange={onChangeBank}>
                <option value="">은행선택</option>
                <option value="기업은행">기업은행</option>
                <option value="국민은행">국민은행</option>
                <option value="우리은행">우리은행</option>
                <option value="토스뱅크">토스뱅크</option>
              </select>
            </div>
            <div className="inputDiv">
              <input className="signup-inputBox accountBox" placeholder="계좌" type="text" value={account} onChange={(e) => setAccount(e.target.value)}></input>
            </div>
        </div>
        <button className="finishBtn" onClick={finishClick} disabled={!(isEmail && isPassword && isName && isNickname && isAddress && isBank && isAccount && isDup)}>가입하기</button>
        {/* <button className="finishBtn" onClick={finishClick} disabled={true}>완료</button> */}
        <button className="whiteBtn" onClick={backClick}>뒤로</button>
    </div>
  );
}

export default SignupBox;