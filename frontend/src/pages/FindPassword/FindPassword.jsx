import React from "react";
import * as styled from './styles';
import '../../pages/StartPage.css'



const FindPassword = () => {
    return (
        <styled.Container>
            <styled.WhiteBox>
                <styled.TitleDiv>
                    <styled.MetaIcon />
                    <span>비밀번호 찾기</span>
                </styled.TitleDiv>
                <styled.IdDiv>
                    <span>아이디</span>
                    <styled.IdInputBox />
                </styled.IdDiv>
                <styled.NameDiv>
                    <span>이름</span>
                    <styled.NameInputBox />
                </styled.NameDiv>
                <styled.EmailDiv>
                    <span>이메일</span>
                    <styled.EmailInputBox />
                </styled.EmailDiv>
                <styled.SendPasswordBtn>
                    <span>임시 비밀번호 전송</span>
                </styled.SendPasswordBtn>
            </styled.WhiteBox>
        </styled.Container>
    )
}

export default FindPassword;