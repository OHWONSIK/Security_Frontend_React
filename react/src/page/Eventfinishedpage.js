import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Eventfinished from "../components/Eventfinished";
import styles from "../css/Eventfinishedpage.module.css";
import TopContent from "../components/TopContent";

const Eventfinishedpage = () => {
  return (
    <div>
      <Container fluid>
        <TopContent />
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>
          <Col lg={1}></Col>

          <Col lg={8}>
            <div className={styles.eventfinished_text}>종료된 이벤트</div>
            <Eventfinished />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>

      <BottomContent />
    </div>
  );
};

export default Eventfinishedpage;
