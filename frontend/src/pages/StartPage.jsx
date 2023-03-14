import React, {useState} from "react";
import "./StartPage.css";
import GDevelopTest from '../components/GDevelopTest';
import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";
import CustomizingBox from "../components/CustomizingBox";

function StartPage() {
  const [page_state, setPage] = useState("login");

  let content;
  
  const handlePage = (page) => {
    if (page === "login"){
      
    } 
    else if (page === "signup"){
      setPage("signup");
    }
    else{
      setPage("custom");
    }
  }
  if (page_state === "login"){
    content = <LoginBox onPage={handlePage} />
  }
  else if (page_state === "signup"){
    content = <SignupBox onPage={handlePage} />
  }
  else if(page_state === "custom"){
    content = <CustomizingBox onPage={handlePage} />
  }
  else if(page_state === "test"){
    content=<GDevelopTest></GDevelopTest>
  }
  
  const boxSlide ={
    width:page_state==="custom"?'1500px':'none',
    transition: 'transform 1s ease, width 1s',
  }
  return (
    <div className="Background">
      <div className="WhiteBox" style={boxSlide}>
        {content}
      </div>
    </div>
  );
}

export default StartPage;