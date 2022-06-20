import BottomContent from "../components/BottomContent";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Bankstatement from "../components/Bankstatement";
import styles from "../css/Bankstatementpage.module.css";
import TopContent from "../components/TopContent";

const Bankstatementpage = () => {
  return (
    <div>
      {/* <TopContent /> */}

      <Container fluid>
        <Row>
          <Col lg={1}></Col>

          <Col lg={10}>
            <Bankstatement />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>

      <BottomContent />
    </div>
  );
};

export default Bankstatementpage;
