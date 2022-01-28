import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div>
                <Nav.Link onClick={handleShow} className="nav_icon_style" href="#deets">
                    Top Spots
                </Nav.Link>
                <Offcanvas show={show} className="sidebar-container" onHide={handleClose} {...props}>
                    <Offcanvas.Header className="sidebar-title" closeButton>
                        <Offcanvas.Title>Top Spots</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="sidebar-style">
                            <p>Turkey</p>
                            <p>Maldives</p>
                            <p>England</p>
                            <p>Bangladesh</p>
                            <p>Switzerland</p>
                            <p>Dubai</p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        );
    }

    return (
        <>
            {["end"].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
};

export default Sidebar;
