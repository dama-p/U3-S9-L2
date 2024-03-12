import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import books from "../data/horror.json";

function AllTheBooks() {
  return (
    <Container className="mt-5">
      <Row className="align-items-stretch"> 
        {books.map((book) => {
          return (
            <Col className="col-6 col-md-4 col-lg-3 col-xl-2 gy-3 d-flex" key={book.asin}>
              <Card id="cardStyle">
                <Card.Img variant="top" src={book.img} style={{ height: '18rem' }} />
                <Card.Body className="d-flex flex-column cardbodyStyle">
                  <p className="cardTitle d-flex flex-grow-1">{book.title}</p>
                  <p className="d-flex justify-content-center cardDetails">
                     {book.price}€ • {book.category}
                  </p>
                  <Button variant="warning" className="d-flex mx-auto mt-auto">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
