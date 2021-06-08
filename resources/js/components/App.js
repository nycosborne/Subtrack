import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NavMenu from "./Nav/NavMenu";
import Login from "./Login/Login";
import ClassLogin from "./Login/ClassLogin";
import About from "./About";
import Home from "./Home";


function App() {

    return (
        <Router>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div>
                            <ClassLogin />
                            <NavMenu />
                            <Switch>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/home">
                                    <Home/>
                                </Route>
                                <Route path="/">
                                    <Login/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}


export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
