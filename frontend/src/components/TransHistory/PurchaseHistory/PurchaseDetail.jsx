import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as styled from './styles';

const PurchaseDetail = ({ onPage, orderId, onClose }) => {
    const [buyerid, setbuyerid] = useState("");
    const [sellerid, setsellerid] = useState("");
    const [storename, setstorename] = useState("");
    const [orderdate, setorderdate] = useState("");
    const [accountinfo, setaccountinfo] = useState("");
    const [totalprice, settotalprice] = useState("");
    const [productlist, setproductlist] = useState([]);
    const [productamountlist, setproductamountlist] = useState([]);
    const [deliverstate, setdeliverstate] = useState("");
    const [deliverstatenumber, setdeliverstatenumber] = useState("");
    const [productDetails, setProductDetails] = useState([]);



    function closeClick() {
        console.log("close")
        onClose("true")
    }
    function backClick(){ //이전버튼 클릭 시
        onPage("full", 0)
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
        const orders_id = orderId;
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
                // console.log(orderData);
                let tmpDate = (JSON.stringify(response.data.orderDate).replace(/"/g, ''));
                setaccountinfo(JSON.stringify(response.data.sellerId.bank).replace(/"/g, '') + "   " + JSON.stringify(response.data.sellerId.account).replace(/"/g, ''));
                settotalprice(JSON.stringify(response.data.totalPrice));
                setdeliverstate(JSON.stringify(response.data.state));
                setdeliverstatenumber(JSON.stringify(response.data.state));
                setbuyerid(JSON.stringify(response.data.buyerId.id));
                setsellerid(JSON.stringify(response.data.sellerId.id));

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

                switch (response.data.state) {
                    case 0:
                        setdeliverstate('입금 확인 전');
                        break;
                    case 1:
                        setdeliverstate('배송중');
                        break;
                    case 2:
                        setdeliverstate('거래완료');
                        break;
                }


                let productamount = JSON.parse(JSON.stringify(response.data.productAmountList));
                setproductamountlist(productamount); 
                // console.log("배열로 바꾼 productamount:", productamount);

                let productList = JSON.parse(JSON.stringify(response.data.productList));
                setproductlist(productList);

                // console.log("product list :", productlist);

                

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
                ))
                .then(responseArray => {
                    // responseArray.forEach((response2, index) => {
                    //     let productWithAmount = response2.data; // Get product data
                    //     productWithAmount.amount2 = productamountlist[index]; // Add amount property to the product
                    //     setProductDetails(oldArray => [...oldArray, productWithAmount]);
                    // })
                    let updatedProductDetails = [];

                    responseArray.forEach((response2, index) => {
                        let productWithAmount = response2.data; // Get product data
                        productWithAmount.amount2 = productamountlist[index]; // Add amount property to the product

                        updatedProductDetails.push(productWithAmount); // Add the updated product detail to the array
                    });

                    // Set the state with the updated product details array
                    setProductDetails(updatedProductDetails);
                }).catch(error => {
                    console.log(error);
                });

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [productamountlist])
    
    
    // console.log("product details : ", productDetails);
    // console.log("product details : ", productDetails[0].imgList[0]);

    const UpdateProductStateToDone = () => {
        let token = localStorage.getItem('login-token');
        const orders_id = orderId;
        const response = axios.put(
            `http://43.201.210.173:8080/orders/update/${orders_id}`,
            {
                "buyerId": buyerid,
                "sellerId": sellerid,
                "state": 2,
                "totalPrice": totalprice,
                "productListId": productlist
            },
            {
                headers: {
                    'Authorization': `${token}`,
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                backClick();
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const DeleteOrder = () => {
        let token = localStorage.getItem('login-token');
        const orders_id = orderId;
        const response = axios.delete(
            `http://43.201.210.173:8080/orders/remove/${orders_id}`,
            {
                headers: {
                    'Authorization': `${token}`,
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                backClick();
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        // <styled.Container>
        //     <styled.FindWhiteBox>
        <div>
            <styled.HeaderBox>
                <styled.MetaIcon />
                <span>구매 상세</span>
            </styled.HeaderBox>
            <styled.AboutOrder>
                <styled.AboutOrderInnerDiv>
                    <styled.OrderNo>
                        <span>⦁ 스토어 이름 : {storename}</span>
                        <span>⦁ 주문 날짜 : {orderdate}</span>
                        <span>⦁ 입금 정보 : {accountinfo}</span>
                        <span>⦁ 주문 상태 : {deliverstate}</span>
                        <span>⦁ 총 주문 금액 : {totalprice}원</span>
                    </styled.OrderNo>
                    {deliverstatenumber === '0' && (
                        <styled.CancelOrderBtn onClick={() => { DeleteOrder() }}>
                            <span>구매</span>
                            <span>취소</span>
                        </styled.CancelOrderBtn>
                    )}
                    {deliverstatenumber === '1' && (
                        <styled.StartDeliveryBtn onClick={() => { UpdateProductStateToDone() }}>
                            <span>거래</span>
                            <span>완료</span>
                        </styled.StartDeliveryBtn>
                    )}

                </styled.AboutOrderInnerDiv>
            </styled.AboutOrder>
            <styled.ItemBox>
                <styled.PurchasedItemList>
                    {productDetails.map((product) => (
                        <styled.PurchasedItem>
                            <styled.ProductImg src={product.imgList[0]}/>
                            <styled.ProductInfo>
                                <styled.ProductName>
                                    <span>{product.name}</span>
                                </styled.ProductName>
                                <styled.ProductPriceAndNumber>
                                    <styled.ProductPrice>
                                        <span>{product.price}원</span>
                                    </styled.ProductPrice>
                                    <styled.NumOfProduct>
                                        <span>수량 : {product.amount2}개</span>
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
