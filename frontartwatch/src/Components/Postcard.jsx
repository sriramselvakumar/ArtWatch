import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../CSS/Postcard.css";
import http from "../axiosconfig/authaxios";
import def from "../default.json";

class PostCard extends Component {
  state = {
    file: "",
    name: "",
    description: "",
    likes: "",
  };

  componentDidMount() {
    this.getCardDetails();
  }

  getCardDetails = async () => {
    const { id } = this.props;
    const response = await http.get(def.baseURL + "post/" + id);
    const { name, description, filename, likes } = response.data;
    this.setState({
      file: def.uploadsURL + filename,
      name: name,
      description: description,
      likes: likes,
    });
  };

  handleEdit = () => {
    localStorage.setItem("postID", this.props.id);
    window.location = "/edit";
  };
  render() {
    let { file, name, description, likes } = this.state;
    return (
      <Card style={{ width: "301px" }}>
        <Card.Img
          style={{ width: "299px", height: "299px" }}
          variant="top"
          src={file}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="buttons">
            <i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
            <h5 className="likeMargin"> {likes}</h5>
            <i
              onClick={this.handleEdit}
              className="fa fa-pencil-square fa-2x editIcon "
              aria-hidden="true"
            ></i>
            <i
              onClick={() => this.props.onDelete(this.props.id)}
              className="fa fa-trash-o fa-2x deleteIcon"
              aria-hidden="true"
            ></i>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default PostCard;