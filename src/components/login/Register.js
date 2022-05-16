import { async } from '@firebase/util';
import React, { useState , useRef} from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { useAuth } from '../../context/auth-context';
import { signUp } from '../../Firebase/firebase-config';
const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    async function handleSignUp(){
        await signUp(emailRef.current.value, passwordRef.current.value);
    }
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">Registration</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="Name" placeholder="Enter Name"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref = {emailRef}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> Create Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref = {passwordRef} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" onClick={handleSignUp} type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Register;