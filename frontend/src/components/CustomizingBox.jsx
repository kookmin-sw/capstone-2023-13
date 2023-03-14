import React from "react";
import "../pages/StartPage.css";
import "./CustomizingBox.css";
import GDevelopTest from './GDevelopTest';

function CustomizingBox() {
  return (
    <div>
        <div className="TitleDiv">
            <div className="custom-MetaIcon"></div>
            <div className="CustomText">캐릭터 커스터마이징</div>
        </div>
        <div className="characterBox">
            캐릭터박스
        </div>
        <div className="customBox">
            <GDevelopTest/>
        </div>
        
        <button className="customBtn">완료</button>
    </div>
  );
}

export default CustomizingBox;