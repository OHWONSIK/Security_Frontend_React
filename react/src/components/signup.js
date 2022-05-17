import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/signup.module.css';

function Signup() {
    return (
      <div className={styles.Signup}>
        <Container fluid>
            <Row>
                <Col lg={3}></Col>
                <Col lg={1}>
                    <h2 className={styles.informationinput}>정보입력</h2>
                    <h5 className={styles.id}>ID</h5>
                    <h5 className={styles.password}>PASSWORD</h5>
                    <h5 className={styles.name}>이름</h5>
                    <h5 className={styles.gender}>성별</h5>
                    <h5 className={styles.email}>e-mail</h5>
                    <h5 className={styles.phonenumber}>전화번호</h5>
                    <h5 className={styles.findpassword}>비밀번호찾기 질문 / 답변</h5>
                </Col>
                <Col lg={4}>
                    <Row>
                        <Col lg={9}>
                            <Form.Control className={styles.idinput} type="id" placeholder="" />
                        </Col>
                        <Col lg={3}>
                            <Button className={styles.overlapcheckbutton} variant="primary">중복확인</Button>{' '}
                        </Col>
                    </Row>
                    <Form.Control className={styles.passwordinput} type="password" placeholder="" />
                    <Form.Control className={styles.nameinput} type="name" placeholder="" />
                    <Form className={styles.gendercheckbox}>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check className={styles.gendermale}
                                inline
                                label="남자"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check className={styles.genderfemale}
                                inline
                                label="여자"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            </div>
                        ))}
                    </Form>
                    <Row>
                        <Col lg={6}>
                        <Form.Control className={styles.emailinput1} type="email" placeholder="" />
                        </Col>
                        <Col lg={1}>
                            <h5 className={styles.emailinput2}>@</h5>
                        </Col>
                        <Col lg={5}>
                            <Form.Select className={styles.emailinput3}aria-label="Default select example">
                                <option>이메일을 선택하세요</option>
                                <option value="1">naver.com</option>
                                <option value="2">daum.net</option>
                                <option value="3">gmail.com</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            <Form.Control className={styles.phonenumberinput1} type="phonenumber" placeholder="010" />                         
                        </Col>
                        <Col lg={1}>
                            <h5 className={styles.phonenumberinput2} >-</h5>
                        </Col>
                        <Col lg={3}>
                            <Form.Control className={styles.phonenumberinput3} type="phonenumber" placeholder="" /> 
                        </Col>
                        <Col lg={1}>
                            <h5 className={styles.phonenumberinput4} >-</h5>
                        </Col>
                        <Col lg={3}>
                            <Form.Control className={styles.phonenumberinput5} type="phonenumber" placeholder="" />
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                    <Form.Select className={styles.findpasswordquestion} aria-label="Default select example">
                        <option>질문을 선택해주세요.</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control className={styles.findpasswordanswerinput} type="answer" placeholder="" />
                    <Button className={styles.signupbutton}variant="primary" size="lg" >
                        <Link to="/signupcomplete">가입하기</Link>
                    </Button>
                </Col>                             
                <Col lg={4}></Col>                
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Signup;