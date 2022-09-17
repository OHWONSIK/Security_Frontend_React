import styles from "../css/Common.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Axios from "axios";

const Common = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  let id = location.state[0].params;

  useEffect(() => {
    Axios.get("/api/v1/guest/cont/news/" + id)
      .then((res) => {
        console.log(res.data.data);
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <div className={styles.c_text}>{title}</div>
        </Col>
        <Col>
          <div className={styles.c_d_text}>2022-03-25</div>
        </Col>
      </Row>
      <Row>
        <div className={styles.m_text}>
          <Row>{content}</Row>

          <Row></Row>
        </div>
      </Row>
      <Row>
        <Button variant="primary" className={styles.c_button1}>
          목록
        </Button>{" "}
      </Row>
    </div>
  );
};

export default Common;
