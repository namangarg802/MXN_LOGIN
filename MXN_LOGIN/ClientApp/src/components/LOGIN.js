import React, { useState, useEffect } from 'react'

import './LOGIN.css';
import { Link } from "react-router-dom";
function LOGIN() {
    
    
    const [details, setDetais] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setDetais({ ...details, [e.target.name]: e.target.value });
        
         console.log(details);
    };
    return (

        <section className="flex Login bg-down1  ">
          
            <div className="loginmodalbox gradient-custom-2 mt-10 bg-down2 flex flex-col  ">
                <h3>Enter Your Login Credentials</h3>
                <div className="form">
                    <form action="" >
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Enter your email address:
                        </label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={details.email}
                            onChange={handleChange}
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
                            value={details.password}
                            onChange={handleChange}
                            required
                            className="shadow text-black"
                        />

                        <br />
                        <br />
                        
                        <button className="rounded-full   font-bold px-4 py-3 ml-40 ">
                            Log In
                        </button>
                    </form>
                    <p className="ml-40 ">
                        Don't have an account? <Link to="/Signup">Signup</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LOGIN