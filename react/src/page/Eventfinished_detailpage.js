import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Commonpage.module.css";
import TopContent from "../components/TopContent";
import Eventfinished_detail from "../components/Eventfinished_detail";
import Eventfinished from "../components/Eventfinished";

const Eventfinished_detailpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>

          <Col lg={10}>
            <Eventfinished_detail />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Eventfinished_detailpage;
