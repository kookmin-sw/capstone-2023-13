import React, { useState, useEffect } from "react";
import * as styled from './styles';
import axios from 'axios';
import axiosInstance from "@/js/axiosInstance";
import { createContext } from 'react';
import { useContext } from 'react';

export const EmailContext = createContext(null);


const MyPage = ({onPopup}) => {
    const [name, setname] = useState("");
    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [bank, setbank] = useState("");
    const [account, setaccount] = useState("");
    const [address, setaddress] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [isModal, setisModal] = useState(false);


    function closeClick() {
        onPopup("close");
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
                console.log("배열: ", userData);
                // console.log(JSON.stringify(response.data));
                setname(JSON.stringify(response.data.name).replace(/"/g, ''));
                setnickname(JSON.stringify(response.data.nickname).replace(/"/g, ''));
                setemail(JSON.stringify(response.data.email).replace(/"/g, ''));
                setbank(JSON.stringify(response.data.bank).replace(/"/g, ''));
                setaccount(JSON.stringify(response.data.account).replace(/"/g, ''));
                setaddress(JSON.stringify(response.data.address).replace(/"/g, ''));

            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const changeMyInfo = () => {
        if (password === '' || confirmPassword === '') {
            setPasswordEmpty(true);
            return;
        }
        if (!passwordMatch) {
            return;
        }

        setPasswordEmpty(false);
        let token = localStorage.getItem('login-token');
        const response = axios.put(
            'http://43.201.210.173:8080/users/update',
            {
                "email": email,
                "password" : password,
                "name" : name,
                "nickname" : nickname,
                "bank" : bank,
                "account" : account,
                "address" : address
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
                showModal();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onPasswordChange = (e) => {
        setpassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
        setPasswordEmpty(e.target.value === '');
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(password === e.target.value);
        setPasswordEmpty(e.target.value === '');
    };

    const showModal = () => {
        setisModal(true);
    };

    const ChangeCompleteModal = () => {
        return(
            <styled.Modal>
                <styled.ModalContainer>
                    <styled.ModalText>회원정보 변경이 완료되었습니다.</styled.ModalText>
                    <styled.ModalOkButton onClick={() => {setisModal(false)}}>
                        <span>확인</span>
                    </styled.ModalOkButton>
                </styled.ModalContainer>
            </styled.Modal>
        )
    }

    return (
        <styled.Container>
            <styled.FindWhiteBox>
                {isModal && <ChangeCompleteModal />}
                <styled.LeftDiv>
                    <styled.TitleDiv>
                        <styled.MetaIcon />
                        <span>내 정보</span>
                    </styled.TitleDiv>
                </styled.LeftDiv>
                <styled.MiddleDiv>
                    <styled.PasswordInfo>
                        <span>비밀번호 *</span>
                        <styled.PasswordInputBox type="password" style={passwordEmpty || !passwordMatch ? { borderColor: 'red' } : {}} placeholder="숫자, 영문, 특수문자 조합 최소 8자 " value={password} onChange={onPasswordChange}/>
                        <styled.PasswordInputBox type="password" style={passwordEmpty || !passwordMatch ? { borderColor: 'red' } : {}} placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordChange}/>
                        {passwordEmpty ? (
                            <span>비밀번호가 입력되지 않았습니다.</span>
                        ) : passwordMatch ? (
                            <span>비밀번호가 일치합니다.</span>
                        ) : (
                            <span>비밀번호가 일치하지 않습니다.</span>
                        )}
                    </styled.PasswordInfo>
                    <styled.NameInfo>
                        <span>이름</span>
                        <styled.NameInfoInnerDiv>
                            <span>{name}</span>
                        </styled.NameInfoInnerDiv>
                    </styled.NameInfo>
                    <styled.NicknameInfo>
                        <span>닉네임 *</span>
                        <styled.NicknameInputBox value={nickname} onChange={(e) => setnickname(e.target.value)} />
                    </styled.NicknameInfo>
                    <styled.AddressInfo>
                        <span>주소 *</span>
                        <styled.AddressInputBox value={address} onChange={(e) => setaddress(e.target.value)} />
                    </styled.AddressInfo>
                    <styled.EmailInfo>
                        <span>이메일 *</span>
                        <styled.EmailInputBox value={email} onChange={(e) => setemail(e.target.value)} />
                        <span>계정 분실 시 본인인증 정보로 활용됩니다.</span>
                    </styled.EmailInfo>
                    <styled.AccountInfo>
                        <span>계좌번호 *</span>
                        <styled.AccountInputBox value={bank} onChange={(e) => setaccount(e.target.value)} />
                        <styled.AccountInputBox value={account} onChange={(e) => setaccount(e.target.value)} />
                    </styled.AccountInfo>
                </styled.MiddleDiv>
                <styled.RightDiv>
                    <styled.CloseBtn onClick={closeClick}>
                        <span>닫기</span>
                    </styled.CloseBtn>
                    <styled.ConfirmBtn onClick={() => {changeMyInfo();}} >
                        <span>회원 정보 수정</span>
                    </styled.ConfirmBtn>
                </styled.RightDiv>
            </styled.FindWhiteBox>
        </styled.Container>
        // </div>
    )
}

export default MyPage;