import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/home.module.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    Axios.get("/api/v1/guest/cont/news")
      .then((res) => setInfo(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const Tr = ({ info }) => {
    //let infoReverse = info.slice(-4).reverse()
    return (
      <div className={styles.og_box}>
        <ListGroup className={styles.noticeList} variant="flush">
          {info.slice(0, 4).map((item, idx) => {
            return <Td key={item.id} item={item} />;
          })}
        </ListGroup>
      </div>
    );
  };

  const Td = ({ item }) => {
    return (
      <>
        <ListGroup.Item className={styles.List1}>{item.title}</ListGroup.Item>
      </>
    );
  };

  return (
    <div className={styles.Home}>
      <Container fluid>
        <Row className={styles.contentTop}>
          <Col lg={1}></Col>
          <Col lg={7}>
            <div className={styles.og_box2}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className={styles.item}
                    src="img/event3_001.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={styles.item}
                    src="img/event02_001.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className={styles.item}
                    src="img/event1_001.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col lg={3}>
            <img className={styles.cardImage} alt="card" src="img/card.png" />
            <div className="d-grid gap-2">
              <Button
                className={styles.loginButton}
                variant="primary"
                size="lg"
                href="/login"
              >
                로그인
              </Button>
              <Button
                className={styles.signupButton}
                variant="primary"
                size="lg"
                href="/signup"
              >
                회원가입
              </Button>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>

        <Row className={styles.contentMiddle}>
          <Col lg={1}></Col>
          <Col lg={10}>
            <div>
              <a href="/product">
                <Button
                  className={styles.depositButton}
                  variant="secondary"
                  size="lg"
                >
                  예적금
                </Button>
              </a>

              <a href="quicksearch">
                <Button
                  className={styles.historyButton}
                  variant="secondary"
                  size="lg"
                >
                  빠른거래내역
                </Button>
              </a>

              <a href="selectaccount02">
                <Button
                  className={styles.loanButton}
                  variant="secondary"
                  size="lg"
                >
                  대출
                </Button>
              </a>

              <a href="/netsec">
                <Button
                  className={styles.productButton}
                  variant="secondary"
                  size="lg"
                >
                  보안공지
                </Button>
              </a>
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
              <Link to="/newnews" className={styles.morebutton}>
                +더보기
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            {/* <ListGroup className={styles.noticeList} variant="flush">
                            <ListGroup.Item className={styles.List1}>학사제도 안내서 및 교양 교육과정 이수기준</ListGroup.Item>
                            <ListGroup.Item className={styles.List2}>제17회 TOPCIT 정기평가 안내</ListGroup.Item>
                            <ListGroup.Item className={styles.List3}>2022년 8월 졸업예정자 공학인증 안내</ListGroup.Item>
                            <ListGroup.Item class
                            Name={styles.List4}>2022년도 SW중심대학사업 SW산학멘토링</ListGroup.Item>
                        </ListGroup> */}

            <Tr info={info} />
          </Col>
          <Col lg={1}></Col>
          <Col lg={3}>
            <div className="d-grid gap-2">
              <Button className={styles.button1} variant="secondary" size="lg" href="/bankstatement">
                조회
              </Button>
              <Button className={styles.button2} variant="secondary" size="lg" href="/transfer">
                이체
              </Button>
              <Button className={styles.button3} variant="secondary" size="lg" href="/ongoingevent">
                이벤트
              </Button>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
