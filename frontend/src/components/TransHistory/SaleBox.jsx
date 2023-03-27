import React from "react";
import "./SalePurchaseBox.css";
// import MainGdevelop from '../MainGdevelop/MainGdevelop';
// import { useNavigate } from "react-router-dom";

function SaleBox({onPage, onPopup}) {
  // const movePage = useNavigate();

  // function closeClick(){
  //   console.log('hi');
  //   onPopup("close");
  //   // movePage('/main');
  // }
  function arrowClick(){
    onPage("purchase")
  }
  return (
    <div>
        <div className="trans-TitleDiv">
            <div className="trans-MetaIcon"></div>
            <div className="trans-Text">판매 내역</div>
        </div>
        {/* <div className="characterBox">
            캐릭터박스
        </div> */}
        <div className="customBox">
          {/* <MainGdevelop /> */}
            {/* <GDevelopTest/> */}
        </div>
        <button className="LeftArrowBtn" onClick={arrowClick}>&lt;</button>
        {/* <button className="customBtn" onClick={closeClick}>닫기</button> */}
    </div>
  );
}

export default SaleBox;