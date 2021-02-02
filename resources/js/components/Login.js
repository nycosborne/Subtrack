import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import axios from "axios";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
        setEmail(email);
    }, [email]);

    useEffect(() => {
        setEmail(password);
    }, [password]);


    const upDateEmail = (e) => {
        e.preventDefault();
        setTerm(e.target.value);
    }

    const upDatePass = (e) => {
        e.preventDefault();
        setTerm(e.target.value);
    }


        const sendUserPass = async () => {
            const {data} = await axios.get('http://127.0.0.1:8000/api/countries', {
                params: {
                    query: debouncedTerm
                }
            });

            if (typeof (data[0]) == 'undefined') {
                setResults([]);
            } else {
                setResults(data);
            }
            console.log(data);

        }

        const submit = () => {

            sendUserPass();
        }


    return (
        <div>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="search" placeholder="Search" value={email}
                                  onChange={event => {
                                      if (event.key !== "Enter") {
                                          upDateEmail(event);
                                      }
                                  }
                                  }
                                  onKeyPress={event => {
                                      if (event.key === "Enter") {
                                          submit(event);
                                      }
                                  }
                                  }
                    />

                    <Form.Label>Search</Form.Label>
                    <Form.Control type="search" placeholder="Search" value={password}
                                  onChange={event => {
                                      if (event.key !== "Enter") {
                                          upDatePass(event);
                                      }
                                  }
                                  }
                                  onKeyPress={event => {
                                      if (event.key === "Enter") {
                                          submit(event);
                                      }
                                  }
                                  }
                    />

                </Form.Group>
                <Button>Submit</Button>
            </Form>

        </div>
    );
}

export default Login;
