import { Row, Col, Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/TopContent.module.css';
import { Link} from "react-router-dom";

function TopContent() {
    return (
        <div className={styles.TopContent}>

            <Container fluid>
                <Row>
                    <Col lg={10}></Col>
                    <Col lg={2}>
                        <div className={styles.header}>
                            <ul className={styles.nobullet}>
                                
                                <li className={styles.login}>
                                    <Link to="/login">로그인</Link>                               
                                </li>
                                {/* <li className={styles.certification}>
                                    인증센터
                                </li> */}
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div>
                        <Navbar className={styles.Navbar} expand="lg">
                            <Container fluid>
                                <Navbar.Brand className={styles.name} href="/">상명은행</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link className={styles.lookup} href="/Bankstatementpage">조회</Nav.Link>
                                        <Nav.Link className={styles.transper} href="/selectAccount">이체</Nav.Link>
                                        <Nav.Link className={styles.tuition} href="/selectAccount2">대출</Nav.Link>
                                        <Nav.Link className={styles.product} href="/CreateAccount_2page">계좌생성</Nav.Link>
                                        <Nav.Link className={styles.cardissuance}href="/cardissuance">카드발급</Nav.Link>
                                        <Nav.Link className={styles.notice}href="/Newnewspage">공지사항</Nav.Link>
                                        
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
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