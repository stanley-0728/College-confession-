import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#">Confession</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-md-0" style={{ paddingLeft: "10px" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#college">College</Nav.Link>

            {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            <Nav.Link href="#startwriting">StartWriting</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Menu;
