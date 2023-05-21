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
    width: 540px;
    height: 400px;
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
    height: 70px;
`;


export const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 80px;
`;

export const NameInputBox = styled.input`
    margin:10px 0;
    border:none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    border: none;
    &:focus {
        outline: 1px solid #9a86ff;
    }
    
`;

export const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
`;

export const EmailInputBox = styled.input`
    margin:10px 0;
    border:none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    border: none;
    &:focus {
        outline: 1px solid #9a86ff;
    }
`;

// export const SendPasswordBtn = styled.button`
//     width: 100%;
//     height: 50px;
//     background: #775EEE;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 5px;    
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 60px;

//     > span {
//         color: white;
//         font-size: 16px;
//     }
// `;
export const SendPasswordBtn = styled.button`
/* display: flex; */
/* float: left; */
/* margin-left:85px; */
/* margin-right:85px; */
cursor: pointer;
/* width: 180px; */
width: 400px;
height: 45px;
background: #775EEE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border:none;
border-radius: 10px;
color:white;
text-align: center;
margin-top:70px;
font-weight: bold;
`;
export const BackBtn = styled.button`
/* display: flex; */
/* float: left; */
/* margin-left:85px; */
/* margin-right:85px; */
cursor: pointer;
/* width: 180px; */
width: 400px;
height: 45px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border:none;
border-radius: 10px;
text-align: center;
margin-top:20px;
font-weight: bold;
background: #ffffff;
color:#775EEE;
`;