import React, { useState } from 'react';
import axios from 'axios';

function UploadImages() {
    let token = localStorage.getItem('login-token');
    const [selectedImages, setSelectedImages] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImages(e.target.files);
    }

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

    return (
        <form onSubmit={uploadImages}>
            <input type="file" multiple onChange={handleImageChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default UploadImages;
