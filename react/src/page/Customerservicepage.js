import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Customerservicepage.module.css";
import TopContent from "../components/TopContent";
import Customerservice from "../components/Customerservice";

const Customerservicepage = () => {
  return (
    <div>
      <TopContent />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>
          <Col lg={1}></Col>

          <Col lg={8}>
            <div className={styles.cs_text}>상담 센터 </div>
            <Customerservice />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Customerservicepage;
