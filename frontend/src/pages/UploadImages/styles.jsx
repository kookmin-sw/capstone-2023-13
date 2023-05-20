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