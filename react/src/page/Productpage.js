import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import TopContent from "../components/TopContent";

const Productpage = () => {
  return (
    <div>
      <TopContent />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>
          <Col lg={10}>
            <Product />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Productpage;
