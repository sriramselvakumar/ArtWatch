import React, { useState } from "react";
import RegisterForm from "../Components/RegisterForm";
import Navbar from "../Components/Navbar";
import http from "../axiosconfig/authaxios";
import def from "../default.json";
import Alert from "react-bootstrap/Alert";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../CSS/Register.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showAlert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const onSubmit = async () => {
    console.log(user);
    let response = await http.post(def.registerValidation, user);
    if (response.data !== true) {
      setAlert(true);
      setMessage(response.data);
      return;
    }
    console.log("we are activated");
    response = await http.post(def.registerUser, user);
    localStorage.setItem("token", response.data);
    window.location = "/createprofilepic";
  };
  const setFirstName = (e) => {
    let sample = user;
    sample.firstName = e.target.value;
    setUser(sample);
  };
  const setLastName = (e) => {
    let sample = user;
    sample.lastName = e.target.value;
    setUser(sample);
  };
  const setEmail = (e) => {
    let sample = user;
    sample.email = e.target.value;
    setUser(sample);
  };
  const setPassword = (e) => {
    let sample = user;
    sample.password = e.target.value;
    setUser(sample);
  };
  const changeAlert = () => {
    let sample = alert;
    sample.status = false;
    sample.message = "";
    setAlert(sample);
  };

  const displayAlert = () => {
    if (showAlert) {
      return (
        <div className="alert mx-auto">
          <Alert
            className="mx-auto"
            variant="danger"
            onClose={() => setAlert(false)}
            dismissible
          >
            <Alert.Heading>
              <div className="text-center">{message}</div>
            </Alert.Heading>
          </Alert>
        </div>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <Navbar showLogin={true} />
      <Jumbotron
        fluid
        style={{ "background-color": "#878787", height: "100vh" }}
      >
        {displayAlert()}
        <Card
          bg="dark"
          text="white"
          className="mx-auto"
          style={{ width: "60rem", padding: "5px" }}
        >
          <h1 className="text-center">Join Our Community</h1>
          <div className="form mx-auto">
            <RegisterForm
              submit={onSubmit}
              changeFirstName={setFirstName}
              changeLastName={setLastName}
              changeEmail={setEmail}
              changePassword={setPassword}
            />
          </div>
        </Card>
        <CardDeck className="m-4">
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title className="cardText">
                Post Your Own Artwork
              </Card.Title>
              <Card.Text className="cardText">
                ArtWatch allows you to add photos and descriptions of your art
                show that you can spectate and share with your family and
                friends anytime you please
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title className="cardText">Explore Our Feed</Card.Title>
              <Card.Text className="cardText">
                ArtWatch provides you with a feed of the artworks by our
                community of artists in a deck of cards! Feel free to explore
                and like the artworks created by our artistic users
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title className="cardText">Become A Celebrity</Card.Title>
              <Card.Text className="cardText">
                We encourage our community members to get their art on by giving
                them a Celebrity Badge once they cross 5 followers. What are you
                waiting for? Get Started on becoming a Celebrity today!!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Register;