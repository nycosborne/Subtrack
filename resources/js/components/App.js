import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NavMenu from "./Nav/NavMenu";
import Login from "./Login";
import About from "./About";


function App() {
    return (
        <Router>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <NavMenu/>
                            <Switch>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/topics">

                                </Route>
                                <Route path="/">
                                    <div className="col-md-8">
                                        <div className="card">
                                            <Login/>
                                        </div>
                                    </div>
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
