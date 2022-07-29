import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Axios from "axios";
import styles from "../css/Mypage.module.css";

const Mypage = () => {
  return (
    <div>
      <Row className={styles.mypage_contents}>
        <Col>
          <div>
            <Button className={styles.qa_button} variant="secondary" size="lg">
              <Link to="/qa">1:1문의</Link>
            </Button>

            <Button
              className={styles.pwchange_button}
              variant="secondary"
              size="lg"
            >
              <Link to="/passwordchange">비밀번호 변경</Link>
            </Button>

            <Button
              className={styles.myinfo_button}
              variant="secondary"
              size="lg"
            >
              <Link to="/myinfo">본인 정보 확인</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Mypage;
