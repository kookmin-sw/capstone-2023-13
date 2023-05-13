import React, { useState, useEffect } from "react";
import * as styled from './styles';
import axios from 'axios';
import axiosInstance from "@/js/axiosInstance";




function CheckPassword({onPopup, onPasswordCheckSuccess}) {
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [warningMessage, setWarningMessage] = useState("");


    function closeClick() {
        onPopup("close");
        // movePage('/main');
    }

    function CheckSuccess() {
        onPasswordCheckSuccess("myinfo");
    }
    

    useEffect(() => {
        // console.log("마운트 되었습니다.");
        let token = localStorage.getItem('login-token');
        const response = axios.get(
            'http://43.201.210.173:8080/users/info',
            {
                headers: {
                    'Authorization': `${token}`,
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                let userData = new Array();
                userData = JSON.stringify(response.data);
                setemail(JSON.stringify(response.data.email).replace(/"/g, ''));
                console.log(email);
            })
            .catch(function (error) {
                console.log(error);
                setWarningMessage("비밀번호가 틀렸습니다.");
            });
    }, []);


    const Check = () => {
        let token = localStorage.getItem('login-token');
        const response = axios.post(
            'http://43.201.210.173:8080/users/myinfo',
            {
                "email" : email,
                "password" : password
            },
            {
                headers: {
                    'Authorization': `${token}`,
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                CheckSuccess();
            })
            .catch(function (error) {
                console.log(error);
                setWarningMessage("비밀번호가 틀렸습니다.");
            });
    }



    return (
        <styled.Container>
            <styled.FindWhiteBox>
                <styled.TitleDiv>
                    <styled.MetaIcon />
                    <span>비밀번호를 입력하세요</span>
                </styled.TitleDiv>
                <styled.PasswordInputDiv type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                {warningMessage && <styled.WarningMessage>{warningMessage}</styled.WarningMessage>} {/* 경고 문구 표시 */}
                <styled.ButtonDiv>
                    <styled.CloseButton onClick={() => {closeClick();}}>
                        <span>취소</span>
                    </styled.CloseButton>
                    <styled.SubmitButton onClick={() => { Check(); }}>
                        <span>확인</span>
                    </styled.SubmitButton>
                </styled.ButtonDiv>
            </styled.FindWhiteBox>
        </styled.Container>
    )
}

export default CheckPassword;