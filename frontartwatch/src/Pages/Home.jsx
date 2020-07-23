import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArtWatchIcon from "../Images/ArtWatchIcon.png";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar showLogin={true} showRegister={true} showLogout={false} />
      <Jumbotron
        fluid
        style={{ "background-color": "#878787", height: "100vh" }}
      >
        <Image className="Icon" src={ArtWatchIcon} />
        <Card
          bg="dark"
          text="white"
          style={{ width: "38rem", padding: "5px" }}
          className="text-center mb-4 mx-auto mt-3"
        >
          <Card.Title>
            <h1 className="Headings">Welcome To ArtWatch</h1>
          </Card.Title>
        </Card>
        <CardDeck style={{ "margin-left": "15px", "margin-right": "15px" }}>
          <Card
            bg="dark"
            text="white"
            className="ml-2"
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
              <div className="text-center">
                <Link to="/register">
                  <Button variant="success">Post Your Art</Button>
                </Link>
              </div>
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
              <div className="text-center">
                <Link to="/register">
                  <Button variant="success">Explore ArtWork Feed</Button>
                </Link>
              </div>
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
              <div className="text-center">
                <Link to="/register">
                  <Button variant="success">Become A Celebrity</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
    </React.Fragment>
  );
};

export default HomePage;
