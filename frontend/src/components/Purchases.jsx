import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseItem from "./CourseItem";
import { useNavigate, useLocation } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Purchases = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("token") !== "") {
          const response = await axios.get(
            "https://course-app-backend-gold.vercel.app/user/purchasedCourses",
            {
              headers: {
                token: `${localStorage.getItem("token")}`,
              },
            }
          );
          const purchases = response.data.purchasedCourses;
          setPurchasedCourses(purchases);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 className="my-3">Purchases</h2>
      </div>
      <div className="container my-3">
        <div className="row my-3">
          {loading ? (
            <div style={{display: "flex", justifyContent: "center"}}>
              <RingLoader />
            </div>
          ) : purchasedCourses.length !== 0 ? (
            purchasedCourses.map((course) => (
              <CourseItem course={course} key={course._id} />
            ))
          ) : (
            <h5 style={{ textAlign: "center" }}>No purchases yet!</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchases;
