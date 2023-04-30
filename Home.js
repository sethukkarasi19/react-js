import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "react-bootstrap";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1 style={{ fontFamily: "monospace" }}>Welcome to JobPortal</h1>
          <p>
            <h6>
              <b>
                <i>To provide online platform for job seekers to get selected in best organization.</i>
              </b>
            </h6>
          </p>
          <Link to="/login">
            <Button
              renderAs="button"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
            >
              <span>Login</span>
            </Button>
          </Link>
          <hr></hr>
          <h6 className="grey-text text-darken-1">
            Don't have an account? <Link to="/register">Register</Link>
          </h6>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Jumbotron>
    );
  }
}
