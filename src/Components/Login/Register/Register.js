import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, signInWithGoogle } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    };

    const handleRegisterSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("your password did not match");
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        alert("register successfull");
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    };
    return (
        <div className="container py-5 my-5">
            <div className="d-flex justify-content-center align-items-center">
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="login_form">
                        <div className="login_title mb-4">
                            <h3>
                                Please <span style={{ color: "red" }}>Register</span>
                            </h3>
                        </div>
                        <form onSubmit={handleRegisterSubmit}>
                            <label htmlFor="name">
                                Full Name <span>*</span>
                            </label>
                            <input onChange={handleOnBlur} type="name" name="name" id="name" placeholder="Enter your full Name" required />

                            <label htmlFor="email">
                                Email Address <span>*</span>
                            </label>
                            <input onChange={handleOnBlur} type="email" name="email" id="email" placeholder="Enter your email" required />

                            <label htmlFor="password">
                                Password <span>*</span>
                            </label>
                            <input
                                onChange={handleOnBlur}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />

                            <label htmlFor="re_pass">
                                Confirm Password <span>*</span>
                            </label>
                            <input
                                onChange={handleOnBlur}
                                type="password"
                                name="password2"
                                id="re_pass"
                                placeholder="Re enter your password"
                                required
                            />

                            <div className="d-flex align-items-center justify-content-between">
                                <Button type="submit" className="btn_dashboard ">
                                    Register
                                </Button>
                                <span>If you are already register? please login</span>
                                <Link className="btn_dashboard" to="/login">
                                    <Button variant="text">Login</Button>
                                </Link>
                            </div>

                            <Button onClick={handleGoogleSignIn} className="btn_dashboard py-2 w-100 mt-4">
                                Sign In With Google
                            </Button>
                        </form>
                    </div>
                </Col>
                <Col md={2}></Col>
            </div>
        </div>
    );
};

export default Register;
