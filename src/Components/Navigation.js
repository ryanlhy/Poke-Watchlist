import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Zard Slabs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/watchlist">Watch List</Nav.Link>
            <Link to="/watchlist">
              <Nav>watch List Link</Nav>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    watchList: state.watchList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // no dispatch needed
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// import Container from "react-bootstrap/Container";

// function BrandExample() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="/logo.svg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{" "}
//             React Bootstrap
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default BrandExample;
