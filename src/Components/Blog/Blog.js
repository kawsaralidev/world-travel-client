import React from "react";
import "./Blog.css";
import { Col, Row } from "react-bootstrap";

const Blog = ({ blog }) => {
    const { place, image, date } = blog;
    return (
        <Row className="blog_card py-2 m-2">
            <Col xs={4} md={5} className="recent_img">
                <img style={{ height: "80px", width: "90px" }} src={image} alt="" />
            </Col>
            <Col xs={8} md={7} className=" pt-2">
                <h6>{place}</h6>
                <span>{date}</span>
            </Col>
        </Row>
    );
};

export default Blog;
