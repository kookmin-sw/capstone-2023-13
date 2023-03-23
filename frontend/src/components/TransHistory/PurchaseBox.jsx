import React from "react";
import "../../pages/Startpage/StartPage.css"
import "./SalePurchaseBox.css";
import { useNavigate } from "react-router-dom";

function PurchaseBox({onPage}) {
  const movePage = useNavigate();

  function finishClick(){
    movePage('/main');
  }
  function arrowClick(){
    onPage("sale")
  }
  return (
    <div>
        <div className="TitleDiv">
            <div className="custom-MetaIcon"></div>
            <div className="CustomText">구매 내역</div>
        </div>
        {/* <div className="characterBox">
            캐릭터박스
        </div> */}
        <div className="customBox">
          {/* <MainGdevelop /> */}
            {/* <GDevelopTest/> */}
        </div>
        <button className="RightArrowBtn" onClick={arrowClick}>&gt;</button>
        <button className="customBtn" onClick={finishClick}>닫기</button>
    </div>
  );
}

export default PurchaseBox;