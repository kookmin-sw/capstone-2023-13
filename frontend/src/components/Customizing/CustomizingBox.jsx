import React from "react";
import "@pages/Startpage/StartPage.css"
import "./CustomizingBox.css";
import GDevelopTest from '@components/GDevelopTest';
// import MainGdevelop from '../MainGdevelop/MainGdevelop';
import { useNavigate } from "react-router-dom";

function CustomizingBox() {
  const movePage = useNavigate();

  function finishClick(){
    movePage('/main');
  }
  return (
    <div>
        <div className="TitleDiv">
            <div className="custom-MetaIcon"></div>
            <div className="CustomText">캐릭터 커스터마이징</div>
        </div>
        {/* <div className="characterBox">
            캐릭터박스
        </div> */}
        <div className="customBox">
          {/* <MainGdevelop /> */}
            <GDevelopTest/>
        </div>
        
        <button className="customBtn" onClick={finishClick}>완료</button>
    </div>
  );
}

export default CustomizingBox;