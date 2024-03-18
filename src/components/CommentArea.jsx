import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentArea extends Component {
  state = {
    bookComments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = () => {
    fetch(URL + this.props.asin, {
      method: "GET",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTdjNTRjNTllYzAwMTk5MGQ3M2IiLCJpYXQiOjE3MTA3NzIxOTcsImV4cCI6MTcxMTk4MTc5N30.kCohxILxrs-RND89SG7g6s5nmtlkExQuYG7vQHss1nM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dati");
        }
      })

      .then((comments) => {
        /*  console.log("COMMENTS", comments); */
        this.setState({
          bookComments: comments,
          isLoading: false,
        });
      })

      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <ListGroup>
        {this.state.bookComments.map((comment) => {
          return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>;
        })}
      </ListGroup>
    );
  }
}

export default CommentArea;
