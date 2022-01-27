import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BlogPage = ({ blog }) => {
    const { image, place, date, rating, expense, time, description } = blog;
    return (
        <div className=" col-lg-12 blog-container  col-sm-12">
            <div className="row   col-sm-12 ">
                <div className="col-lg-6">
                    <img className="blog-image" src={image} alt="" />
                </div>

                <div className="col-lg-6  text-start">
                    <div className="d-flex justify-content-between align-items-center">
                        <p style={{ color: "rgb(31, 75, 73)", marginTop: "7px", fontSize: "22px" }}>{place}</p>
                        <span>{date}</span>
                    </div>
                    <div className="icon-star">
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span style={{ color: "tomato" }}>${expense}</span>
                        <span>{time}</span>
                    </div>

                    <p>{description.slice(0, 150)}</p>
                    <div>
                        <Link to={`/blogDetails/${blog._id}`}>
                            <Button className="btn_details ">Details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
