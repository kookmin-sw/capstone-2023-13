import React from "react";
import * as styled from './styles';




const FindPassword = ({onPage}) => {
    const passwordSentClick = () => {
        onPage("passwordsent")
    }
    const backClick = () => {
        onPage("login")
    }

    return (
        <div className="findWhiteBox"
            style={{
                boxSizing: "border-box",
                padding: "30px",
                paddingLeft: "70px",
                paddingRight: "70px",
            }}>
            <styled.TitleDiv>
                <styled.MetaIcon />
                <span>비밀번호 찾기</span>
            </styled.TitleDiv>
            {/* <styled.IdDiv>
                <span>아이디</span>
                <styled.IdInputBox />
            </styled.IdDiv> */}
            <styled.NameDiv>
                <span>이름</span>
                <styled.NameInputBox />
            </styled.NameDiv>
            <styled.EmailDiv>
                <span>이메일</span>
                <styled.EmailInputBox />
            </styled.EmailDiv>
            <styled.SendPasswordBtn onClick={passwordSentClick}>
                <span>임시 비밀번호 전송</span>
            </styled.SendPasswordBtn>
            <styled.BackBtn onClick={backClick}>
                <span>뒤로가기</span>
            </styled.BackBtn>
        </div>
    )
}

export default FindPassword;