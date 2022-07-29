import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/inquiryWrite.module.css";
import React, { useEffect } from "react";
import Axios from "axios";

function InquiryWrite() {
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickComplete = () => {
    Axios.post("cont/counsels", {
      content: inputContent,
      loginId: sessionStorage.getItem("loginId"),
      title: inputTitle,
    })
      .then((res) => {
        if (res.data.checker === true) {
          console.log(res.data.checker, "성공");
          document.location.href = "/customerservice";
        } else {
          alert(res.data.message);
        }
      })

      .catch();
  };

  return (
    <div className={styles.InquiryWrite}>
      <h4 className={styles.inquiryWrite}>1:1문의 작성</h4>
      <h4 className={styles.title}>제목</h4>
      <Form.Control
        type="title"
        placeholder="제목을 입력해주세요"
        onChange={handleInputTitle}
        value={inputTitle}
      />
      <h4 className={styles.content}>내용</h4>
      <Form.Control
        as="textarea"
        rows={12}
        placeholder="내용을 입력해주세요"
        onChange={handleInputContent}
        value={inputContent}
      />
      <Button
        className={styles.completebutton}
        variant="primary"
        onClick={onClickComplete}
      >
        완료
      </Button>{" "}
    </div>
  );
}

export default InquiryWrite;
