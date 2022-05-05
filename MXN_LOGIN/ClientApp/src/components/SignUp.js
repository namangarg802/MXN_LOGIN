import React, { useState, useEffect } from "react";

import './LOGIN.css';
import { Link } from "react-router-dom";

function Signup() {
   
    const [details, setDetais] = useState({
        fname: "",
        lname: "",
        country: "",
        code:"",
        email: "",
       
        mobileno: "",
    });
    const handleChange = (e) => {
         setDetais({ ...details, [e.target.name]: e.target.value });
        console.log(details);
    };
   /* useEffect(async () => {
      const response=await fetch(
            "https://api.first.org/data/v1/countries",
            {
                method: "GET",
            
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.json)
    }, []);*/
    return (
        <section className="flex Signup bg-down1">

            <div className="modalbox gradient-custom-2 mt-8 bg-down2 flex flex-col justify-center ">
                <h3 className="ml-20">NEW USER</h3>
                <div className="Signupform ml-20">
                    <form action="" >
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            First Name
                        </label>
                        <br />
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={details.fname}
                            onChange={handleChange}
                            required
                            className="shadow  text-black"
                        />
                        <br />
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Last Name
                        </label>
                        <br />
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={details.lname}
                            onChange={handleChange}
                            required
                            className="shadow  text-black"
                        />
                        <br />
                         <label htmlFor="" style={{ fontSize: "24px" }}>
                           Country
                        </label>
                        <br />
                        <select id="country" name="country" className="shadow text-black" value={details.country} onChange={handleChange}>
                            <option value="india">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="China">China</option>
                        </select>
                        <br />
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Mobile No
                        </label>
                        <br />
                        <select id="code" name="code" value={details.code}
                            onChange={handleChange} className="shadow text-black">
                            <option value="91">+91</option>
                            <option value="93">+93</option>
                          
                        </select> <input
                            type="number"
                            id="mobileno"
                            name="mobileno"
                            value={details.mobileno}
                            onChange={handleChange}
                            required
                            className="shadow  text-black"
                        />
                        
                        <label htmlFor="" style={{ fontSize: "24px" }}>
                            Email Id:
                        </label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={details.email}
                            onChange={handleChange}
                            required
                            className="shadow text-black"
                        />
                        <br />
                       

                        <br />
                        <div className="mt-3 ml-40">
                            <Link to="/Detail" className="rounded-full Register   font-bold px-4 py-3 ">
                                REGISTER
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

export default Signup;
