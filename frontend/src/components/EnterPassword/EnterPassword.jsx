import React from "react";
import * as styled from './styles';




const EnterPassword = ({onPage}) => {
    // const passwordSentClick = () => {
    //     onPage("passwordsent")
    // }


    return (
        // <div className="findWhiteBox"
        //     style={{
        //         boxSizing: "border-box",
        //         padding: "30px",
        //         paddingLeft: "70px",
        //         paddingRight: "70px",
        //     }}>
        <styled.Container>
            <styled.FindWhiteBox>
                <styled.TitleDiv>
                    <styled.MetaIcon />
                    <span>비밀번호를 입력해주세요.</span>
                </styled.TitleDiv>
                <styled.PasswordInputDiv>
                    <styled.PasswordInputBox />
                </styled.PasswordInputDiv>
                <styled.ConfirmBtn>
                    <span>확인</span>
                </styled.ConfirmBtn>
            </styled.FindWhiteBox>
        </styled.Container>
        // </div>
    )
}

export default EnterPassword;