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
        fetch(`https://damp-wildwood-60851.herokuapp.com/addBlog/${Id}`)
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
                    <h2 className="text-primary">{detail.place}</h2>
                    <div className="icon-star">
                        <Rating
                            initialRating={detail.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                    </div>
                    <div className="d-flex justify-content-between align-items-center me-5">
                        <span>{detail.date}</span>
                        <span>{detail.time}</span>
                    </div>
                    <h5 style={{ color: "tomato" }}>Expense: ${detail.expense}</h5>
                    <p>{detail.description}</p>
                    <Link to="/home">
                        <Button className="btn_dashboard w-25  rounded ">home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
