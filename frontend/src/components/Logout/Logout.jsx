import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as styled from './styles';




const Logout = ({ onPopup }) => {
    // const movePage = useNavigate();

    // function logoutClick(){
    //     movePage('/');
    // }


    function closeClick() {
        console.log('hi');
        onPopup("close");
        // movePage('/main');
    }


    const isLogout = () => {
        const response = axios.post(
          'http://43.201.210.173:9000/users/logout',
          {
            
          },
          {
            headers: {
            }
          }
        )
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.data) {
                // logoutClick();
            }
    
    
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    


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
                    <styled.ConfirmBtn onClick={isLogout}>
                        <span>확인</span>
                    </styled.ConfirmBtn>
                </styled.ButtonsDiv>
            </styled.FindWhiteBox>
        </styled.Container>
    )
}

export default Logout;