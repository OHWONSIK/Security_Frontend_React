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
import styles from "../css/testhome.module.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Testhome() {
  const onLogout = () => {
    Axios.post("/api/v1/user/logout", {},
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken'),
          "Authorization-refresh": localStorage.getItem('jwtRefreshToken'),
        }
      })
      .then((res) => {
        if (res.data.checker === true) {
          localStorage.removeItem('jwtToken')
          localStorage.removeItem('jwtRefreshToken')
          
        }
        else alert(res.data.message);
      })

      .catch((error) => {
        alert(error.response.data.message)

      });
    sessionStorage.removeItem('loginId')
    document.location.href = '/'
  };

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

  const [cardNumber, setCardNumber] = useState([]);
  const [cardType, setCardType] = useState([]);
  const [cardExpireDate, setCardExpireDate] = useState([]);
  let number;
  let date;


  useEffect(() => {
    Axios.get('/api/v1/user/card/cardlist',
      // { params: { userId: sessionStorage.getItem('loginId') } }
      {
        params: { loginId: sessionStorage.getItem('loginId') },
        headers: {
          Authorization: localStorage.getItem('jwtToken'),
          "Authorization-refresh": localStorage.getItem('jwtRefreshToken')
        }
      }
    )
      .then((res) => {
        number = res.data.data[1].cardNumber.toString()
        number = number.substring(0, 4) + '-' + number.substring(4, 8) + '-' + number.substring(8, 12) + '-' + number.substring(12, 16)
        date = res.data.data[1].expireDate.toString()
        date = date.substring(5, 7) + '/' + date.substring(0,2)
        setCardType(res.data.data[1].cardType)
        setCardExpireDate(date)
        setCardNumber(number)
      })

      .catch((error) => {
        alert(error.response.data.message)
      });
  }, []);




  return (
    <div className={styles.Testhome}>
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
            <div className={styles.cardContainer}>
              <img className={styles.cardImage} alt="card" src="img/card.png" />
              <h4 className={styles.cardType}> {cardType} </h4>
              <h4 className={styles.cardNumber}> {cardNumber} </h4>
              <h4 className={styles.cardExpireDate}> Expire {cardExpireDate} </h4>
            </div>
            
            <div className="d-grid gap-2">
              <Button
                className={styles.loginButton}
                variant="primary"
                size="lg"
                onClick={onLogout}
              >
                  로그아웃
              </Button>
              <Button
                className={styles.signupButton}
                variant="primary"
                size="lg"
                href="/"
              >
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
              <a href="/product">
              <Button
                className={styles.depositButton}
                variant="secondary"
                size="lg"
              >
                예적금
                </Button>
              </a>

              <a href="/quicksearch">
              <Button
                className={styles.historyButton}
                variant="secondary"
                size="lg"
              >
              빠른거래내역
                </Button>
              </a>

              <a href="/selectaccount02">
              <Button
                className={styles.loanButton}
                variant="secondary"
                size="lg"
              >
              대출
                </Button>
              </a>

              <a href="/">
              <Button
                className={styles.productButton}
                variant="secondary"
                size="lg"
              >
                금융상품
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
              <Link to="/newnews">+더보기</Link>
            </div>
          </Col>
          <Col lg={4}>
            <Tr info={info} />
          </Col>
          <Col lg={1}></Col>
          <Col lg={3}>
            <div className="d-grid gap-2">
              <Button className={styles.button1} variant="secondary" href="/bankstatement" size="lg">
                조회
              </Button>
              <Button className={styles.button2} variant="secondary" href="/transfer" size="lg">
                이체
              </Button>
              <Button className={styles.button3} variant="secondary" href="/ongoingevent" size="lg">
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

export default Testhome;
