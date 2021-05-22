import React,{useState} from "react";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useHistory} from 'react-router'
const Menu = () => {
  const [college, setCollege] = useState("");

  const history=useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push({pathname:'/search',data:{name:college}})
}
   

  return (
    <>
      <Navbar
        id="menu_bar"
        className="navbar sticky-top navbar-expand-lg navbar-dark nav fixed-top "
        style={{ backgroundColor: "#6803A1" }}
        expand="md"
      >
        <Navbar.Brand
          href="#"
          id="nav_brand"
          style={{
            fontSize: "17px",
            paddingTop: "10px",
            fontFamily: "Roboto Slab",
          }}
        >
          Confession
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
                activeStyle={{ color: "white" }}
                activeClassName="menu_active"
                exact
                className="nav-link"
                id="nav_bar"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
                activeStyle={{ color: "white" }}
                activeClassName="menu_active"
                className="nav-link"
                to="/startwriting"
                id="nav_bar"
              >
                StartWriting
              </NavLink>
            </li>
        <li className="nav-item">
        <NavLink
          style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
          activeStyle={{ color: "white" }}
          activeClassName="menu_active"
          className="nav-link"
          id="nav_bar"
          to="/college"
        >
          Profile
        </NavLink>
      </li>  
          </ul>
          {/* <Nav
            className="mr-auto my-2 my-md-0"
            id="nav_bar"
            style={{ fontFamily: "Roboto Slab" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/college">College</Nav.Link>

            <Nav.Link href="/startwriting">StartWriting</Nav.Link>
          </Nav> */}
          <div>
             <form class="d-flex px-1 py-1" onSubmit={(e)=>onSubmit(e)} >
        <input 
        className="form-control me-2"
         type="search"
          placeholder="Search" 
          aria-label="Search"
            name="MovieName"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        <button class="btn btn-outline-primary " type="submit">Search</button>
      </form>
        </div>
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  style={{
                    fontFamily: "Roboto Slab",
                    fontSize: "16px",
                    textDecoration: "underline",
                  }}
                  exact
                  className="nav-link"
                  id="nav_bar"
                  aria-current="page"
                  to="/login"
                >
                  LogIn
                </NavLink>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Menu;
