import './Login.css';
import {useEffect} from 'react';
import {Form,Button,Alert,Card} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    var query = new URLSearchParams(useLocation().search);
    var qlogout = query.get("logout");
    useEffect(() => {
        // parametre olarak verilen metot login bileşeni sayfada render/update olunca çalışır
        if (qlogout == "success") {
            toast("You have logged out succesfully!");
        }
    });

    return (
        <Card className="card-login">
            <Card.Body className="p-sm-4">
                <ToastContainer />
                <h1 className="text-center">Login</h1>
                <Alert variant="danger">
                    Invalid e-mail or password.
                    </Alert>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>

                <div className="text-center mt-3">
                    <Link to="/register" className="text-center">Register as a new user.</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Login;
