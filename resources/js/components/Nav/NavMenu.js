import React from 'react';
import {Link} from "react-router-dom";
const NavMenu = () => {

    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <Link to="/">Home</Link>
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

export default NavMenu;
