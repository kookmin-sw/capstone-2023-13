import React from "react";
import * as styled from './styles';




const PasswordSent = ({onPage, name, email}) => {
    const loginClick = () => {
        onPage("login")
    }

    console.log(name, email);
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
            <styled.HrLine />
            <styled.TextDiv>
                <span>임시 비밀번호가 고객님의 메일로 전송되었습니다.</span> 
                <span>MetaPop을 이용해주셔서 감사합니다.</span>
                {/* <span>{name} 회원님,</span>
                <span>임시 비밀번호를 {email} 으로 보내드렸습니다.</span> */}
            </styled.TextDiv>
            <styled.SendPasswordBtn onClick={loginClick}>
                <span>로그인하기</span>
            </styled.SendPasswordBtn>
        </div>
    )
}

export default PasswordSent;