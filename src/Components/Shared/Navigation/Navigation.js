import React from "react";
import "./Navigation.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";

const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <div className="nav-container">
                <Navbar variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand to="#home">
                            <Navbar as={Link} className="fw-bold text-decoration-none fs-5" to="/home">
                                World-<span style={{ color: "red" }}>Travel</span>
                            </Navbar>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="main_nav-style" as={Link} to="/home">
                                Home
                            </Nav.Link>

                            <Nav.Link className="main_nav-style" as={Link} to="/blog">
                                Blogs
                            </Nav.Link>
                            <Nav.Link className="main_nav-style" as={Link} to="">
                                <Sidebar></Sidebar>
                            </Nav.Link>
                            {user.email ? (
                                <Nav.Link className="main_nav-style" as={Link} to="/dashboard">
                                    Dashboard
                                </Nav.Link>
                            ) : (
                                <Nav.Link className="main_nav-style" as={Link} to="/dashboard"></Nav.Link>
                            )}

                            <Nav.Link className="account" as={Link} eventKey={2} to="/account">
                                <NavDropdown style={{ marginLeft: "1rem", color: "black" }} title="My Account" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/account"></NavDropdown.Item>
                                    <NavDropdown.Item>
                                        {user.email ? (
                                            <Button onClick={logOut} className="btn_dashboard ">
                                                Log Out
                                            </Button>
                                        ) : (
                                            <div>
                                                <Link to="/login">
                                                    <Button className="btn_dashboard mb-2" color="inherit">
                                                        Login
                                                    </Button>
                                                </Link>
                                                <br />
                                                <Link to="/register">
                                                    <Button className="btn_dashboard" color="inherit">
                                                        Register
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                            <Nav className="nav-contact me-4 " style={{ marginBottom: "11px" }}>
                                <div>
                                    <img style={{ width: "50px" }} className="rounded-circle me-3" src={user.photoURL} alt="" />
                                    <span style={{ color: "tomato" }}>{user.displayName}</span>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;
