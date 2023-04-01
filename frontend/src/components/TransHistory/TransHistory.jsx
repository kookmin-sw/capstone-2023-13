import React, {useState} from "react";
import "./TransHistory.css";
// import MainGdevelop from "../MainGdevelop/MainGdevelop";
import PurchaseBox from "./PurchaseBox";
import SaleBox from "./SaleBox";

function TransHistory({onPopup}) {
  const [page_state, setPage] = useState("purchase");

  let content;
  function closeClick(){
    console.log('hi');
    onPopup("close");
    // movePage('/main');
  }
  
  const handlePage = (page) => {
    if (page === "purchase"){
      setPage("purchase");
    } 
    else if (page === "sale"){
      setPage("sale");
    }
  }
  if (page_state === "purchase"){
    content = <PurchaseBox onPage={handlePage} />
  }
  else if (page_state === "sale"){
    content = <SaleBox onPage={handlePage} />
  }
  return (
    // <div className="trans-Background">
      // <MainGdevelop className = "trans-MainBackground"/>
      // <div className="fakeBackground">
      <div className="trans-WhiteBox3">
        {content}
       <button className="customBtn" onClick={closeClick}>닫기</button>
      </div>
      // </div>
    // </div>
  );
}

export default TransHistory;