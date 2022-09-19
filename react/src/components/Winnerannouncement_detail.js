import styles from "../css/Newnews_detail.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Axios from "axios";

const Winnerannouncement_detail = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [date, setDate] = React.useState("");

  let id = location.state[0].params;

  useEffect(() => {
    Axios.get("/api/v1/guest/cont/events/winner/" + id)
      .then((res) => {
        console.log(res.data.data);
        setTitle(res.data.data.title);
        setContent(res.data.data.content.replace(/\./g, "."));
        setDate(res.data.data.createDate.substr(0, 10));
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <div className={styles.c_text}>제목 : {title}</div>
        </Col>
        <Col>
          <div className={styles.c_d_text}>{date}</div>
        </Col>
      </Row>
      <Row>
        <div className={styles.m_text}>
          <Row>
            당첨자 목록 :<br />
            <br />
            {content}
          </Row>

          <Row></Row>
        </div>
      </Row>
      <Row>
        <a href="/winnerannouncement">
          <Button variant="primary" className={styles.c_button1}>
            목록
          </Button>{" "}
        </a>
      </Row>
    </div>
  );
};

export default Winnerannouncement_detail;
