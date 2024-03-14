import { Component } from "react";

const URL = "https://striveschool-api.herokuapp.com/api/comments/{asin}"
class CommentArea extends Component {
  state = {
    bookComments: [],
    isLoading: true,
    isError: false,
  };


  fetchComments = () => {
    fetch(`URL`, {
      method: "GET",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTdjNTRjNTllYzAwMTk5MGQ3M2IiLCJpYXQiOjE3MDkyODczNjUsImV4cCI6MTcxMDQ5Njk2NX0.6yZekPUmgVzWjCE3blgy2qGt-SBVB9cffFDDPt4XVW8",
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
    return <p>Prova</p>;
  }
}

export default CommentArea;
