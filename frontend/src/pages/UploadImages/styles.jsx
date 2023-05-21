import styled from "styled-components";



export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 20px;
`;

export const FileInput = styled.input`
    padding: 10px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 5px;
`;

export const UploadButton = styled.button`
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;


// --------------------모달창 코드 ---------------------
export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);;
`;

export const ModalContainer = styled.div`
    width: 600px;
    height: 366px;

    background: rgba(255, 255, 255);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    opacity: 1;
    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    > span {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        color: #000000;
    }
    
`;

export const ModalOkButton = styled.button`
    width: 156px;
    height: 50px;
    background: #6F8DDE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 93px;
    cursor: pointer;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        color: white;
        font-weight: 600;
        font-size: 20px;
    }
`;