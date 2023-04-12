import styled from "styled-components";
import background from '../../images/backgrounds/startbackground.png';
import metaicon from '../../images/icons/meta-icon.png';
import profileimg from '../../images/icons/mypageprofileimg.png';


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
    width: 1294px;
    height: 930px;
    background: rgba(255, 255, 255, 0.68);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px; 
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 70px;
    padding-right: 70px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 248px;
    height: 100%;
`;

export const MiddleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 90px;
    width: 415px;
    height: 100%;
`;

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 174px;
    height: 100%;
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

export const ProfileImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled.img.attrs({
    src: profileimg,
})`
    width: 248px;
    height: 248px;
`;

export const ChangeImg = styled.div`
    width: 158px;
    height: 44px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 27px;

    > span {
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;
    }
`;

export const IdInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 45px; 

    > span:nth-child(1) {
        font-weight: 600;
        font-size: 24px;
    }
`;

export const IdInfoInnerDiv = styled.div`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    margin-bottom: 4px;
    border: none;
    border-bottom: 1.5px solid black;

    display: flex;
    align-items: center;

    > span {
        font-weight: 400;
        font-size: 24px;
    }
`;

export const PasswordInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px; 

    > span {
        &:nth-child(1) {
            font-weight: 600;
            font-size: 24px;
        }

        &:nth-child(4){
            font-weight: 400;
            font-size: 16px;
            margin-top: 6px;
        }
    }
`;

export const PasswordInputBox = styled.input`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    font-size: 20px;
    outline: none;
    border: none;
    border-bottom: 1.5px solid black;
    background: transparent;

    display: flex;
    align-items: center;
`;

export const NameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px; 

    > span:nth-child(1) {
        font-weight: 600;
        font-size: 24px;
    }
`;

export const NameInfoInnerDiv = styled.div`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    border: none;
    border-bottom: 1.5px solid black;

    display: flex;
    align-items: center;

    > span {
        font-weight: 400;
        font-size: 24px;
    }
`;

export const NicknameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px; 

    > span:nth-child(1) {
        font-weight: 600;
        font-size: 24px;
    }
`;

export const NicknameInputBox = styled.input`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    font-size: 20px;
    outline: none;
    border: none;
    border-bottom: 1.5px solid black;
    background: transparent;

    display: flex;
    align-items: center;
`;

export const EmailInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px; 

    > span {
        &:nth-child(1) {
            font-weight: 600;
            font-size: 24px;
        }

        &:nth-child(3){
            font-weight: 400;
            font-size: 16px;
            margin-top: 6px;
        }
    }
`;

export const EmailInputBox = styled.input`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    font-size: 20px;
    outline: none;
    border: none;
    border-bottom: 1.5px solid black;
    background: transparent;

    display: flex;
    align-items: center;
`;

export const AccountInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px; 

    > span {
        &:nth-child(1) {
            font-weight: 600;
            font-size: 24px;
        }
    }
`;

export const AccountInputBox = styled.input`
    width: 372px;
    height: 48px;
    margin-top: 4px;
    font-size: 20px;
    outline: none;
    border: none;
    border-bottom: 1.5px solid black;
    background: transparent;

    display: flex;
    align-items: center;
`;

export const ConfirmBtn = styled.button`
    width: 216px;
    height: 50px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 73px;
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