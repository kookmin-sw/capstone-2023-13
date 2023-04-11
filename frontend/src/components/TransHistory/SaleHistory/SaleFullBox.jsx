import React from "react";
import "../../../pages/Startpage/StartPage.css"
import "../TransFullBox.css";
// import { useNavigate } from "react-router-dom";

function SaleFullBox({onPage, onClose}) {
  // const movePage = useNavigate();

  function closeClick(){
    console.log("close")
    onClose("true")
  }
  function arrowClick(){
    onPage("detail")
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
        <div className="listBox">
          <div className="listLine">
            <div className="listImg">
              <img src="../../assets/img/smile.png" alt="임시이미지"></img>
            </div>
            <div className="listInfo">
              <div className="orderNum">주문번호</div>
              <div className="productName">구매한 상품 이름 외 n개</div>
              <div className="transDate">2023.03.10 월</div>
            </div>
            <div className="listStatus">배송중</div>
          </div>
          <div className="listLine">
            <div className="listImg">
              <img src="../../assets/img/smile.png" alt="임시이미지"></img>
            </div>
            <div className="listInfo">
              <div className="orderNum">주문번호</div>
              <div className="productName">구매한 상품 이름 외 n개</div>
              <div className="transDate">2023.03.10 월</div>
            </div>
            <div className="listStatus">배송중</div>
          </div>
          <div className="listLine">
            <div className="listImg">
              <img src="../../assets/img/smile.png" alt="임시이미지"></img>
            </div>
            <div className="listInfo">
              <div className="orderNum">주문번호</div>
              <div className="productName">구매한 상품 이름 외 n개</div>
              <div className="transDate">2023.03.10 월</div>
            </div>
            <div className="listStatus">배송중</div>
          </div>
          <div className="listLine">
            <div className="listImg">
              <img src="../../assets/img/smile.png" alt="임시이미지"></img>
            </div>
            <div className="listInfo">
              <div className="orderNum">주문번호</div>
              <div className="productName">구매한 상품 이름 외 n개</div>
              <div className="transDate">2023.03.10 월</div>
            </div>
            <div className="listStatus">배송중</div>
          </div>
        </div>
        
        {/* <button className="RightArrowBtn" onClick={arrowClick}>&gt;</button> */}
        <button className="closeBtn" onClick={closeClick}>닫기</button>
    </div>
  );
}

export default SaleFullBox;