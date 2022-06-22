import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/TopContent";
import BottomContent from "../components/BottomContent";
import CreateAccount_2 from "../components/CreateAccount_2";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const CreateAccount_2page = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col>
            <CreateAccount_2 />
          </Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default CreateAccount_2page;
