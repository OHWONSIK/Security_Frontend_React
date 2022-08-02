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
        <li className={styles.leftCont1}>
          <Link to="/product" className={styles.nocolor}>
            예적금
          </Link>
          <div className={styles.divideLineC}></div>
        </li>
        <li className={styles.leftCont}>
          <Link to="/newnews" className={styles.nocolor}>
            새소식
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/ongoingevent" className={styles.nocolor}>
            이벤트
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/customerservice" className={styles.nocolor}>
            상담센터
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/incidentnotification" className={styles.nocolor}>
            사고신고
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/netsec" className={styles.nocolor}>
            보안공지
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/" className={styles.nocolor}>
            금융상품
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/bankstatement" className={styles.nocolor}>
            거래내역
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/loanapply" className={styles.nocolor}>
            대출
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/quicksearch" className={styles.nocolor}>
            빠른거래내역
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/transfer" className={styles.nocolor}>
            이체
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/cardissuance" className={styles.nocolor}>
            카드발급
          </Link>
          <div className={styles.divideLineC}></div>
        </li>

        <Row>
          <Col>
            <img src="img/cs_img.jpg" className={styles.cs_size}></img>
          </Col>
          <Col>
            <div className={styles.leftCont2}>
              <Link to="/customerservice" className={styles.nocolor2}>
                고객센터
              </Link>
            </div>
          </Col>
        </Row>
      </ul>
    </div>
  );
};

export default leftList;
