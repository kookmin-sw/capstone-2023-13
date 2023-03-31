import styled from "styled-components";
import background from '../../images/backgrounds/startbackground.png';
import metaicon from '../../images/icons/meta-icon.png';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
`;

export const Backgroud = styled.img.attrs({
    src: background,
})`
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: rgb(255, 226, 226); */
    width:100vw;
    height: 100vh;
    margin:0;
    padding-top:104px;
    text-align: center;
    overflow: hidden;
`;

export const FindWhiteBox = styled.div`
    margin :0px auto;
    width: 699px;
    height: 466px;
    left: 130px;
    top: 130px;
    background: rgba(255, 255, 255, 0.68);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px; 
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 70px;
    padding-right: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    > span {
        font-size: 35px;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bolder;
    }
`;

export const MetaIcon = styled.img.attrs({
    src: metaicon,
})`
    width: 90px;
    height: 80px;
`;

export const PasswordInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 40px;
`;

export const PasswordInputBox = styled.input`
    margin:10px 0;
    border:none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 482px;
    height: 52px;
    padding-left: 10px;
    box-sizing: border-box;
`;

export const ConfirmBtn = styled.button`
    width: 188px;
    height: 52px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        color: white;
        font-weight: 600;
        font-size: 22px;
    }
`;