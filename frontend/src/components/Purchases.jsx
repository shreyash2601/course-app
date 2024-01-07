import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseItem from "./CourseItem";
import { useNavigate, useLocation } from "react-router-dom";

const Purchases = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") !== "") {
      const getPurchasedCourses = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/user/purchasedCourses",
            {
              headers: {
                token: `${localStorage.getItem("token")}`,
              },
            }
          );
          const purchases = response.data.purchasedCourses;
          setPurchasedCourses(purchases);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };
      getPurchasedCourses();
    }
    else{
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 className="my-3">Purchases</h2>
      </div>
      <div className="container my-3">
        <div className="row my-3">
          {purchasedCourses.length !== 0 ? (
            purchasedCourses.map((course) => {
              return <CourseItem course={course} key={course._id} />;
            })
          ) : (
            <h5 style={{ textAlign: "center" }}>No purchases yet!</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchases;
