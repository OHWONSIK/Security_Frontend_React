import { Row, Col, Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/TopContent.module.css';
import { Link } from "react-router-dom";

function TopContent() {
    return (
        <div className={styles.TopContent}>

            <Container fluid>
                <Row className={styles.top}>

                    <Col lg={3}>
                        <img
                            className={styles.logoimg}
                            src="img/logo01.png"
                        />
                        <Navbar.Brand className={styles.name} href="/">상명은행</Navbar.Brand>
                    </Col>
                    <Col lg={7}></Col>

                    <Col lg={2}>
                        <div className={styles.header}>
                            <ul className={styles.nobullet}>
                                <li className={styles.login}>
                                    <Link to="/login">로그인</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div>
                        <Navbar className={styles.Navbar} expand="lg">
                            <Col lg={2}>
                                <Nav.Link className={styles.lookup} href="/bankstatement">조회</Nav.Link>
                            </Col>
                            <Col lg={2}>
                                <Nav.Link className={styles.transper} href="/selectaccount">이체</Nav.Link>
                            </Col>
                            <Col lg={2}>
                                <Nav.Link className={styles.tuition} href="/selectaccount02">대출</Nav.Link>
                            </Col>
                            <Col lg={2}>
                                <Nav.Link className={styles.product} href="/createaccount02">계좌생성</Nav.Link>
                            </Col>
                            <Col lg={2}>
                                <Nav.Link className={styles.cardissuance} href="/cardissuance">카드발급</Nav.Link>
                            </Col>
                            <Col lg={2}>
                                <Nav.Link className={styles.notice} href="/newnews">공지사항</Nav.Link>
                            </Col>
                        </Navbar>
                    </div>
                </Row>
                <Row>
                    <div className={styles.divideline}></div>
                </Row>
            </Container>



        </div>
    );
}

export default TopContent;