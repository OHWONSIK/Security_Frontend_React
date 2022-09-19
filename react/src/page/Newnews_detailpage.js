import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Commonpage.module.css";
import TopContent from "../components/TopContent";
import Newnews_detail from "../components/Newnews_detail";

const Newnews_detailpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>

          <Col lg={10}>
            <Newnews_detail />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Newnews_detailpage;
