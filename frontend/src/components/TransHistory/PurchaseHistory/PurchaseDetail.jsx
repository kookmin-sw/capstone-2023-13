import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as styled from './styles';

const PurchaseDetail = ({ onPage, onClose, orderId }) => {
    const [storename, setstorename] = useState("");
    const [orderdate, setorderdate] = useState("");
    const [accountinfo, setaccountinfo] = useState("");
    const [totalprice, settotalprice] = useState("");
    const [productlist, setproductlist] = useState([]);
    const [deliverstate, setdeliverstate] = useState("");
    const [productDetails, setProductDetails] = useState([]);



    // console.log("orderid: ", orderId);

    function closeClick() {
        console.log("close")
        onClose("true")
    }
    function backClick(){ //이전버튼 클릭 시
        onPage("full")
    }
    const PurchasedItem = () => {
        return (
            <styled.PurchasedItem>
                <styled.ProductImg />
                <styled.ProductInfo>
                    <styled.ProductName>
                        <span>구매한 상품 이름</span>
                    </styled.ProductName>
                    <styled.ProductPriceAndNumber>
                        <styled.ProductPrice>
                            <span>30,000원</span>
                        </styled.ProductPrice>
                        <styled.NumOfProduct>
                            <span>수량 : 3개</span>
                        </styled.NumOfProduct>
                    </styled.ProductPriceAndNumber>
                </styled.ProductInfo>
            </styled.PurchasedItem>
        )

    }


    useEffect(() => {
        const orders_id = 4;
        let token = localStorage.getItem('login-token');

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://43.201.210.173:8080/orders/info/detail/${orders_id}`,
                    {
                        headers: {
                            'Authorization': `${token}`,
                            'accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                );

                let orderData = JSON.stringify(response.data);
                console.log(orderData);
                let tmpDate = (JSON.stringify(response.data.orderDate).replace(/"/g, ''));
                setaccountinfo(JSON.stringify(response.data.sellerId.bank).replace(/"/g, '') + "   " + JSON.stringify(response.data.sellerId.account).replace(/"/g, ''));
                settotalprice(JSON.stringify(response.data.totalPrice));
                setdeliverstate(JSON.stringify(response.data.state));

                function formatDate(dateString) {
                    const date = new Date(dateString);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hour = String(date.getHours()).padStart(2, '0');
                    const minute = String(date.getMinutes()).padStart(2, '0');
                    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
                    const weekday = weekdays[date.getDay()];

                    const formattedDate = `${year}.${month}.${day} (${weekday}) ${hour}:${minute}`;
                    return formattedDate;
                }

                const dateString = tmpDate;
                setorderdate(formatDate(dateString));

                let productList = JSON.parse(JSON.stringify(response.data.productList));
                setproductlist(productList);

                Promise.all(productList.map(product => 
                    axios.get(
                        `http://43.201.210.173:8080/products/info/detail/${product}`,
                        {
                            headers: {
                                'Authorization': `${token}`,
                                'accept': 'application/json',
                                'Content-Type': 'application/json',
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Headers": "*",
                            }
                        }
                    )
                )).then(responseArray => {
                    responseArray.forEach(response2 => {
                        setstorename(JSON.stringify(response2.data.storeId.name).replace(/"/g, ''));
                        // console.log(JSON.stringify(response2.data));
                        setProductDetails(oldArray => [...oldArray, response2.data]);
                    })
                }).catch(error => {
                    console.log(error);
                });

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])
    
    
    console.log("product details : ", productDetails);
    // console.log("product details : ", productDetails[0].imgList[0]);



    return (
        // <styled.Container>
        //     <styled.FindWhiteBox>
        <div>
            <styled.HeaderBox>
                <styled.MetaIcon />
                <span>주문 정보</span>
            </styled.HeaderBox>
            <styled.AboutOrder>
                <styled.AboutOrderInnerDiv>
                    <styled.OrderNo>
                        <span>스토어 이름 : {storename}</span>
                        <span>주문 날짜 : {orderdate}</span>
                        <span>입금 정보 : {accountinfo}</span>
                        <span>총 주문 금액 : {totalprice}원</span>
                    </styled.OrderNo>
                    <styled.CancelOrderBtn>
                        <span>구매</span>
                        <span>취소</span>
                    </styled.CancelOrderBtn>
                </styled.AboutOrderInnerDiv>
            </styled.AboutOrder>
            <styled.ItemBox>
                <styled.PurchasedItemList>
                    {productDetails.map((product) => (
                        <styled.PurchasedItem>
                            <styled.ProductImg src={product.imageList}/>
                            <styled.ProductInfo>
                                <styled.ProductName>
                                    <span>{product.name}</span>
                                </styled.ProductName>
                                <styled.ProductPriceAndNumber>
                                    <styled.ProductPrice>
                                        <span>{product.price}원</span>
                                    </styled.ProductPrice>
                                    <styled.NumOfProduct>
                                        <span>수량 : {product.amount}개</span>
                                    </styled.NumOfProduct>
                                </styled.ProductPriceAndNumber>
                            </styled.ProductInfo>
                        </styled.PurchasedItem>
                    ))}
                    {/* <PurchasedItem />
                    <PurchasedItem /> */}
                </styled.PurchasedItemList>
                {/* <styled.HrLine />
                <styled.PurchasedItemList>
                    <PurchasedItem />
                    <PurchasedItem />
                </styled.PurchasedItemList> */}
            </styled.ItemBox>
            <styled.BackAndCloseBtn>
                <styled.BackBtn onClick={backClick}>
                    <span>이전</span>
                </styled.BackBtn>
                <styled.CloseBtn onClick={closeClick}>
                    <span>닫기</span>
                </styled.CloseBtn>
            </styled.BackAndCloseBtn>
        </div>
        //     </styled.FindWhiteBox>
        // </styled.Container>
    )
}

export default PurchaseDetail;
