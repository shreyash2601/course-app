import React, {useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserContext from "../context/user/UserContext";

const CourseItem = ({ course, courseId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);

  const handlePurchase = async () => {
    try {
      if(user){
        const response = await axios.post(
          `http://localhost:5000/user/courses/${courseId}`,
          null,
          {
            headers: {
              "token": `${localStorage.getItem("token")}`
            }
          }
        );
        navigate("/purchases");
        toast.success(response.data.message);
      }
      else{
        navigate("/login");
        toast.warning("Please login to purchase!");
      }
    } catch (error) {
      toast.error("There was an issue in the purchase! Sorry");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="col-md-4 my-2">
        <div className="card rounded-4">
          <img
            src={course.imageUrl}
            className="card-img-top rounded-4"
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {course.title}
            </h5>
            <div className="d-flex">
              <p
                className="card-text me-1"
                style={{ textDecoration: "line-through" }}
              >
                ₹{course.price}
              </p>
              <p className="card-text">{course.price - 1000}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              {location.pathname !== "/purchases" ? <a className="btn btn-primary" onClick={handlePurchase}>
                Purchase
              </a> : <a className="btn btn-success">
                Watch
              </a>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
