import React, { useState, useEffect } from "react";
import "@pages/Startpage/StartPage.css"
import "@components/TransHistory/TransFullBox.css";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

function SaleFullBox({onPage, onClose}) {
  // const movePage = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // console.log("마운트 되었습니다.");
    let token = localStorage.getItem('login-token');
    const response = axios.get(
        'http://43.201.210.173:8080/orders/info/sell',
        {
            headers: {
                'Authorization': `${token}`,
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    .then(async function (response) {
      const formattedData = await Promise.all(
        response.data.map(async item => {
          // 가장 첫번째 상품의 상세 정보를 가져옵니다.
          const productId = item.productList[0];
          const productDetailResponse = await axios.get(
            `http://43.201.210.173:8080/products/info/detail/${productId}`,
            {
              headers: {
                'Authorization': `${token}`,
                'accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }
          );
    
          // 상품 이름을 상세 정보에서 가져옵니다.
          // 이 부분은 실제 응답의 구조에 따라 수정해야 합니다.
          const productName = productDetailResponse.data.name;
          const storeName = productDetailResponse.data.storeId.name;

          const date = new Date(item.orderDate);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해주어야 합니다.
          const day = String(date.getDate()).padStart(2, '0');
          const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
          const weekday = weekdays[date.getDay()]; 

          const formattedDate = `${year}.${month}.${day} (${weekday})`;
    
          return {
            id: item.id,
            rep_product: productName,
            store: storeName,
            num: item.productList.length,
            date: formattedDate,
            state: item.state === 0 ? '배송중' : '배송완료',
          };
        })
      );
  
      console.log("gh",formattedData)
      setOrders(formattedData);
    })
        .catch(function (error) {
            console.log(error);
        });
}, []);

  function closeClick(){
    console.log("close")
    onClose("true")
  }
  function detailClick(orderId){
    onPage("detail", orderId);
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
        {orders.map((order) => (
            <div className="listLine" key={order.id} onClick={() => detailClick(order.id)}>
              <div className="listImg">
                <img src="../../assets/img/smile.png" alt="임시이미지"></img>
              </div>
              <div className="listInfo">
                <div className="orderNum">{order.store}</div>
                <div className="productName">
                  {order.num - 1 > 0 ? `${order.rep_product} 외 ${order.num - 1}개` : order.rep_product}
                </div>
                <div className="transDate">{order.date}</div>
              </div>
              <div className="listStatus">{order.state}</div>
            </div>
          ))}
        </div>
        
        {/* <button className="RightArrowBtn" onClick={arrowClick}>&gt;</button> */}
        <button className="closeBtn" onClick={closeClick}>닫기</button>
    </div>
  );
}

export default SaleFullBox;