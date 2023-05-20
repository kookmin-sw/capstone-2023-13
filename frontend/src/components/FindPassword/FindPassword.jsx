import React, { useState } from "react";
import * as styled from './styles';
import axios from 'axios';




const FindPassword = ({ onPage }) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");


    const passwordSentClick = () => {
        onPage("passwordsent", { name, email })
    }
    const backClick = () => {
        onPage("login")
    }


    const SendTempPassword = () => {
        const response = axios.post(
            'http://43.201.210.173:8080/users/findpw',
            {
                "email": email,
                "name" : name
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
                // backClick();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(name);
    console.log(email);

    return (
        <div className="findWhiteBox"
            style={{
                // height: "400px",
                // boxSizing: "border-box",
                padding: "30px",
                paddingLeft: "70px",
                paddingRight: "70px",
            }}>
            <styled.TitleDiv>
                <styled.MetaIcon />
                <span>비밀번호 찾기</span>
            </styled.TitleDiv>
            <styled.NameDiv>
                <span>이름</span>
                <styled.NameInputBox value={name} onChange={(e) => setname(e.target.value)}/>
            </styled.NameDiv>
            <styled.EmailDiv>
                <span>이메일</span>
                <styled.EmailInputBox value={email} onChange={(e) => setemail(e.target.value)}/>
            </styled.EmailDiv>
            <styled.SendPasswordBtn onClick={() => {SendTempPassword(); passwordSentClick();}}>
                <span>임시 비밀번호 전송</span>
            </styled.SendPasswordBtn>
            <styled.BackBtn onClick={backClick}>
                <span>뒤로가기</span>
            </styled.BackBtn>
        </div>
    )
}

export default FindPassword;