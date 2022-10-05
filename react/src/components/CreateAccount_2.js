import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/CreateAccount_2.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import Axios from "axios";

const CreateAccount_2 = () => {
  const [inputPw, setInputPw] = React.useState("");
  const [selectInquiryType, setSelectInquiryType] = React.useState("");

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickCreate();
    }
  };

  const handleInquiryType = (e) => {
    setSelectInquiryType(e.target.options[e.target.selectedIndex].text);
  };

  const onClickCreate = () => {
    if (
      selectInquiryType === "" ||
      selectInquiryType === "계좌 종류를 선택해주세요"
    ) {
      alert("계좌 종류를 선택해주세요");
      console.log("프론트 오류처리");
    } else if (inputPw.length === 0) {
      alert("계좌 비밀번호를 입력해주세요");
      console.log("프론트 오류처리");
    } else if (inputPw.length !== 6) {
      alert("계좌 비밀번호는 숫자 6자리로 구성되어야 합니다");
      console.log("프론트 오류처리");
    } else {
      Axios.post(
        "/api/v1/user/accounts/add",
        {
          accountPassword: inputPw,
          accountType: selectInquiryType,
          loginId: sessionStorage.getItem("loginId"),
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
            "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
          },
        }
      )
        .then((res) => {
          if (res.data.checker === true)
            document.location.href = "/createaccount03";
          else alert(res.data.message);
        })

        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  return (
    <div className={styles.createaccount2}>
      <Row>
        <div className={styles.ca_2_text}>계좌 생성</div>
      </Row>
      {/* <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>계좌 번호</div>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="email"
                placeholder="-를 제외하고 입력하세요."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row> */}
      <Row>
        <Col sm={2}></Col>
        <Col sm={2}>
          <Row>
            <img className={styles.item} src="img/item1.png" />
          </Row>
          <Row>
            <h4>상명청춘적금계좌</h4>
          </Row>
        </Col>

        <Col sm={2}>
          <Row>
            <img className={styles.item} src="img/item2.png" />
          </Row>
          <Row>
            <h4>상명꽃길적금계좌</h4>
          </Row>
        </Col>

        <Col sm={2}>
          <Row>
            <img className={styles.item} src="img/item3.png" />
          </Row>
          <Row>
            <h4>상명희망채움예금계좌</h4>
          </Row>
        </Col>

        <Col sm={2}>
          <Row>
            <img className={styles.item} src="img/item4.jpg" />
          </Row>
          <Row>
            <h4>상명희망적금계좌</h4>
          </Row>
        </Col>

        <Col sm={2}></Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>계좌 종류</div>
          <div className={styles.ca_2_ntext}>계좌 비밀번호</div>
        </Col>
        <Col lg={4}>
          <Form.Select
            className={styles.inquiryType}
            aria-label="Default select example"
            onChange={handleInquiryType}
          >
            <option>계좌 종류를 선택해주세요</option>
            <option value="1">상명청춘적금계좌</option>
            <option value="2">상명꽃길적금계좌</option>
            <option value="3">상명희망채움예금게좌</option>
            <option value="4">상명희망적금계좌</option>
          </Form.Select>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="password"
                placeholder=""
                onChange={handleInputPw}
              />
              <Form.Text className={styles.pwrule} muted>
                숫자 6자리를 입력해주세요
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button
            variant="primary"
            className={styles.ca_2_button}
            onClick={onClickCreate}
          >
            확인
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default CreateAccount_2;
