import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import http from "../axiosconfig/authaxios";
import Card from "react-bootstrap/Card";
import def from "../default.json";
class Description extends Component {
  state = {
    description: "",
  };

  onChange = (event) => {
    this.setState({ description: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({ description: event.target.value });
      if (this.state.description !== "") {
        const description = this.state.description;
        await http.put(def.baseURL + "getuser/updatedescription", {
          description: description,
        });
      }
      window.location = "/myprofile";
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { description } = this.state;
    return (
      <React.Fragment>
        <Navbar showLogout={true} />
        <Jumbotron
          fluid
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            height: "100vh",
          }}
        >
          <h1 className="text-center"> Please add a description of yourself</h1>
          <Form.Group
            className="mx-auto"
            style={{ width: "30%" }}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={this.onChange}
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <div className="text-center">
            <Button onClick={this.onSubmit} className="mr-1" variant="success">
              Add Description
            </Button>
            <Link to="/myprofile">
              <Button variant="primary">Skip Step</Button>
            </Link>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Description;
