import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Incidentnotificationpage.module.css";
import TopContent from "../components/TopContent";
import Incidentnotification from "../components/Incidentnotification";

const Incidentnotificationpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>

          <Col lg={10}>
            <Incidentnotification />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Incidentnotificationpage;
