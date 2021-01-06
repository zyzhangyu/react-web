import logo from './logo.svg';
import './App.css';
import React from "react";

import ComponentDefinitionDemo from "./pages/01_怎样去定义一个组件以及render函数的返回值类型";
import ComponentLifeCycleDemo from "./pages/02_组件的生命周期";
import {BigComponent} from "./pages/03_组件之间的通信";
import ZYCpt18 from "./pages/18_防抖和节流";

function App() {

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

    {/*  <HowTheComponentsAreDefined></HowTheComponentsAreDefined>*/}
    {/*<ReactLifeCycle01></ReactLifeCycle01>*/}

        {/*<FatherGiveSon></FatherGiveSon>*/}
        {/*<CrossComponentSendMessage></CrossComponentSendMessage>*/}

        {/*01_怎样去定义一个组件以及render函数的返回值类型*/}
        <ComponentDefinitionDemo />
        {/*02_组件的生命周期*/}
        <ComponentLifeCycleDemo/>
         {/*03_组件之间的通信*/}
        <BigComponent></BigComponent>

        <ZYCpt18></ZYCpt18>



     </div>
  );
}

export default App;
