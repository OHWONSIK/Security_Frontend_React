import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Commonpage.module.css";
import TopContent from "../components/TopContent";
import Customerservice_detail from "../components/Customerservice_detail";
import Customerservice from "../components/Customerservice";

const Customerservice_detailpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>

          <Col lg={10}>
            <Customerservice_detail />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Customerservice_detailpage;
