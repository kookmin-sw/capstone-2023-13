import React, {useState} from "react";
import "./StartPage.css";
import GDevelopTest from '../../components/GDevelopTest';
import LoginBox from "../../components/Login/LoginBox";
import SignupBox from "../../components/Signup/SignupBox";
import CustomizingBox from "../../components/Customizing/CustomizingBox";
import FindPassword from "../../components/FindPassword/FindPassword";
import PasswordSent from "../../components/PasswordSent/PasswordSent";
import MainGdevelop from "../../components/MainGDevelop/MainGDevelop";
function StartPage() {
  const [page_state, setPage] = useState("login");

  let content;
  
  const handlePage = (page) => {
    if (page === "login"){
      setPage("login");
    } 
    else if (page === "signup"){
      setPage("signup");
    }
    else if (page === "find"){
      setPage("find");
    }
    else if (page === "passwordsent"){
      setPage("passwordsent");
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
  else if(page_state === "find"){
    content = <FindPassword onPage={handlePage} />
  }
  else if(page_state === "passwordsent"){
    content = <PasswordSent onPage={handlePage} />
  }
  else if(page_state === "test"){
    content=<GDevelopTest></GDevelopTest>
  }
  
  // const boxSlide ={
  //   width:page_state==="custom"?'1500px':'none',
  //   width:page_state==="find"?'500px':'none',
  //   height:page_state === "find" ? '550px' : 'none',
  //   width:page_state==="passwordsent" ? '600px' : 'none',
  //   height:page_state === "passwordsent" ? '550px' : 'none',
  //   // width:page_state==="login" ? '550px' : 'none',
  //   // height:page_state === "login" ? '800px' : 'none',
  //   transition: 'transform 1s ease, width 1s, height 1s',
  // }
  const boxSlide ={
    width:page_state==="custom"?'1500px':'none',
    transition: 'transform 1s ease, width 1s',
  }

  return (
    <div className="Background">
      <MainGdevelop className = "MainBackground"/>
      <div className="WhiteBox2" style={boxSlide}>
        {content}
      </div>
    </div>
  );
}

export default StartPage;