import React from 'react';
import {Link} from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";


const NavMenu = () => {

    return (
        <div>

            <Container>
                <Row>
                    <ul>
                        <Col>
                            <Link to="/">Homie</Link>
                        </Col>
                        <Col>
                            <Link to="/about">About</Link>
                        </Col>
                        <Col>
                            <Link to="/topics">Topics</Link>
                        </Col>
                    </ul>
                </Row>
            </Container>


        </div>
    );
}

export default NavMenu;
