import styled from "styled-components";
import background from '@/images/backgrounds/startbackground.png';
import metaicon from '@/images/icons/meta-icon.png';
import productimg from '@/images/etc/Rectangle.png';


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
    width: 1200px;
    margin-top: 30px;
    /* margin-left: 150px; */
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const AboutOrderInnerDiv = styled.div`
    width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const OrderNo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
        font-weight: 500;
        font-size: 22px;
        line-height: 150%;
    }
`;

export const StateButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StartDeliveryBtn = styled.button`
    width: 120px;
    height: 120px;

    background: #FFFFFF;
    border: 3px solid #775EEE;
    border-radius: 20px;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    > span {
        font-weight: 600;
        font-size: 30px;
        line-height: 44px;
        text-align: center;

        color: #775EEE;
    }
`;

export const CancelOrderBtn = styled.button`
    width: 120px;
    height: 120px;

    background: #FFFFFF;
    border: 3px solid #775EEE;
    border-radius: 20px;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    cursor: pointer;

    > span {
        font-weight: 600;
        font-size: 30px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-row-gap: 30px;
    grid-column-gap: 190px;
    padding: 0 74px 0 74px;
    justify-content: space-around;
    width: 950px;
    height: 250px;
    overflow: scroll;
    /* margin-left: 128px; */
`;

export const PurchasedItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductImg = styled.img.attrs(props => ({
    src: props.src,
}))`
    width: 100px;
    height: 100px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 27px;
    margin-right: 10px;
`;

export const ProductName = styled.div`
    font-weight: 600;
    font-size: 30px;
`;

export const ProductPriceAndNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
`;

export const ProductPrice = styled.div`
    font-weight: 500;
    font-size: 25px;
`;

export const NumOfProduct = styled.div`
    font-weight: 500;
    font-size: 25px;
    margin-left: 21px;
`;

export const HrLine = styled.div`
    width: 950px;
    height: 0px;
    border: 1px solid #000000;
    margin-top: 23px;
    margin-bottom: 23px;
`;

export const BackBtn = styled.button`
    width: 170px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 50px; */
    /* margin-left: 873px; */
    margin-right: 26px;
    
    cursor: pointer;

    > span {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        color: #141060;
    }
`;

export const BackAndCloseBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 100px;
    margin-top: 40px;
    position: absolute;
    right: 0px;
    bottom: 50px;
`;

export const CloseBtn = styled.button`
    width: 170px;
    height: 60px;
    background: #141060;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 63px; */
    
    cursor: pointer;

    > span {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        color: #FFFFFF;
    }
`;






