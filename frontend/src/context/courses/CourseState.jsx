import { useState, useEffect } from "react";
import CourseContext from "./CourseContext";
import axios from "axios";

const CourseState = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://course-app-backend-gold.vercel.app/user/courses");
        setCourses(response.data.course);
        
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
