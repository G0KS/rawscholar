<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> master
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import StudyIllustration from "../../assets/StudyIllustration.svg";
import "./Signup.css";
import { useFrappeCreateDoc } from "frappe-react-sdk";

<<<<<<< HEAD
function Signup({ show }) {
  show(false);

  const [userData, setUserData] = useState({
    name1: "",
    email: "",
    phone: "",
    password: "",
  });

  const { createDoc } = useFrappeCreateDoc();

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const signin = () => {
=======
function Signup() {
  const { createDoc } = useFrappeCreateDoc();
  const signin = () => {
    console.log("sas");
>>>>>>> master
    createDoc("Student", {
      name1: "Test",
    })
      .then((doc) => console.log(doc))
      .catch((error) => console.error(error));
  };
<<<<<<< HEAD

=======
>>>>>>> master
  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <div style={{ height: "700px" }}>
        <img
          className="p-1  d-none d-sm-block"
          src={StudyIllustration}
<<<<<<< HEAD
          alt="Study"
          style={{ height: "100%" }}
        />
      </div>
      <form className="formContainer shadow d-flex flex-column align-items-center justify-content-between gap-2">
=======
          alt=""
          style={{ height: "100%" }}
        />
      </div>
      <form className="formContainer shadow d-flex flex-column align-items-center justify-content-between">
>>>>>>> master
        <img className="mb-2" src={Logo} alt="" width={140} />
        <div className="form-group">
          <p className="m-0">
            Full Name<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
<<<<<<< HEAD
            name="name1"
            onChange={(e) => getUserData(e)}
            placeholder="Enter Full Name"
=======
            placeholder="Enter Email"
>>>>>>> master
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group ">
          <p className="m-0">
            Email<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
<<<<<<< HEAD
            name="email"
            onChange={(e) => getUserData(e)}
=======
>>>>>>> master
            placeholder="Enter Email"
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group ">
          <p className="m-0">
            Phone No<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
<<<<<<< HEAD
            name="phone"
            onChange={(e) => getUserData(e)}
            placeholder="Enter Phone Number"
=======
            placeholder="Enter Email"
>>>>>>> master
            style={{ fontSize: "15px" }}
          />
        </div>

        <div className="form-group ">
          <p className="m-0">
            Password<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
<<<<<<< HEAD
            type="password"
            name="password"
            onChange={(e) => getUserData(e)}
=======
            type="text"
>>>>>>> master
            placeholder="Enter Password"
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group mb-2">
          <p className="m-0">
            Confirm Password<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
<<<<<<< HEAD
            type="password"
            name="confirmPassword"
=======
            type="text"
>>>>>>> master
            placeholder="Enter Password"
            style={{ fontSize: "15px" }}
          />
        </div>
        <Button
          className="mt-2  w-100 "
          style={{ fontSize: "13px" }}
          onClick={signin}
        >
          Signup
        </Button>
        <p className=" mt-5" style={{ fontSize: "13px" }}>
          Already have an account?
          <Link to={"/login"} style={{ color: "blue", fontSize: "13px" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
