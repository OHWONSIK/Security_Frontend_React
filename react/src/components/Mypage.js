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
            <a href="/qa">
              <Button className={styles.qa_button} variant="secondary" size="lg">
                1:1문의
              </Button>
            </a>

            <a href="/passwordchange">
              <Button
                className={styles.pwchange_button}
                variant="secondary"
                size="lg"
              >
                비밀번호 변경
              </Button>
            </a>

            <a href="/myinfo">
              <Button
                className={styles.myinfo_button}
                variant="secondary"
                size="lg"
              >
                본인 정보 확인
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Mypage;
