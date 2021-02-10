import React from 'react';
import ReactDOM from 'react-dom';

import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Nav from "./Nav";
import Login from "./Login";
import About from "./About";


function App() {
    return (
         <Router>
            <div className="container"><ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Switch>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/topics">

                                </Route>
                                <Route path="/">
                                    <div className="col-md-8">
                                        <div className="card">
                                            <About/>
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
