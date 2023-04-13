import styled from "styled-components";
import background from '../../../images/backgrounds/startbackground.png';
import metaicon from '../../../images/icons/meta-icon.png';
import productimg from '../../../images/etc/Rectangle.png';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
`;

export const Backgroud = styled.img.attrs({
    src: background,
})`
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: rgb(255, 226, 226); */
    width:100vw;
    height: 100vh;
    margin:0;
    padding-top:104px;
    text-align: center;
    overflow: hidden;
`;

export const FindWhiteBox = styled.div`
    margin :0px auto;
    width: 1435px;
    height: 924px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 37px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
`;

export const HeaderBox = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    background: #8398D1;
    border-radius: 15px 15px 0px 0px;

    > span {
        font-size: 48px;
        margin-left: 10px;
        font-weight: bolder;
        margin-top: 5px;
    }
`;

export const MetaIcon = styled.img.attrs({
    src: metaicon,
})`
    width: 128px;
    height: 97px;
    margin-left: 41px;
    margin-bottom: 10px;
`;

export const AboutOrder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 54px;
    margin-left: 127px;
    margin-bottom: 72px;
`;

export const OrderNo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
        font-weight: 500;
        font-size: 30px;
    }
`;

export const CancelOrderBtn = styled.button`
    width: 155px;
    height: 141px;
    left: 1373px;
    top: 264px;

    background: #FFFFFF;
    border: 3px solid #775EEE;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 150px;
    cursor: pointer;

    > span {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        text-align: center;

        color: #775EEE;
    }
`;

export const ItemBox = styled.div`
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PurchasedItemList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1158px;
    /* margin-left: 128px; */
`;

export const PurchasedItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductImg = styled.img.attrs({
    src: productimg,
})`
    width: 149px;
    height: 149px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 27px;
    margin-right: 50px;
`;

export const ProductName = styled.div`
    font-weight: 600;
    font-size: 40px;
`;

export const ProductPriceAndNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
`;

export const ProductPrice = styled.div`
    font-weight: 500;
    font-size: 30px;
`;

export const NumOfProduct = styled.div`
    font-weight: 500;
    font-size: 28px;
    margin-left: 21px;
`;

export const HrLine = styled.div`
    width: 1158px;
    height: 0px;
    border: 1px solid #000000;
    margin-top: 23px;
    margin-bottom: 23px;
`;

export const CloseBtn = styled.button`
    width: 195px;
    height: 73px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 63px;
    margin-left: 1094px;
    
    cursor: pointer;

    > span {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #FFFFFF;
    }
`;