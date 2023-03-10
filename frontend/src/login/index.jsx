import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const navigateToAnotherPage = () => {
        navigate("/");
    };


    // const isLogin = () => {
    //     const response = axios.post(
    //         'http://15.164.231.10/user/signin',
    //         {
    //             "email": email,
    //             "password": password
    //         },
    //         {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             if (response.data.data.accessToken) {
    //                 localStorage.setItem('login-token', response.data.data.accessToken);
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    return (
        <>
            <S.mainContainer>
                <S.mainContent>
                    <S.signinTitle>
                        Sign In
                    </S.signinTitle>
                    <S.inputContatiner>
                        <S.emailInput type="email" value={email} placeholder="Email" onChange={onEmailHandler} />
                        <S.passwordInput type="password" value={password} placeholder="Password" onChange={onPasswordHandler} />
                    </S.inputContatiner>
                    <S.btnContainer>
                        <S.btnFindEmail> Google Login </S.btnFindEmail>
                        <S.divisionLine>|</S.divisionLine>
                        <S.btnFindPassword> Find Password </S.btnFindPassword>
                        <S.divisionLine>|</S.divisionLine>
                        <S.btnSignUp> Sign up </S.btnSignUp>
                    </S.btnContainer>
                    {/* <S.btnSignIn onClick={navigateToAnotherPage}>Sign in</S.btnSignIn> */}
                    <S.btnSignIn onClick={() => { isLogin(); navigateToAnotherPage(); }}>Sign in</S.btnSignIn>
                </S.mainContent>
            </S.mainContainer>
        </>
    )
}



export default LoginPage;