import React, { Component } from "react";
import Navbar from "../Components/LogNavbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import http from "../axiosconfig/authaxios";
import def from "../default.json";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "../CSS/Home.css";
import "../CSS/Create.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class CreatePost extends Component {
  state = {
    id: "",
    filename: "",
    uploaded: false,
    name: "",
    description: "",
  };

  componentDidMount() {
    this.onMount();
  }

  onMount = async () => {
    const post = {
      name: "",
      description: "",
      filename: "Default.png",
      date: new Date(),
    };
    try {
      const response = await http.post(def.baseURL + "post", post);
      this.setState({
        id: response.data._id,
        filename: def.uploadsURL + response.data.filename,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCreate = async (e) => {
    e.preventDefault();
    try {
      window.location = "/myprofile";
      const { name, description, id } = this.state;
      const post = {
        name: name,
        description: description,
      };
      await http.put(def.baseURL + "post/final/" + id, post);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleFile = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("painting", file);
    try {
      let response = await http.put(
        def.baseURL + "post/" + this.state.id,
        formData
      );

      this.setState({ filename: def.uploadsURL + response.data.filename });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar create={true} />
        <Jumbotron style={{ height: "100vh", "background-color": "#878787" }}>
          <Card
            className="mx-auto"
            bg={"dark"}
            text={"white"}
            style={{ width: "800px", height: "540px" }}
          >
            <div className="box">
              <h1 className="text-center">Create Post</h1>
              <Image className="Icon" src={this.state.filename} rounded />
              <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={this.onChangeName} />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={this.onChangeDescription}
                  as="textarea"
                  rows="3"
                />
                <Form.File
                  id="exampleFormControlFile1"
                  label="Choose the picture"
                  onChange={this.handleFile}
                />
              </Form>
              <div className="mt-2">
                <Button onClick={this.handleCreate} variant="success">
                  Create
                </Button>
                <Link to="/myprofile">
                  <Button className="ml-1" variant="danger">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default CreatePost;
