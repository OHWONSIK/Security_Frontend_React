import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/findpassword.module.css';


function Findpassword() {
    return (
        <div className={styles.Findpassword}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.findpassword}>비밀번호 찾기</h2>
                        <h4 className={styles.findpasswordnotice}>비밀번호는 가입시 입력하신 아이디와 질문 / 답변을 통해 찾으실 수 있습니다.</h4>
                        <Form.Control className={styles.inputid} type="id" placeholder="아이디" />
                        <Form.Select className={styles.questionlist} aria-label="Default select example">
                            <option>질문을 선택해주세요.</option>
                            <option value="1">질문1</option>
                            <option value="2">질문2</option>
                            <option value="3">질문3</option>
                        </Form.Select>
                        <Form.Control className={styles.inputanswer} type="email" placeholder="답변" />
                        <Button className={styles.findbutton} variant="primary" size="lg">
                            <Link to="/temporarypasswordguide">찾기</Link>
                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Findpassword;






















