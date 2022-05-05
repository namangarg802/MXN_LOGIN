import React, { useState, useEffect } from "react";

import './LOGIN.css';
import { Link } from "react-router-dom";


function Detail() {
    
    useEffect(async () => {
        const response = await fetch(
            "https://api.first.org/data/v1/countries",
            {
                method: "GET",
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.json)
    }, []);
    return (
        <section className="flex detail bg-down1 ">
          

            <div className="detailmodalbox mt-8 bg-down2 gradient-custom-2 flex flex-col justify-center ">
                <h3 className="ml-20">LOGIN DETAILS</h3>
                <div className="Signupform ml-20">
                    <form action="" >
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                           USER NAME
                        </label>
                        <br />
                        <input
                            type="text"
                            id="usrname"
                            name="usrname"

                            required
                            className="shadow  text-black"
                        />
                        <br />
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Enter Your Password:
                        </label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            name="password"

                            required
                            className="shadow  text-black"
                        />
                      
                        <br />
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Confirm Your Password:
                        </label>
                        <br />
                        <input
                            type="password"
                            id="cnfpassword"
                            name="cnfpassword"

                            required
                            className="shadow  text-black"
                        />


                        <br />
                        <div className="mt-3 ml-40">
                            <Link to="/Details" className="rounded-full Register   font-bold px-4 py-3 ">
                                Create Login
                            </Link>
                        </div>
                    </form>
                </div>
                {/*<p className="ml-40 mb-20">
                    Already have an account? <Link to="Login">Login</Link>
                </p>*/}
            </div>
        </section>
    );
}

export default Detail;
