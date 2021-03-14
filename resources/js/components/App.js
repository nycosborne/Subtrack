import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NavMenu from "./Nav/NavMenu";
import Login from "./Login";
import About from "./About";


function App() {
    // console.log("0000000                         000        0000000 '\\n' 111111111      11111111100          000      111111111 '\\n' 00000        111111111111111111      00000      000000");
    // 111111111      11111111100          000      111111111
    // 00000        111111111111111111      00000      000000
    // 000        1111111111111111111111111100000         000
    // 000        1111       1111111111111111100          000
    // 000         11       0     1111111100              000
    // 000          1      00             1               000
    // 000               00      00       1               000
    // 000             000    00000       1               000
    // 00000            0000  00000000       1                00000
    // 11111            000 00    000000      000                 11111
    // 00000          0000      000000     00000              00000
    // 000        10000      000000      000              0000
    // 000        00000      000000       1               000
    // 000        000000     10000        1     0         000
    // 000        1000000 00              1    00         000
    // 000         1111111                1 0000          000
    // 000          1111111100           000000           000
    // 0000          111111111111111110000000            0000
    // 111111111        111111111111100000          111111111
    // 0000000              00000000              0000000

    return (
        <Router>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <NavMenu />
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
