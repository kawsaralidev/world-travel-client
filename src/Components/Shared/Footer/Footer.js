import React from "react";
import "./Footer.css";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container text-start">
            <div className="container">
                <Row className="pt-4 pb-2 gx-4 gy-3 m-0">
                    <Col md={3} sm={6} xs={12}>
                        <h4 className="mb-4  ">
                            <span style={{ color: "red", borderBottom: "2px solid red" }}>World-</span>Travel
                        </h4>

                        <div className="d-flex">
                            <p className="ms-2 text-start">
                                Natore, Rajshahi,
                                <span className="fs-6">Bangladesh</span>
                            </p>
                        </div>
                        <div className="footer-icon">
                            <span>
                                <i class="fab fa-facebook-square fs-2"></i> <i class="fab fa-instagram fs-2"></i>
                                <i class="fab fa-twitter-square fs-2"></i>
                                <i class="fab fa-whatsapp fs-2"></i>
                            </span>
                        </div>
                    </Col>

                    {/* Contact us */}
                    <Col md={3} sm={6} xs={12}>
                        <h4 className="mb-4 ">
                            <span style={{ borderBottom: "2px solid red" }}>Contact</span> us
                        </h4>
                        <div className=" text-start mb-3">
                            <div className="pb-3">
                                <p>Call us</p>
                                <span>+8801322334455</span>
                            </div>

                            <div>
                                <p>Email us</p>
                                <span>worldtravel@gmail.com</span>
                            </div>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col md={3} sm={6} xs={12}>
                        <div className="mb-4">
                            <h4 className="mb-4 ">
                                <span style={{ borderBottom: "2px solid red" }}>Quick</span> Links
                            </h4>

                            <Nav.Link as={Link} to="/home" className="text-dark text-decoration-none">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="text-dark text-decoration-none">
                                Shop
                            </Nav.Link>
                            <Nav.Link as={Link} to="/category" className="text-dark text-decoration-none">
                                Category
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="text-dark text-decoration-none">
                                Blogs
                            </Nav.Link>
                        </div>
                    </Col>

                    {/* About us */}
                    <Col md={3} sm={6} xs={12}>
                        <div>
                            <h4 className="mb-4 ">
                                <span style={{ borderBottom: "2px solid red" }}>About</span> us
                            </h4>
                            <p>
                                Food safety attorney Bill Marler saw an opportunity to pull togetherthe resources to provide timely
                                reporting on food safety issues like no other news outlet could.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="footer-bottom">
                <div>
                    <div className="text-center  p-3">
                        <p style={{ color: "green" }}>Copyright &copy;2022 All Rights Reserved Md Kawsar Ali </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
