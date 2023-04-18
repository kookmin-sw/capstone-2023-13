import React, {useState} from "react";
import "@components/TransHistory/TransHistory.css";
import PurchaseFullBox from "./PurchaseFullBox";
import PurchaseDetail from "./PurchaseDetail";

function PurchaseHistory({onPopup}) {
  const [page_state, setPage] = useState("full");
  let content;
  // function closeClick(){
  //   onPopup("close");
  // }
  
  const handlePage = (page) => {
    if (page === "full"){
      setPage("full");
    } 
    else if (page === "detail"){
      setPage("detail");
    }
  }
  const closePage = (close) => {
    console.log("close2");
    if (close === "true"){
      onPopup("close");
    }
  }
  if (page_state === "full"){
    content = <PurchaseFullBox onPage={handlePage} onClose={closePage}/>
  }
  else if (page_state === "detail"){
    content = <PurchaseDetail onPage={handlePage} onClose={closePage}/>
  }
  return (
    // <div className="trans-Background">
      // <MainGdevelop className = "trans-MainBackground"/>
      // <div className="fakeBackground">
      <div className="trans-WhiteBox3">
        {content}
       {/* <button className="customBtn" onClick={closeClick}>닫기</button> */}
      </div>
      // </div>
    // </div>
  );
}

export default PurchaseHistory;