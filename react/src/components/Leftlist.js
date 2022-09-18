import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Routes, Link } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/LeftList.module.css";

const leftList = () => {
  return (
    <div>
      <ul className={styles.noBullet}>
        {/* 0번링크는 지금 메인페이지로 해야할 듯?  */}
        <a href="/product" className={styles.nocolor}>
        <li className={styles.leftCont1} >
            예적금
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/newnews" className={styles.nocolor}>
        <li className={styles.leftCont}>
            새소식
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/ongoingevent" className={styles.nocolor}>
        <li className={styles.leftCont}>
            이벤트
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/customerservice" className={styles.nocolor}>
        <li className={styles.leftCont}>
            상담센터
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/incidentnotification" className={styles.nocolor}>
        <li className={styles.leftCont}>
            사고신고
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/netsec" className={styles.nocolor}>
        <li className={styles.leftCont}>
            보안공지
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/" className={styles.nocolor}>
        <li className={styles.leftCont}>
            금융상품
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/bankstatement" className={styles.nocolor}>
        <li className={styles.leftCont}>
            거래내역
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/selectaccount02" className={styles.nocolor}>
        <li className={styles.leftCont}>
            대출
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/quicksearch" className={styles.nocolor}>
        <li className={styles.leftCont}>
            빠른거래내역
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/transfer" className={styles.nocolor}>
        <li className={styles.leftCont}>
            이체
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <a href="/cardissuance" className={styles.nocolor}>
        <li className={styles.leftCont}>
            카드발급
          <div className={styles.divideLineC}></div>
          </li>
        </a>

        <Row>
          <Col>
              <img src="img/cs_img.jpg" className={styles.cs_size}></img>
          </Col>
          <Col>
            <div className={styles.leftCont2}>
              <a >
                고객센터
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={styles.box}>
            <p className={styles.seoul}>02 - 2287 - 5292</p>
            <p>02 - 2287 - 5291 </p>
            
          </div>
        </Row>
      </ul>
    </div>
  );
};

export default leftList;
