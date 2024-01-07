import CourseContext from "../../context/courses/CourseContext";
import React from "react";
import CourseItem from "../CourseItem";
import { useContext } from "react";

const Featured = () => {
  const { courses, setCourses } = useContext(CourseContext);

  const featuredCourses = courses ? courses.slice(0, 3) : [];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2 className="my-3">Featured</h2>
      </div>
      <div className="container my-3">
        <div className="row my-3">
          {featuredCourses.map((course) => (
            <CourseItem course={course} key={course._id} />
          ))}
        </div>
      </div>
    </>
  );
};


export default Featured;
