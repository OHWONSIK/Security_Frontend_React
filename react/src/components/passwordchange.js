import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/passwordchange.module.css';


function Passwordchange() {
  return (
    <div className={styles.Passwordchange}>
      <Container fluid>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
                <h2 className={styles.passwordchange}>비밀번호 변경</h2>
                <Form.Control className={styles.inputnewpassword} type="name" placeholder="새 비밀번호" />
                <Form.Control className={styles.inputpasswordcheck} type="email" placeholder="비밀번호 확인" />
                <Button className={styles.changebutton} variant="primary" size="lg">
                    <Link to="/passwordchangecomplete">변경하기</Link>
                </Button>
            </Col>
            <Col lg={3}></Col>

        </Row>
      </Container>
    </div>
  );
}

export default Passwordchange;






















