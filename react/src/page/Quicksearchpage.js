import BottomContent from "../components/BottomContent";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Quicksearch from "../components/Quicksearch";
import TopContent from "../components/TopContent";

const Quicksearchpage = () => {
  return (
    <div>
      <TopContent />

      <Container fluid>
        <Row>
          <Col lg={1}></Col>

          <Col lg={10}>
            <Quicksearch />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>

      <BottomContent />
    </div>
  );
};

export default Quicksearchpage;
