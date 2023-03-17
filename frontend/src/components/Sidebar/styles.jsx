import styled from "styled-components";
import smile from '../../assets/img/smile.png';
import metaicon from '../../images/meta-icon.png';
import myinfo from '../../images/myinfo.png';
import history from '../../images/history.png';
import logout from '../../images/logout.png';
import myshop from '../../images/myshop.png'
import schedule from '../../images/schedule.png';
import profileimg from '../../images/profileimg.png'

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

export const HistoryIcon = styled.img.attrs({
    src: history,
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

// export const Container = styled.div`
//     background-color: #E3ECF1;
// `;

// export const Sidebar = styled.div`
//     background-color: #E3ECF1;
//     border-right: 4px solid #202020;
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     transition: 0.4s ease;
//     color: #202020;
//     height: 100%;
//     z-index: 99;
// `;

// export const Button = styled.button`
//     position: relative;
//     left: 330px; 
//     top: 10px;
//     width: 40px;
//     height: 40px;
//     z-index: 99;
//     transition: 0.8s ease;
//     border: 2px solid #202020;
//     border-radius: 40px;
//     overflow: hidden;
// `;

// export const OpenBtn = styled.div`
//     width: 100%;
//     height: 100%;
// `;

// export const Content = styled.div`
//     padding: 40px 40px 0 20px;
//     position: relative;
//     width: 100%;
// `;

// export const Icon = styled.div`
//     margin: 0;
//     color: #202020;
// `;




