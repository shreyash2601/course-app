import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { courseId } = useParams();

  if (!course) {
    return <div style={{ marginTop: "50px", textAlign: "center" }}>Course not found</div>;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: "0 1 50%" }}>
          <img src={course.imageUrl} style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} alt={course.title} />
        </div>
        <div style={{ flex: "0 1 50%", marginLeft: "20px" }}>
          <h2 style={{ marginBottom: "20px" }}>{course.title} Details</h2>
          <p style={{ marginBottom: "10px" }}><strong>Title:</strong> {course.title}</p>
          <p style={{ marginBottom: "10px" }}><strong>Price:</strong> ₹{course.price}</p>
          <p style={{ marginBottom: "20px" }}><strong>Description:</strong> {course.description}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;