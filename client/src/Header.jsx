import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-dark nav fixed-top "
          style={{ backgroundColor: "#6803A1" }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand " to="/">
              Confession
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="container collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    style={{}}
                    activeStyle={{ color: "white" }}
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    id="menu"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{}}
                    activeStyle={{ color: "white" }}
                    activeClassName="menu_active"
                    className="nav-link"
                    id="menu"
                    to="/college"
                  >
                    College
                  </NavLink>
                </li>

                {/* <li className="nav-item">
                  <NavLink
                    // activeClassName="menu_active"
                    className="nav-link disabled"
                    id="menu"
                    to="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    CollegeInfo
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    style={{}}
                    activeStyle={{ color: "white" }}
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/startwriting"
                    id="menu"
                  >
                    StartWriting
                  </NavLink>
                </li>
              </ul>
              {/* <li className="nav-item" id="write">
                <NavLink className="nav-link" href="#" id="writehere">
                  StartWriting
                </NavLink>
              </li> */}

              <form className="d-flex" id="searchform">
                <input
                  id="sinput"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  id="search"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
