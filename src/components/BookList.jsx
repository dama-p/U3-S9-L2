import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    bookTitle: "",
    asin: "",
  };

  changeAsin = (newAsin) => {
    this.setState({
      asin: newAsin,
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search your book here"
            onChange={(e) => {
              this.setState({
                bookTitle: e.target.value,
              });
            }}
          />
        </Form>
        <Row className="align-items-stretch">
          <Col className="col-8">

            <Row>
            {this.props.booksArray.map((item) => {
              return (
               
                <SingleBook
                  book={item}
                  key={item.asin}
                  changeAsin={this.changeAsin}
                  currentlyActiveAsin={this.state.asin}
                />
              );
            })}
          </Row>
          </Col>

          <Col className="col-4">
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
