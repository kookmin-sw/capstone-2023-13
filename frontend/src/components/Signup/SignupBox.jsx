import React, {useEffect, useState} from "react";
import "../../pages/Startpage/StartPage.css"
import "./SignupBox.css";
import axios from 'axios';
import axiosInstance from "../../js/axiosInstance";

function SignupBox({ onPage }) {
  const finishClick = () => {
    // loginPost();
    onPage("custom");
    
  }
  const backClick = () => {
    onPage("login");
  }
  //입력 값 저장
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_check, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [bank, setBank] = useState('');
  const [address, setAddress] = useState('');
  const [account, setAccount] = useState('');

  //오류 메시지 저장
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  //유효성검사
  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isBank, setIsBank] = useState(false)
  const [isAccount, setIsAccount] = useState(false)
  const [isAddress, setIsAddress] = useState(false)
  
  const onChangeEmail = (e) => {
    console.log('유효성검사');
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      console.log('nono')
      setIsEmail(false)
      setEmailMessage('이메일 형식이 올바르지 않습니다.')
    } else {
      console.log('good')
      setIsEmail(true)
      setEmailMessage('이메일 확인')      
    }
  }
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  //   if (name != ''){
  //     setIsName(true)
  //   }
  //   console.log('dd',name)
  //   console.log('hhh',isName)
  // }
  // const onChangeAddress = (e) => {
  //   setAddress(e.target.value);
  //   if (address != ''){
  //     setIsAddress(true)
  //   }
  //   console.log(address)
  //   console.log(isAddress)
  // }
  // const onChangeBank = (e) => {
  //   setBank(e.target.value);
  // }
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
      setPasswordCheckMessage('비밀번호 같음')
      setIsPassword(true)
    }else{
      setPasswordCheckMessage('비밀번호 다름')
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
  // const onChangeAccount = (e) => {
  //   setAccount(e.target.value);
  //   console.log('1',account)
  //   if (account != ''){
  //     console.log('2',account)
  //     setIsAccount(true)
  //   }
  //   console.log('3',account)
  //   console.log(isAccount)
  // }
  const loginPost = async (e) => {
    console.log('hi');
    e.preventDefault();
    axiosInstance
      .post("/users/signup", {id : 0 ,email : 'test@test.com', password : 1234, name : 'tt', bank : 'bb', account : 123, address : 'gg' })
      // .post("/users/signup", {id : 0 ,email : email, password : password, name : name, bank : bank, account : account, address : address })
      .then((response) => {
        console.log(response.data);
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      })
    // try{
    //   const response = await axios.post('/users/signup', {id : id, email : email, password : password, name : name, bank : bank, account : account, address : address });
    //   console.log(response.data);
    //   console.log('login success');
    // } catch(error){
    //   console.log(error);
    // }
  };
  return (
    <div>
        <div className="TitleDiv">
            <div className="signup-MetaIcon"></div>
            <div className="SignupText">회원가입</div>
        </div>
        <div className="inputForm">
            <div className="inputDiv">
              <div className="labelDiv">이메일 주소</div>
              <input className="inputBox" type="text" value={email} onChange={(e) => onChangeEmail(e)}></input>
              {/* <div>올바른 이메일 형식이 아닙니다.</div> */}
              {email.length > 0 && (
              <div className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</div>
          )}

            </div>
            <div className="inputDiv">
              <div className="labelDiv">비밀번호</div>
              <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">비밀번호 확인</div>
              <input className="inputBox" type="password" value={password_check} onChange={(e) => setPasswordCheck(e.target.value)}></input>
              {password_check.length > 0 && (
              <div className={`message ${isPassword ? 'success' : 'error'}`}>{passwordCheckMessage}</div>
          )}
            </div>
            <div className="inputDiv">
              <div className="labelDiv">이름</div>
              <input className="inputBox" type="test" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            {/* <div className="inputDiv">
              <div className="labelDiv">생년월일</div>
              <input className="inputBox" type="password"></input>
            </div> */}
            <div className="inputDiv">
              <div className="labelDiv">닉네임</div>
              <input className="inputBox" type="text"></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">주소</div>
              <input className="inputBox" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">은행</div>
              <input className="inputBox" type="text" value={bank} onChange={(e) => setBank(e.target.value)}></input>
            </div>
            <div className="inputDiv">
              <div className="labelDiv">계좌</div>
              <input className="inputBox" type="text" value={account} onChange={(e) => setAccount(e.target.value)}></input>
            </div>
        </div>
        <button className="finishBtn" onClick={finishClick} disabled={!(isEmail && isPassword && isName && isAddress && isBank && isAccount)}>완료</button>
        {/* <button className="finishBtn" onClick={finishClick} disabled={true}>완료</button> */}
        <button className="lastBtn signupBtn" onClick={backClick}>뒤로</button>
    </div>
  );
}

export default SignupBox;