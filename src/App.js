import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Home} from './pages/home/index.jsx';
import { BrowserRouter, Route, } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail" component={Detail}/>
            </Switch>
        </HashRouter>
    );
}


export default App;

