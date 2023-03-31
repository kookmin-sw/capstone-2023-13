import React, { useState } from "react";
import * as styled from './styles';




const MyPage = ({onPage}) => {
    // const passwordSentClick = () => {
    //     onPage("passwordsent")
    // }

    const [nickname, setnickname] = useState("hht.outfits");
    const [email, setemail] = useState("hht@example.com");
    const [account, setaccount] = useState("0000-000-000000");


    return (
        <styled.Container>
            <styled.FindWhiteBox>
                <styled.LeftDiv>
                    <styled.TitleDiv>
                        <styled.MetaIcon />
                        <span>내 정보</span>
                    </styled.TitleDiv>
                    <styled.ProfileImgDiv>
                        <styled.ProfileImg />
                        <styled.ChangeImg>
                            <span>이미지 변경</span>
                        </styled.ChangeImg>
                    </styled.ProfileImgDiv>
                </styled.LeftDiv>
                <styled.MiddleDiv>
                    <styled.IdInfo>
                        <span>아이디 *</span>
                        <styled.IdInfoInnerDiv>
                            <span>user01</span>
                        </styled.IdInfoInnerDiv>
                        <span>아이디는 변경이 불가능합니다.</span>
                    </styled.IdInfo>
                    <styled.PasswordInfo>
                        <span>비밀번호 *</span>
                        <styled.PasswordInputBox placeholder="숫자, 영문, 특수문자 조합 최소 8자 "/>
                        <styled.PasswordInputBox placeholder="비밀번호 확인"/>
                        <span>비밀번호를 입력해주세요.</span>
                    </styled.PasswordInfo>
                    <styled.NameInfo>
                        <span>이름 *</span>
                        <styled.NameInfoInnerDiv>
                            <span>최혁태</span>
                        </styled.NameInfoInnerDiv>
                    </styled.NameInfo>
                    <styled.NicknameInfo>
                        <span>닉네임 *</span>
                        <styled.NicknameInputBox value={nickname} onChange={(e) => setnickname(e.target.value)} />
                    </styled.NicknameInfo>
                    <styled.EmailInfo>
                        <span>이메일 *</span>
                        <styled.EmailInputBox value={email} onChange={(e) => setemail(e.target.value)} />
                        <span>계정 분실 시 본인인증 정보로 활용됩니다.</span>
                    </styled.EmailInfo>
                    <styled.AccountInfo>
                        <span>계좌번호 *</span>
                        <styled.AccountInputBox value={account} onChange={(e) => setaccount(e.target.value)} />
                    </styled.AccountInfo>
                </styled.MiddleDiv>
                <styled.RightDiv>
                    <styled.ConfirmBtn>
                        <span>회원 정보 수정</span>
                    </styled.ConfirmBtn>
                </styled.RightDiv>
            </styled.FindWhiteBox>
        </styled.Container>
        // </div>
    )
}

export default MyPage;