import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import CreateAccount_3 from "../components/CreateAccount_3";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const CreateAccount_3page = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col>
            <CreateAccount_3 />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default CreateAccount_3page;
