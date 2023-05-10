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


    // const isLogout = () => {
    //     const response = axios.post(
    //       'http://13.209.3.116:8080/stores/info',
    //       {

    //       },
    //       {
    //         headers: {
    //         }
    //       }
    //     )
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         if (response.data) {
    //             // logoutClick();
    //         }


    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }

    const isLogout = () => {
        let token = localStorage.getItem('login-token');
        const response = axios.get(
            'http://13.209.3.116:8080/stores/info',
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
                console.log(JSON.stringify(response.data.id));
                // if (response.data) {
                //     localStorage.setItem('login-token', response.data);
                //     loginClick();
                // }

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