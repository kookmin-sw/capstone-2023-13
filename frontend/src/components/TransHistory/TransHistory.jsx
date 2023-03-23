import React, {useState} from "react";
import "./TransHistory.css";
import MainGdevelop from "../MainGdevelop/MainGdevelop";
import PurchaseBox from "./PurchaseBox";
import SaleBox from "./SaleBox";

function TransHistory() {
  const [page_state, setPage] = useState("purchase");

  let content;
  
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
    <div className="trans-Background">
      <MainGdevelop className = "trans-MainBackground"/>
      <div className="trans-WhiteBox2">
        {content}
      </div>
    </div>
  );
}

export default TransHistory;