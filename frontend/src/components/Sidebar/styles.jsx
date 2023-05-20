import styled from "styled-components";
import smile from '@/assets/img/smile.png';
import metaicon from '@/images/icons/meta-icon.png';
import myinfo from '@/images/icons/myinfo.png';
import history from '@/images/icons/history.png';
import logout from '@/images/icons/logout.png';
import myshop from '@/images/icons/myshop.png'
import schedule from '@/images/icons/schedule.png';
import profileimg from '@/images/etc/profileimg.png';
import closebutton from '@/images/etc/closebutton.png';
import salehistory from '@/images/icons/sellhistory.png';

export const SmileIcon = styled.img.attrs({
    src: smile,
})`
    width: 20px;
    height: 20px;
`;

export const SidebarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        font-size: 25px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 10px;
    }
`;

export const MetaIcon = styled.img.attrs({
    src: metaicon,
})`
    width: 70px;
    height: 65px;
`;

export const MyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 50px;

    > span {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const MyInfoIcon = styled.img.attrs({
    src: myinfo,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const History = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 30px;

    > span {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const BuyHistoryIcon = styled.img.attrs({
    src: history,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const SaleHistoryIcon = styled.img.attrs({
    src: salehistory,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const MyShop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 30px;

    > span {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const MyShopIcon = styled.img.attrs({
    src: myshop,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const Schedule = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 30px;

    > span {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const ScheduleIcon = styled.img.attrs({
    src: schedule,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 30px;

    > span {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const LogoutIcon = styled.img.attrs({
    src: logout,
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const SidebarProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 300px;
`;

export const ProfileImg = styled.img.attrs({
    src: profileimg,
})`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

export const SidebarProfileText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > span {
        &:nth-child(1){
            font-size: 20px;
        }

        &:nth-child(2){
            font-size: 13px;
        }
    }
`;





