import React, { useState } from "react";
import * as styled from './styles';

const OrderInfo = () => {
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


    return (
        <styled.Container>
            <styled.FindWhiteBox>
                <styled.HeaderBox>
                    <styled.MetaIcon />
                    <span>주문 정보</span>
                </styled.HeaderBox>
                <styled.AboutOrder>
                    <styled.OrderNo>
                        <span>주문 번호 : 8783927023970</span>
                        <span>스토어 이름 : 메종 마르지엘라</span>
                        <span>주문 날짜 : 2023.03.20 (월)</span>
                        <span>총 주문 금액 : 120,000 원</span>
                    </styled.OrderNo>
                    <styled.CancelOrderBtn>
                        <span>구매</span>
                        <span>취소</span>
                    </styled.CancelOrderBtn>
                </styled.AboutOrder>
                <styled.ItemBox>
                    <styled.PurchasedItemList>
                        <PurchasedItem />
                        <PurchasedItem />
                    </styled.PurchasedItemList>
                    <styled.HrLine />
                    <styled.PurchasedItemList>
                        <PurchasedItem />
                        <PurchasedItem />
                    </styled.PurchasedItemList>
                </styled.ItemBox>
                <styled.CloseBtn>
                    <span>닫기</span>
                </styled.CloseBtn>
            </styled.FindWhiteBox>
        </styled.Container>
    )
}

export default OrderInfo;
