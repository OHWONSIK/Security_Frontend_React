import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Winnerannouncement from "../components/Winnerannouncement";
import styles from "../css/Winnerannouncementpage.module.css";
import TopContent from "../components/TopContent";

const Winnerannouncementpage = () => {
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
            <div className={styles.winnerannouncement_text}>당첨자 발표</div>
            <Winnerannouncement />
          </Col>

          <Col lg={1}></Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Winnerannouncementpage;
