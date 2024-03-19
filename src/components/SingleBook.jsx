import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = function ({ book, changeAsin, currentlyActiveAsin }) {
  {
    return (
      <>
        <Col className="col-6 col-md-4 col-lg-3 gy-3 d-flex">
          <Card
            style={{
              outline: book.asin === currentlyActiveAsin ? "2px solid red" : "none",
            }}
            id="cardStyle"
          >
            <Card.Img variant="top" src={book.img} style={{ height: "18rem" }} />
            <Card.Body className="d-flex flex-column cardbodyStyle">
              <p className="cardTitle d-flex flex-grow-1">{book.title}</p>
              <p className="d-flex justify-content-center cardDetails">
                {book.price}€ • {book.category}
              </p>

              <Button
                variant="warning"
                className="d-flex mx-auto mt-auto"
                onClick={() => {
                  changeAsin(book.asin);
                }}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
};

export default SingleBook;
