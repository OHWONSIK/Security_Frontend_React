import {Container, Row, Col, Nav, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/login.module.css';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className={styles.Login}>
      <Container fluid>
        <Row className = {styles.topcontent}>
          <Col lg={3}></Col>
          <Col lg={6} className={styles.loginpage}>
            <Nav fill variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">아이디/비밀번호</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">공백</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">공백</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className={styles.divideline}></div>
            
          </Col>
          <Col lg={3}></Col>
        </Row>

        <Row className = {styles.middlecontent}>
            <Col lg={3}></Col>
            <Col lg={5}>
                <Form.Control
                className={styles.idform}
                type="id"
                placeholder="아이디를 입력해주세요"
                />
                <Form.Control
                className={styles.passwordform}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                aria-describedby="passwordHelpBlock"
                />
            </Col>
            <Col lg={1}>
              <Button className={styles.loginbutton} variant="primary" size="lg">
                로그인
              </Button>
            </Col>
            <Col lg={3}></Col>

        </Row>
        <Row className = {styles.bottomcontent}>
          <Col lg={4}></Col>
          <Col lg={1}>
            <div className = {styles.signup}>
              <Link to='/signup'>회원가입</Link>
            </div>
          </Col>
          <Col lg={2}>
            <div className = {styles.findid}>
              <Link to='/'>아이디찾기</Link>
            </div>
          </Col>
          <Col lg={1}>
            <div className = {styles.findpassword}>
              <Link to='/'>비밀번호찾기</Link>
            </div>
          </Col>
          <Col lg={4}></Col>



        </Row>
      </Container>
    </div>
  );
}

export default Login;






















