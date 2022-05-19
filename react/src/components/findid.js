import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/findid.module.css';


function Findid() {
    return (
        <div className={styles.Findid}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.findid}>아이디 찾기</h2>
                        <h4 className={styles.findidnotice}>아이디는 가입시 입력하신 이름과 이메일을 통해 찾으실 수 있습니다.</h4>
                        <Form.Control className={styles.inputname} type="name" placeholder="이름" />
                        <Form.Control className={styles.inputemail} type="email" placeholder="이메일" />
                        <Button className={styles.findbutton} variant="primary" size="lg">
                            <Link to="/idguide">찾기</Link>
                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Findid;






















