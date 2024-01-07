import CourseContext from "../context/courses/CourseContext";
import React from "react";
import CourseItem from "./CourseItem";
import { useContext } from "react";

const Courses = () => {
  const { courses, setCourses } = useContext(CourseContext);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 className="my-3">Courses</h2>
      </div>
      <div className="container my-3">
        <div className="row my-3">
          {courses.map((course) => {
            return <CourseItem course={course} key={course._id} courseId={course._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
