import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";

import { Component } from "react";

class BookList extends Component {
  state = {
    bookTitle: "",
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
          {this.props.booksArray.map((item) => {
            return <SingleBook book={item} key={item.asin} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
