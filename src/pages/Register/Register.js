import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  console.log(inputdata);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  // Status Options
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // set Input Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit User Data
  const SubmitUserData = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputdata;

    if (fname === "") {
      toast.error("First Name is required");
    } else if (lname === "") {
      toast.error("Last Name is required");
    } else if (email === "") {
      toast.error("Email is Required");
    } else if (!email.includes("@")) {
      toast.error("Enter valid Email");
    } else if (mobile === "") {
      toast.error("Mobile Number is required");
    } else if (mobile.length > 10) {
      toast.error("Enter valid Mobile Number!");
    } else if (gender === "") {
      toast.error("Gender is Required");
    } else if (status === "") {
      toast.error("Status Is Required");
    } else if (image === "") {
      toast.error("Profile is Required");
    } else if (location === "") {
      toast.error("Location is Required");
    } else {
      toast.success("Registration Submitted Successfully");
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img src={preview ? preview : "/woman.jpg"} alt="img" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  onChange={setInputValue}
                  placeholder="Enter First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  onChange={setInputValue}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={setInputValue}
                  placeholder="Enter Email Address"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  onChange={setInputValue}
                  placeholder="Enter Mobile"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Select Your Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Select your Status</Form.Label>
                <Select options={options} onChange={setStatusValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formFile">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type="file"
                  name="user_profile"
                  onChange={setProfile}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasic">
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={setInputValue}
                  placeholder="Enter Location"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={SubmitUserData}>
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default Register;
