import React, { useState } from "react";
import axios from 'axios';
import * as styled from './styles';
import { useNavigate } from "react-router-dom";




const Logout = ({ onPopup }) => {
    const navigate = useNavigate();

    function closeClick() {
        onPopup("close");
        // movePage('/main');
    }

    const confirmClick = () => {
        onPopup("close");
        navigate('/');
        localStorage.removeItem('login-token');
    };



    return (
        <styled.Container>
            <styled.FindWhiteBox>
                <styled.LogoutTitle>
                    <styled.MetaIcon />
                    <span>로그아웃</span>
                </styled.LogoutTitle>
                <styled.TextBox>
                    로그아웃 하시겠습니까?
                </styled.TextBox>
                <styled.ButtonsDiv>
                    <styled.CloseBtn onClick={closeClick}>
                        <span>닫기</span>
                    </styled.CloseBtn>
                    <styled.ConfirmBtn onClick={confirmClick}>
                        <span>확인</span>
                    </styled.ConfirmBtn>
                </styled.ButtonsDiv>
            </styled.FindWhiteBox>
        </styled.Container>
    )
}

export default Logout;