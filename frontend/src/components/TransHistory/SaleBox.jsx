import React from "react";
import "./SalePurchaseBox.css";
// import MainGdevelop from '../MainGdevelop/MainGdevelop';
import { useNavigate } from "react-router-dom";

function SaleBox({onPage}) {
  const movePage = useNavigate();

  function finishClick(){
    movePage('/main');
  }
  function arrowClick(){
    onPage("purchase")
  }
  return (
    <div>
        <div className="TitleDiv">
            <div className="custom-MetaIcon"></div>
            <div className="CustomText">판매 내역</div>
        </div>
        {/* <div className="characterBox">
            캐릭터박스
        </div> */}
        <div className="customBox">
          {/* <MainGdevelop /> */}
            {/* <GDevelopTest/> */}
        </div>
        <button className="LeftArrowBtn" onClick={arrowClick}>&lt;</button>
        <button className="customBtn" onClick={finishClick}>닫기</button>
    </div>
  );
}

export default SaleBox;