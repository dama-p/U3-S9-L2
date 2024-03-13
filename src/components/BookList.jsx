import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container className="mt-5">
      <Row className="align-items-stretch">
        {props.booksArray.map((item) => {
          return <SingleBook book={item} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;


