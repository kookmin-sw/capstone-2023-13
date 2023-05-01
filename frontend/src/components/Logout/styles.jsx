import styled from "styled-components";
import background from '@/images/backgrounds/startbackground.png';
import metaicon from '@/images/icons/meta-icon.png';


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
    margin :0px auto;
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

export const LogoutTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

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
    height: 67px;
`;

export const TextBox = styled.div`
    font-weight: 600;
    font-size: 32px;
    margin-top: 104px;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 115px;
    margin-bottom: 60px;
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
    margin-left: 15px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        color: white;
        font-weight: 600;
        font-size: 20px;
    }
`;

export const CloseBtn = styled.button`
    width: 188px;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:1px solid #141060; 
    border-radius: 5px;    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        color: #141060;
        font-weight: 600;
        font-size: 20px;
    }
`;