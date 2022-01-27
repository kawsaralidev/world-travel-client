import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { Id } = useParams();
    console.log(Id);
    const [detail, setDetail] = useState([]);
    console.log(detail);

    useEffect(() => {
        fetch(`http://localhost:5000/addBlog/${Id}`)
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }, [Id]);

    return (
        <div className="container mt-5">
            <div className="row p-1 m-2 text-start rounded border g-3 ">
                <div className="col-lg-6 col-sm-12">
                    <img className="w-75 hidden" src={detail.image} alt="" />
                </div>
                <div className="col-lg-6 text-start col-sm-12">
                    <h2 className="text-primary">{detail.name}</h2>
                    <div className="icon-star">
                        <Rating
                            initialRating={detail.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                    </div>
                    <span>{detail.date}</span>
                    <span>{detail.time}</span>
                    <h4>Expense: {detail.price}</h4>
                    <p>{detail.description}</p>
                    <Button className="service-btn w-25  rounded ">Booking</Button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
