import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Icon from "../../common/Icon";
import { initialUser } from "../../constants/userConstants";

const Register = ({ onSubmit, oAuth = false, update = false, preUser=initialUser }) => {
  const [userDetails, setUser] = useState({ ...initialUser, ...preUser});

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    //Verify if the password and confirm password are the same
    if (e.target.name === "cPassword") {
      if (e.target.value !== userDetails.password) {
        setError("Password and Confirm Password must be the same");
      } else {
        setError("");
      }
    }
    //Verify if the email is valid
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (e.target.name === "email") {
      if (!emailRegex.test(e.target.value)) {
        setError("Email is not valid");
      } else {
        setError("");
      }
    }
    setUser({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!error) {
      await onSubmit(userDetails);
    }
  };

  return (
    <>
      {oAuth && (
        <>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
          </div>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto">
              <MDBBtn>
                <Icon fa type="brands" icon="facebook" color="white" />
              </MDBBtn>
            </MDBCol>
            <MDBCol size="auto">
              <MDBBtn style={{ backgroundColor: "#ea4335" }}>
                <Icon fa type="brands" icon="google" color="white" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <div className="text-center mb-3">
            <p>or:</p>
          </div>
        </>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <MDBInput
        name="firstName"
        value={userDetails.firstName}
        wrapperClass="mb-4"
        label="Firstname"
        id="firstName-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="lastName"
        value={userDetails.lastName}
        wrapperClass="mb-4"
        label="Lastname"
        id="lastName-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="email"
        value={userDetails.email}
        className={`${update && "disabled"}`}
        disabled={update}
        wrapperClass="mb-4"
        label="Email"
        id="email-register"
        type="email"
        onChange={handleChange}
      />
      <MDBInput
        name="password"
        wrapperClass="mb-4"
        label="Password"
        id="password-register"
        type="password"
        onChange={handleChange}
      />
      <MDBInput
        name="cPassword"
        wrapperClass="mb-4"
        label="Confirm Password"
        id="cPassword-register"
        type="password"
        onChange={handleChange}
      />
      <MDBInput
        name="dateOfBirth"
        value={userDetails.dateOfBirth}
        wrapperClass="mb-4"
        label="Date of Birth"
        id="dateOfBirth-register"
        type="date"
        onChange={handleChange}
      />
      <MDBInput
        name="phone"
        value={userDetails.phone}
        wrapperClass="mb-4"
        label="Phone"
        id="phpne-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="address"
        value={userDetails.address}
        wrapperClass="mb-4"
        label="Address"
        id="address-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="city"
        value={userDetails.city}
        wrapperClass="mb-4"
        label="City"
        id="city-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="state"
        value={userDetails.state}
        wrapperClass="mb-4"
        label="State"
        id="state-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="zip"
        value={userDetails.zip}
        wrapperClass="mb-4"
        label="Zip"
        id="zip-register"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="country"
        value={userDetails.country}
        wrapperClass="mb-4"
        label="Country"
        id="country-register"
        type="text"
        onChange={handleChange}
      />

      <MDBRow className="d-flex  justify-content-between align-items-center mb-4">
        <MDBCol size="auto">Gender</MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor:
                userDetails.gender === "male" ? "#2196F3" : "lightgray",
            }}
            name="gender"
            value="male"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="mars" color="white" />
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor:
                userDetails.gender === "female" ? "#FF1744" : "lightgray",
            }}
            name="gender"
            value="female"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="venus" color="white" />
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor:
                userDetails.gender === "transgender" ? "#FCC419" : "lightgray",
            }}
            name="gender"
            value="transgender"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="transgender" color="white" />
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <div className="d-flex justify-content-center mb-4">
        <MDBCheckbox
          name="flexCheck"
          id="flexCheckDefault"
          label="I have read and agree to the terms"
        />
      </div>

      <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>
        {update ? "Update" :"Sign up"}
      </MDBBtn>
    </>
  );
};

export default Register;
