import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Card from "./Card";
const Login = () => {
  const navigate=useNavigate()
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    // const [user,setUser]=useState();
    
    const handelSubmit=(e)=>{
e.preventDefault();
fetch("http://localhost:8080/user/login",{
  method:"POST",
  headers:{
    "Content-type":"application/json",
    Accept:"application/json",
  },
  body:JSON.stringify({email,password})
}).then(res=>res.json())
.then((data)=>{
    localStorage.setItem("token",data.token);
    console.log(data.token)
  if(data){
navigate("/techer")

  }
})
    }
    return (
        <>
        
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                


                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"  onChange={(e)=>setEmail(e.target.value)}/>
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handelSubmit}>Login</button>
                                   <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/"
                                        className="link-danger" >Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                </div>
            </section>
        </>
    )
}
export default Login;