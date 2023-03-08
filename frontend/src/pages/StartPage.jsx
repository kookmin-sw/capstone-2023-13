import React, {useState} from "react";
import "./StartPage.css";
import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";
import CustomizingBox from "../components/CustomizingBox";

function StartPage() {
  // const [num1] = useState(0);
  // const [num2] = useState(0);
  const [num1,setcount] = useState(0);
  let box;
  if(num1===0){
    box=<LoginBox></LoginBox>
  }
  else if(num1===1){
    box=<SignupBox></SignupBox>
  }
  else{
    box=<CustomizingBox></CustomizingBox>
  }
  function testClick() {
      setcount(num1+1);
  }
  
  const teststyle ={
    transform:num1 === 1 ? 'translateX(100%)' : 'none',
    width:num1===2?'1500px':'none',
    // position:num2===2?'static':'none',
    // display:num2===2?'inline-block':'flex',
    margin:num1===2?'26px auto 0px auto':'none',
    // width:num===2?'1500px':'none',
    transition: 'transform 1s ease, width 1s',
  }
  // const style2 ={
  //   width:num2===2?'1500px':'none',
  //   transition: 'width 1s',
  // }
  // const style2={
  //   margi
  // }
  return (
    <div className="Background">
      <div className="WhiteBox" style={teststyle}>
        {box}
        <button onClick={testClick}>test</button>
        {/* <button onClick={()=>{setcount2(num2+1)}}>hd</button> */}
        <p>{num1}</p>
      </div>
    </div>
  );
}

export default StartPage;