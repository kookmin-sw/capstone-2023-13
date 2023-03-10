import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(195, 202, 210, 0.242527), rgba(195, 202, 210, 0.242527)), linear-gradient(141.8deg, #D1D8E4 2.92%, #ACB7CD 111.13%);
`;

export const mainContent = styled.div`
    width: 94%;
    height: 85%;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const signinTitle = styled.div`
    font-family: 'Poppins-Bold';
    font-weight: 700;
    font-size: 55px;
    line-height: 96px;
    text-align: center;
    color: rgba(20, 36, 59, 0.35);
`

export const inputContatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-top: 5%;
    
`
export const emailInput = styled.input`
    width: 45%;
    height: 45px;
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    background-color: white;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);

    ::placeholder {
        color: rgba(20, 36, 59, 0.35);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        padding-left: 4%;
    }
`

export const passwordInput = styled.input`
    width: 45%;
    height: 45px;
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    background-color: white;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);
    ::placeholder {
        color: rgba(20, 36, 59, 0.35);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        padding-left: 4%;
    }
    margin-top: 2%;
`

export const btnContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
`

export const btnFindEmail = styled.button`
    background: transparent;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    display: flex;
    align-items: flex-end;
    letter-spacing: -0.0166667em;

    color: #5F6776;
    opacity: 0.66;
    cursor: pointer;
`;

export const btnFindPassword = styled.button`
    background: transparent;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    display: flex;
    align-items: flex-end;
    letter-spacing: -0.0166667em;

    color: #5F6776;
    opacity: 0.66;
    cursor: pointer;
`;

export const btnSignUp = styled.button`
    background: transparent;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    display: flex;
    align-items: flex-end;
    letter-spacing: -0.0166667em;

    color: #5F6776;
    opacity: 0.66;
    cursor: pointer;
`;

export const divisionLine = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.0166667em;
    color: #5F6776;
    opacity: 0.66;
    margin: 0 2%;
`

export const btnSignIn = styled.button`
    width: 44%;
    height: 7%;
    background: rgba(16, 33, 65, 0.6);
    backdrop-filter: blur(11.5318px);
    border: none;
    border-radius: 100px;
    margin-top: 6%;
    margin-bottom: 5%;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0px 5px 10px rgba(73, 90, 117, 0.222373);
`;