import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const handleLogout = ()=> {
    localStorage.setItem("token", "");
    setUser(null);
    window.location.reload();
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          borderRadius: "100px",
          "--bs-bg-opacity": "0",
          fontWeight: "400",
        }}
      >
        <div
          className="container"
          style={{
            height: "75px",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link className="navbar-brand" to="/" style={{ fontSize: "25px" }}>
              100xTraining
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "60%" }}
          >
            <div className="offcanvas-body">
              <ul
                className="navbar-nav pe-3 flex-grow-1"
                style={{ justifyContent: "flex-end", fontSize: "20px" }}
              >
                <li className="nav-item px-4">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active fw-normal" : ""
                    }`}
                    aria-current="page"
                    to="/"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/courses" ? "active" : ""
                    }`}
                    to="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item px-4">
                  {user ? (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/purchases" ? "active" : ""
                      }`}
                      to="/purchases"
                    >
                      Purchases
                    </Link>
                  ) : (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/purchases" ? "active" : ""
                      }`}
                      to="/login"
                    >
                      Purchases                     
                    </Link>
                  )}
                </li>
                <li className="nav-item px-4">
                  {!user ? (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
                      }`}
                      to="/login"
                    >
                      Login
                    </Link>
                  ) : (
                    <Link
                      className={`nav-link`}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  )}
                </li>
                <li className="nav-item px-4">
                  {!user ? (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/register" ? "active" : ""
                      }`}
                      to="/register"
                    >
                      Register
                    </Link>
                  ) : (
                    <Link
                      className={`nav-link`}
                    ></Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
