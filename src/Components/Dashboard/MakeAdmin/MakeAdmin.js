import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    // handle make admin
    const handleMakeAdmin = (e) => {
        const user = { email };

        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    alert("admin make successfull");
                }
            });
        e.preventDefault();
    };
    return (
        <div className="mt-5 pt-5">
            {/* make admin title */}
            <h2>MAKE AN ADMIN</h2>

            {/* input form for making admin */}
            <form onSubmit={handleMakeAdmin} className="mt-5">
                <label className="w-50" style={{ textAlign: "left" }} htmlFor="email">
                    New Admin Email
                </label>
                <InputGroup className="mb-3 pt-1 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter new admin email"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        onBlur={handleOnBlur}
                        type="email"
                        className="py-2"
                    />
                </InputGroup>

                <Button className="btn_dashboard mb-5 w-50 py-2 mt-2" type="submit">
                    Make Admin
                </Button>
                <br />
            </form>
        </div>
    );
};

export default MakeAdmin;
