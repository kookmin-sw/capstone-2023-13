import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as styled from './styles';
import { StartDeliveryBtn, StateButtons } from "../PurchaseHistory/styles";

const SaleDetail = ({ onPage, onClose }) => {
    const [buyername, setbuyername] = useState("");
    const [buyerid, setbuyerid] = useState("");
    const [sellerid, setsellerid] = useState("");
    const [orderdate, setorderdate] = useState("");
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
        onPage("full")
    }
    // const PurchasedItem = () => {
    //     return (
    //         <styled.PurchasedItem>
    //             <styled.ProductImg />
    //             <styled.ProductInfo>
    //                 <styled.ProductName>
    //                     <span>판매한 상품 이름</span>
    //                 </styled.ProductName>
    //                 <styled.ProductPriceAndNumber>
    //                     <styled.ProductPrice>
    //                         <span>30,000원</span>
    //                     </styled.ProductPrice>
    //                     <styled.NumOfProduct>
    //                         <span>수량 : 3개</span>
    //                     </styled.NumOfProduct>
    //                 </styled.ProductPriceAndNumber>
    //             </styled.ProductInfo>
    //         </styled.PurchasedItem>
    //     )

    // }



    useEffect(() => {
        const orders_id = 3;
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
                let tmpDate = (JSON.stringify(response.data.orderDate).replace(/"/g, ''));
                settotalprice(JSON.stringify(response.data.totalPrice));
                setbuyername(JSON.stringify(response.data.buyerId.name));
                setbuyerid(JSON.stringify(response.data.buyerId.id));
                setsellerid(JSON.stringify(response.data.sellerId.id));
                setdeliverstatenumber(JSON.stringify(response.data.state));

                // console.log("test:", JSON.stringify(response.data));
                


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

                // console.log(JSON.stringify(response.data.productAmountList));
                let productamount = JSON.parse(JSON.stringify(response.data.productAmountList));
                // console.log("배열로 바꾼 productamount:", productamount);
                setproductamountlist(productamount); 
                // console.log("state에 저장한 productamountlist:", productamountlist);
                

                let productList = JSON.parse(JSON.stringify(response.data.productList));
                // let productAmountList = JSON.parse(JSON.stringify(response.data.productAmountList));
                setproductlist(productList);
                // setproductamountlist(productAmountList);

                // console.log("productlist", productlist);
                // console.log("orderdata: ", orderData);
                // console.log("productamountlist", productamountlist);
                

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
    }, [productamountlist]);

    // useEffect(() => {
    //     // new useEffect for monitoring productDetails
    //     console.log("Updated product details:", productDetails);
    // }, [productDetails]);


    // console.log("productlist:: ",productlist)
    // console.log("product details:", productDetails);


    const UpdateProductState = () => {
        let token = localStorage.getItem('login-token');
        const orders_id = 2;
        const response = axios.put(
            `http://43.201.210.173:8080/orders/update/${orders_id}`,
            {
                "buyerId": buyerid,
                "sellerId": sellerid,
                "state": 1,
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
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const DeleteOrder = () => {
        let token = localStorage.getItem('login-token');
        const orders_id = 1;
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
                <span>주문 정보</span>
            </styled.HeaderBox>
            <styled.AboutOrder>
                <styled.AboutOrderInnerDiv>
                    <styled.OrderNo>
                        <span>구매자 이름 : {buyername}</span>
                        <span>주문 날짜 : {orderdate}</span>
                        <span>판매 상태 : {deliverstate}</span>
                        <span>총 주문 금액 : {totalprice}원</span>
                    </styled.OrderNo>
                    <styled.StateButtons>
                        {deliverstate === '입금 확인 전' && (
                            <>
                                <styled.StartDeliveryBtn onClick={() => {setdeliverstate('배송중'); UpdateProductState(); }}>
                                    <span>배송</span>
                                    <span>시작</span>
                                </styled.StartDeliveryBtn>
                                <styled.CancelOrderBtn onClick={() => {DeleteOrder(); }}>
                                    <span>판매</span>
                                    <span>취소</span>
                                </styled.CancelOrderBtn>
                            </>
                        )}
                    </styled.StateButtons>

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
            </styled.ItemBox>
            <styled.BackAndCloseBtn>
                <styled.BackBtn onClick={backClick}>
                    <span>이전</span>
                </styled.BackBtn>
                <styled.CloseBtn onClick={closeClick}>
                    <span >닫기</span>
                </styled.CloseBtn>
            </styled.BackAndCloseBtn>
        </div>
        //     </styled.FindWhiteBox>
        // </styled.Container>
    )
}

export default SaleDetail;
