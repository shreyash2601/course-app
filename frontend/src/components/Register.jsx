import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://course-app-backend-gold.vercel.app/user/signup",
        data
      );
      navigate('/login');  
      toast.success("User registered successfully! Please login to continue.");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Email already exists!");
      } else {
        toast.error("User registration faild!");
      }
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="my-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* <!-- Firstname input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control form-control-lg"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
                </div>
                {/* <!-- Lastname input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control form-control-lg"
                    placeholder="Enter last name"
                    onChange={handleChange}
                  />
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-md"
                    style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
