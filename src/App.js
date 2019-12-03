import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Switch, HashRouter } from "react-router-dom";
import Home from  './pages/home/index'



class App extends Component {

    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Home" component={Home}></Route>
                    <Route exact path="/posts" component={Home}></Route>
                </Switch>
            </BrowserRouter>
            </div>
        );
    }
}


export default App;

