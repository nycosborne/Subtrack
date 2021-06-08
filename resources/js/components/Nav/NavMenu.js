import React, {useState} from 'react';
import {Link} from "react-router-dom";
const NavMenu = () => {

    const [userIs, setUserIs] = useState(null);

    axios.defaults.withCredentials = true;
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/user').then(response => {
            console.log(response);
            setUserIs(response.data);
        });
    });
    // console.log(userIs);

    return (
        <div>
            <Container className={'tests'}>
                <Row>
                    <Col>
                        <Link to="/home">Home</Link>
                    </Col>
                    <Col>
                        <Link to="/about">About</Link>
                    </Col>
                    <Col>
                        <Link to="/topics">Topics</Link>
                    </Col>
                    <Col>
                        <Link to="/welcome">Welcome</Link>
                    </Col>

                    <Col>
                        <Link to="/logout">Logout</Link>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}


import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

export default NavMenu;
