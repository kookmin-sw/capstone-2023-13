import React, {useEffect, useRef, useState } from "react";
import * as styled from "./styles";
import styles from "./sidebar.module.css";
import smile from '../../assets/img/smile.png';
import TransHistory from '../TransHistory/TransHistory';
import "../TransHistory/TransHistory.css";
// import { useNavigate } from "react-router-dom";


const Sidebar = ({ width=280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  //사이드바 팝업 상태 관리
  const [showPopup, setShowPopup] = useState('close');

  // const movePage = useNavigate();
  const handlePopup = (popup) => {
    if(popup === "close"){
      setShowPopup('close');
      setX(-width);
      setOpen(false);
    }
  }
  const transHistoryClick = () => {
    setShowPopup('trans');
    setX(-width);
    setOpen(false);
    // handleClose();
  }
  
  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width); 
      await setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
    <div className={styles.container}>
      {showPopup == "trans" && (
      <div className = "fakeBackground"><TransHistory onPopup={handlePopup}></TransHistory></div>)}
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '80%',  transform: `translatex(${-xPosition}px)`}}>
        <button onClick={() => toggleMenu()}
          className={styles.button} >
          {isOpen ?
            <span>X</span> : <></>
            // <styled.SmileIcon onClick={() => toggleMenu()}/>
          }
        </button>
        <div className={styles.content}>{children}</div> 
        <div className={styles.innerContent}>
          <styled.SidebarTitle>
            <styled.MetaIcon />
            <span>Meta-PoP</span>
          </styled.SidebarTitle>
          <styled.MyInfo>
            <styled.MyInfoIcon />
            <span>내 정보</span>
          </styled.MyInfo>
          <styled.History>
            <styled.HistoryIcon />
            <span onClick={() => transHistoryClick()}>거래 내역</span>
          </styled.History>
          <styled.MyShop>
            <styled.MyShopIcon />
            <span>내 상점</span>
          </styled.MyShop>
          <styled.Schedule>
            <styled.ScheduleIcon />
            <span>일정 관리</span>
          </styled.Schedule>
          <styled.Logout>
            <styled.LogoutIcon />
            <span>로그아웃</span>
          </styled.Logout>
          <styled.SidebarProfile>
            <styled.ProfileImg />
            <styled.SidebarProfileText>
              <span>Ted</span>
              <span>htchoi1006@kookmin.ac.kr</span>
            </styled.SidebarProfileText>
          </styled.SidebarProfile>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;