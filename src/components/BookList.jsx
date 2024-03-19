import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { Component } from "react";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = function (props) {
  /*   state = {
    bookTitle: "",
    asin: "",
  }; */

  const [bookTitle, setBookTitle] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = (newAsin) => {
    /*     this.setState({
      asin: newAsin,
    }); */
    setAsin(newAsin);
  };
  {
    return (
      <Container className="mt-5">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search your book here"
            onChange={(e) => {
              /*   this.setState({
                bookTitle: e.target.value,
              }); */
              setBookTitle(e.target.value);
            }}
          />
        </Form>
        <Row className="align-items-stretch">
          <Col className="col-8">
            <Row>
              {props.booksArray.map((item) => {
                return <SingleBook book={item} key={item.asin} changeAsin={changeAsin} currentlyActiveAsin={asin} />;
              })}
            </Row>
          </Col>

          <Col className="col-4">
            <h2 className="text-danger mt-3">Comments:</h2>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default BookList;
