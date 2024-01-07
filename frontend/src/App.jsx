import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseState from "./context/courses/CourseState";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Purchases from "./components/Purchases";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserState from "./context/user/UserState";

function App() {
  return (
    <>
      <UserState>
        <CourseState>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <ToastContainer />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Courses />} path="/courses" />
                <Route element={<Purchases />} path="/purchases" />
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </CourseState>
      </UserState>
    </>
  );
}

export default App;