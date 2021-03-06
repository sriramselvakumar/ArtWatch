import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import ArtWatchIcon from "../Images/ArtWatchIcon.png";
import Nav from "react-bootstrap/Nav";
import LoginButton from "../Components/LoginButton";

import LogoutButton from "../Components/LogoutButton";
class NavBar extends Component {
  renderButtons = () => {
    if (this.props.showLogin && !this.props.showLogout) {
      return (
        <React.Fragment>
          <LoginButton />
        </React.Fragment>
      );
    } else if (this.props.showLogout && !this.props.showLogin) {
      return <LogoutButton />;
    } else if (this.props.showLogin && !this.props.showLogout) {
      return <LoginButton />;
    }
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt="ArtWatch Logo"
            src={ArtWatchIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          ArtWatch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">{this.renderButtons()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
