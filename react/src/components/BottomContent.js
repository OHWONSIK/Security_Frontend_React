import { Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/BottomContent.module.css";

const BottomContent = () => {
  return (
    <div className={styles.marginbottom}>
      <div className={styles.divideLineC}></div>
      <Container fluid>
        <Row className={styles.top}>
          <Col lg={1} className={styles.bottomCont}>
            <Link to="/incidentnotification" className={styles.noaction}>
              사고신고
            </Link>
          </Col>
          <Col lg={1} className={styles.bottomCont}>
            <Link to="/" className={styles.noaction}>
              인증센터
            </Link>
          </Col>
          <Col lg={1} className={styles.bottomCont}>
            <Link to="/netsec" className={styles.noaction}>
              보안공지
            </Link>
          </Col>
          <Col lg={1} className={styles.bottomCont}>
            <Link to="/customerservice" className={styles.noaction}>
              상담센터
            </Link>
          </Col>

          <Col lg={8}></Col>
        </Row>

        <Row className={styles.bottom}>
          <Col lg={2} className={styles.bottomCont2}>
            서울지점 : 02 - 2287 - 5292
          </Col>
          <Col lg={10}></Col>
        </Row>
        <Row>
          <Col lg={2} className={styles.bottomCont3}>
            천안지점 : 02 - 2287 - 5291
          </Col>
          <Col lg={10}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomContent;
