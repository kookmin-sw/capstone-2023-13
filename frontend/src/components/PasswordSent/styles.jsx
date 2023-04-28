import styled from "styled-components";
import background from '@/images/backgrounds/startbackground.png';
import metaicon from '@/images/icons/meta-icon.png';


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
    width: 550px;
    height: 600px;
    left: 130px;
    top: 130px;
    background: rgba(255, 255, 255, 0.68);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px; 
    box-sizing: border-box;
    padding-top: 23px;
    padding-left: 70px;
    padding-right: 70px;
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

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

export const HrLine = styled.div`
    width: 100%;
    height: 0px;
    border: 0.5px solid #000000;
    margin-bottom: 80px;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        font-size: 17px;
        font-weight: bold;

        &:nth-child(1){
            color: #3B3F8E;
            margin-bottom: 30px;
            font-size: 19px;
        }

        &:nth-child(2){
            margin-bottom: 30px;
        }
    }

`;

export const SendPasswordBtn = styled.button`
    width: 100%;
    height: 50px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    > span {
        color: white;
        font-size: 16px;
    }
`;