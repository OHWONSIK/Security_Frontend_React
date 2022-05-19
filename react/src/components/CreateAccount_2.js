import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/CreateAccount_2.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateAccount_2 = () => {
  return (
    <div>
      <Row>
        <div className={styles.ca_2_text}>계좌 생성</div>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>계좌 번호</div>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="email"
                placeholder="-를 제외하고 입력하세요."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>비밀번호</div>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Button variant="primary" className={styles.ca_2_button}>
          <Link to="/CreateAccount_3page">확인</Link>
        </Button>{" "}
      </Row>
    </div>
  );
};

export default CreateAccount_2;
