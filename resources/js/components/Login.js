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
        setpassword(password);
    }, [password]);


    const upDateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const upDatePass = (e) => {
        e.preventDefault();
        setpassword(e.target.value);
    }



    const submit = (e) => {
        const cred = {email: email, password:password};


            axios.defaults.withCredentials = true;
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', cred).then(response => {
                    console.log(response);
                });
            });
        }


    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="" placeholder="" value={email}
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

                    <Form.Label>Pass</Form.Label>
                    <Form.Control type="" placeholder="" value={password}
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
                    <Button onClick={submit}>Submit</Button>
                </Form.Group>
            </Form>
            <a></a>
        </div>
    );
}

export default Login;
