import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import OngoingEvent from "../components/OngoingEvent";
import { Row, Col } from "react-bootstrap";
import styles from "../css/OngoingEventpage.module.css";
import TopContent from "../components/TopContent";

const OngoingEventpage = () => {
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
            <div className={styles.og_text}>이벤트</div>
            <OngoingEvent />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default OngoingEventpage;
