import React from "react";
import "../../pages/Startpage/StartPage.css"
import "./SalePurchaseBox.css";
// import { useNavigate } from "react-router-dom";

function PurchaseBox({onPage}) {
  // const movePage = useNavigate();

  // function finishClick(){
  //   console.log('hi');
  //   movePage('/main');
  // }
  function arrowClick(){
    onPage("sale")
  }
  return (
    <div>
        <div className="trans-TitleDiv">
            <div className="trans-MetaIcon"></div>
            <div className="trans-Text">구매 내역</div>
        </div>
        {/* <div className="characterBox">
            캐릭터박스
        </div> */}
        <div className="customBox">
          {/* <MainGdevelop /> */}
            {/* <GDevelopTest/> */}
        </div>
        <button className="RightArrowBtn" onClick={arrowClick}>&gt;</button>
        {/* <button className="customBtn" onClick={finishClick}>닫기</button> */}
    </div>
  );
}

export default PurchaseBox;