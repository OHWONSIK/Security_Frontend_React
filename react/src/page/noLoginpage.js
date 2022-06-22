import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import NoLogin from "../components/noLogin";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const NoLoginpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col>
            <NoLogin />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default NoLoginpage;
