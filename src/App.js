import React from "react";
import './styles.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className='container'>
      <Header title="Header"></Header>
      <Content title="Content" ></Content>
      <SideBar title="SideBar"style={{width: 200}}></SideBar>
      <Footer title="Footer" style={{bottom: 0}}></Footer>
    </div>
  );
};

export default App;
