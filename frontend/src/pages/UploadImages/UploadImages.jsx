import React, { useState } from 'react';
import axios from 'axios';
import * as styled from './styles';

function UploadImages() {
    const [isModal, setisModal] = useState(false);



    let token = localStorage.getItem('login-token');
    const [selectedImages, setSelectedImages] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImages(e.target.files);
    }

    localStorage.setItem('uploadState', 0);


    const uploadImages = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Array.from(selectedImages).forEach(image => {
            formData.append('multipartFiles', image);
        });

        try {
            const res = await axios.post('http://43.201.210.173:8080/file/uploadFile', formData, {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            if(res.data){
                localStorage.setItem('image-url', JSON.stringify(res.data));
                localStorage.setItem('uploadState', 1);
            }
            // console.log(localStorage.getItem('image-url'));
            console.log(JSON.parse(localStorage.getItem("image-url")));


            for(var i=0; i<res.data.length; i++){
                // console.log(i, " : ",res.data[i]);
                // console.log(i, ":", localStorage.getItem('image-url')[i]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const showModal = () => {
        setisModal(true);
    };


    const UploadCompleteModal = () => {
        return(
            <styled.Modal>
                <styled.ModalContainer>
                    <styled.ModalText>
                        <span>이미지 업로드가 완료되었습니다.</span>
                        <span>창을 닫고 상품 등록으로 돌아가세요.</span>
                    </styled.ModalText>
                    <styled.ModalOkButton onClick={() => {setisModal(false)}}>
                        <span>확인</span>
                    </styled.ModalOkButton>
                </styled.ModalContainer>
            </styled.Modal>
        )
    }

    

    return (
        <styled.Form onSubmit={uploadImages}>
            {isModal && <UploadCompleteModal />}
            <styled.FileInput type="file" multiple onChange={handleImageChange} />
            <styled.UploadButton type="submit" onClick={showModal}>이미지 업로드</styled.UploadButton>
        </styled.Form>
    );
}

export default UploadImages;
