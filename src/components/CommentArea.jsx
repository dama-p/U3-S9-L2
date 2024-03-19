import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { useEffect } from "react";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const CommentArea = function ({ asin }) {
  /*   state = {
    bookComments: [],
    isLoading: true,
    isError: false,
  }; */

  const [bookComments, setBookComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = () => {
    fetch(URL + asin, {
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
        /*      this.setState({
          bookComments: comments,
          isLoading: false,
        }); */
        setBookComments(comments);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log("ERRORE", error);
        /*  this.setState({
          isLoading: false,
          isError: true,
        }); */
        setIsLoading(false);
        setIsError(true);
      });
  };

  /*   componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  } */

  useEffect(() => {
    fetchComments();
  }, [asin]);
  {
    return (
      <ListGroup>
        {bookComments.map((comment) => {
          return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>;
        })}
      </ListGroup>
    );
  }
};

export default CommentArea;
