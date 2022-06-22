import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import CreateAccount from "../components/CreateAccount";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const CreateAccountpage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col>
            <CreateAccount />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default CreateAccountpage;
