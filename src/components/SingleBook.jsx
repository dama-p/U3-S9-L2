import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col className="col-6 col-md-4 col-lg-3 col-xl-2 gy-3 d-flex">
          <Card
            style={{
              outline: this.state.selected === true ? "2px solid red" : "none",
            }}
            id="cardStyle"
          >
            <Card.Img variant="top" src={this.props.book.img} style={{ height: "18rem" }} />
            <Card.Body className="d-flex flex-column cardbodyStyle">
              <p className="cardTitle d-flex flex-grow-1">{this.props.book.title}</p>
              <p className="d-flex justify-content-center cardDetails">
                {this.props.book.price}€ • {this.props.book.category}
              </p>

              {this.state.selected === true && (
                <div>
                  <CommentArea />
                </div>
              )}
              <Button
                variant="warning"
                className="d-flex mx-auto mt-auto"
                onClick={() => {
                  this.setState({ selected: !this.state.selected });
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
}

export default SingleBook;
