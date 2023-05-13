import React, {useState} from "react";
import "./MainPage.css";
import MainGdevelop from "@components/MainGDevelop/MainGDevelop";
import Sidebar from '@components/Sidebar/Sidebar';
function MainPage() {

  return (
    <div className="Background">
      <Sidebar />
      <MainGdevelop />
    </div>
  );
}

export default MainPage;