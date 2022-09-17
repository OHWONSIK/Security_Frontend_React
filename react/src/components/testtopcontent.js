import { Row, Col, Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/testtopcontent.module.css';
import { Link } from "react-router-dom";
import Axios from "axios";


function TesttopContent() {

    const onLogout = () => {
        Axios.post("/api/v1/user/logout", {},
            {
            headers: {
                Authorization: localStorage.getItem('jwtToken'),
                "Authorization-refresh": localStorage.getItem('jwtRefreshToken'),
            }
        })
            .then((res) => {
                if (res.data.checker === true)
                {
                    localStorage.removeItem('jwtToken')
                    localStorage.removeItem('jwtRefreshToken')
                    sessionStorage.removeItem('loginId')
                    document.location.href = '/'
                }
                else alert(res.data.message);
            })

            .catch((error) => {
                alert(error.response.data.message)
            });

        
    }

    return (
        <div className={styles.TesttopContent}>

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
                                    <Link to onClick={onLogout}> 로그아웃</Link>
                                </li>
                                <li className={styles.certification}>
                                    <Link to="/mypage">마이페이지</Link>
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

export default TesttopContent;