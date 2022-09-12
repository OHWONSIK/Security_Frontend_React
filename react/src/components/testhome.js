import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/testhome.module.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Testhome() {
    const onLogout = () => {
        sessionStorage.removeItem('loginId')
        document.location.href = '/'
    }

    const [info, setInfo] = useState([]);

    useEffect(() => {
        Axios.get('/cont/news')
            .then(res => setInfo(res.data.data))
            // .then(res => console.log(res.data.data))
            .catch(err => console.log(err));
    }, []);

    const Tr = ({ info }) => {
        //let infoReverse = info.slice(-4).reverse()
        return (
            <ListGroup className={styles.noticeList} variant="flush">
                {
                    info.slice(0, 4).map((item, idx) => {
                        return (
                            <Td key={item.id} item={item} />
                        )
                    })
                }
            </ListGroup>
        );
    };

    const Td = ({ item }) => {
        return (
            <>
                <ListGroup.Item className={styles.List1}>{item.title}</ListGroup.Item>
            </>
        )
    }

    return (
        <div className={styles.Testhome}>
            <Container fluid>

                <Row className={styles.contentTop}>
                    <Col lg={1}></Col>
                    <Col lg={7}>

                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={styles.item}
                                    src="img/event1_006.png"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={styles.item}
                                    src="img/event2_007.png"
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="img/third.svg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col lg={3}>

                        <img className={styles.cardImage} alt="card" src="img/card.png" />
                        <div className="d-grid gap-2">
                            <Button className={styles.loginButton} variant="primary" size="lg">
                                <Link to onClick ={onLogout}>로그아웃</Link>
                            </Button>
                            <Button className={styles.signupButton} variant="primary" size="lg">
                                <Link to="/">인증센터</Link>
                            </Button>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>

                <Row className={styles.contentMiddle}>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div>

                            <Button className={styles.depositButton} variant="secondary" size="lg">
                                <Link to="/product">예적금</Link>
                            </Button>

                            <Button className={styles.historyButton} variant="secondary" size="lg">
                                <Link to="/quicksearch">빠른거래내역</Link>
                            </Button>

                            <Button className={styles.loanButton} variant="secondary" size="lg">
                                <Link to="/loanapply">대출</Link>
                            </Button>

                            <Button className={styles.productButton} variant="secondary" size="lg">
                                금융상품
                            </Button>

                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>

                <Row className={styles.contentBottom}>
                    <Col lg={1}></Col>
                    <Col lg={1}>
                        <div className={styles.notice}>새소식</div>
                    </Col>
                    <Col lg={1}>
                        <div className={styles.seemore}>
                            <Link to="/newnews">+더보기</Link>

                        </div>
                    </Col>
                    <Col lg={4}>
                        {/* <ListGroup className={styles.noticeList} variant="flush">
                            <ListGroup.Item className={styles.List1}>학사제도 안내서 및 교양 교육과정 이수기준</ListGroup.Item>
                            <ListGroup.Item className={styles.List2}>제17회 TOPCIT 정기평가 안내</ListGroup.Item>
                            <ListGroup.Item className={styles.List3}>2022년 8월 졸업예정자 공학인증 안내</ListGroup.Item>
                            <ListGroup.Item className={styles.List4}>2022년도 SW중심대학사업 SW산학멘토링</ListGroup.Item>
                        </ListGroup> */}
                        <Tr info={info} />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={3}>
                        <div className="d-grid gap-2">
                            <Button className={styles.button1} variant="secondary" size="lg">
                                <Link to="/bankstatement">조회</Link>
                            </Button>
                            <Button className={styles.button2} variant="secondary" size="lg">
                                <Link to="/transfer">이체</Link>
                            </Button>
                            <Button className={styles.button3} variant="secondary" size="lg">
                                <Link to="/ongoingevent">이벤트</Link>
                            </Button>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testhome;






















