import styled from "styled-components";
import background from '@/images/backgrounds/startbackground.png';
import metaicon from '@/images/icons/meta-icon.png';
import profileimg from '@/images/icons/mypageprofileimg.png';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    /* background-image: url(${background}); */
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
    /* margin :0px auto; */
    width: 699px;
    height: 466px;
    background: rgba(255, 255, 255);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px; 
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MetaIcon = styled.img.attrs({
    src: metaicon,
})`
    width: 90px;
    height: 70px;
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
    margin-right: 10px;

    > span {
        font-size: 35px;
        margin-top: 20px;
        margin-left: 10px;
        font-weight: bolder;
    }
`;

export const PasswordInputDiv = styled.input`
    padding: 10px;
    width: 400px;
    height: 30px;

    background: #FFFFFF;
    border: 2px solid #597EE1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    font-size: 20px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubmitButton = styled.button`
    width: 188px;
    height: 52px;

    background: #6F8DDE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 90px;
    cursor: pointer;
    border: none;
    outline: none;
    margin-left: 20px;

    > span {
        color: white;
        font-weight: 600;
        font-size: 20px;
    }
`;

export const CloseButton = styled.button`
    width: 188px;
    height: 52px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 90px;
    cursor: pointer;
    border: 2px solid #6F8DDE;
    outline: none;

    > span {
        color: #6F8DDE;
        font-weight: 600;
        font-size: 20px;
    }
`;

export const WarningMessage = styled.div`
    color: #ac1a1a;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
`;