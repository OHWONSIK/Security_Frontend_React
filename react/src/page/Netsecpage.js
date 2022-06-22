import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Netsec from "../components/Netsec";
import styles from "../css/Netsecpage.module.css";
import TopContent from "../components/TopContent";

const Netsecpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>
          <Col lg={1}></Col>

          <Col lg={8}>
            <div className={styles.netsec_text}>보안 공지 </div>
            <Netsec />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Netsecpage;
