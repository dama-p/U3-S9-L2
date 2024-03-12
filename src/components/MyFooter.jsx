import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyFooter() {
  return (
    <Container fluid className="footerStyle">
      <Row>
        <Col>
        <h3>Useful links
          </h3>
          </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col className="d-flex flex-column col-3"><a href="">About us</a>
        <a href="">Our team</a>
        <a href="">Our policy</a>
        <a href="">Shipping</a></Col>
        <Col className="d-flex flex-column col-3"><a href="">FAQs</a>
        <a href="">Authors</a>
        <a href="">Our stores</a>
        <a href="">Contact us</a></Col>
       
      </Row>
    </Container>
  );
}

export default MyFooter;