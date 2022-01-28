import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import Blog from "../Blog/Blog";
import BlogPage from "../BlogPage/BlogPage";
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;
    const navigate = useNavigate();

    const handleBlogDetails = () => {
        navigate("/blogDetails");
    };
    console.log(blogs);
    useEffect(() => {
        fetch(`https://damp-wildwood-60851.herokuapp.com/addBlog?page=${page}&&size=${size}`)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.blog);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="blogs_container pt-5 pt-4">
                <Container>
                    <div className="section_title fs-1 mb-5">
                        <span style={{ color: "red", borderBottom: "2px solid red" }}>Our </span>Blogs
                        <span style={{ color: "red" }}>...</span>
                    </div>
                    <div className="row">
                        <Col xs md={9} sm={12}>
                            <div className="me-3">
                                {blogs.map((blog) => (
                                    <BlogPage key={blog._id} blog={blog}></BlogPage>
                                ))}
                            </div>
                            <div className="pagination">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <Button className={number === page ? "selected" : ""} key={number} onClick={() => setPage(number)}>
                                        {number + 1}
                                    </Button>
                                ))}
                            </div>
                        </Col>

                        <Col xs md={3}>
                            <div>
                                <h5 className="recent_box">
                                    Recent <span style={{ color: "red" }}>Article</span>
                                </h5>
                            </div>
                            <Row className="g-3">
                                {blogs.slice(0, 15).map((blog) => (
                                    <Blog key={blog._id} blog={blog}></Blog>
                                ))}
                            </Row>
                        </Col>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blogs;
