import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import PasswordChangeComplete from "../components/PasswordChangeComplete";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const PasswordChangeCompletepage = () => {
  return (
    <div>
      <TopContent />
      <Container fluid>
        <Row>
          <Col>
            <PasswordChangeComplete />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default PasswordChangeCompletepage;
