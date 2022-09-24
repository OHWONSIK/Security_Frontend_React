import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/certification.module.css";
import Axios from "axios";
import sha256 from "crypto-js/sha256";

function Certification() {
  const navigate = useNavigate();
  const location = useLocation();
  let jwt;
  let temp;
  var SHA256 = require("crypto-js/sha256");
  let accountNumber = location.state[0].accountNumber;
  let inputAccount = location.state[0].inputAccount;
  let transactionDate = location.state[0].transactionDate;
  let transactionTime = location.state[0].transactionTime;
  let inputAmount = location.state[0].inputAmount;
  let inputToReceiberMessage = location.state[0].inputToReceiberMessage;
  let inputToSenderMessage = location.state[0].inputToSenderMessage;
  let receiverName = location.state[0].receiverName;
  let selectNum1 = location.state[0].selectNum1;
  let selectNum2 = location.state[0].selectNum2;

  // const sha256 = require("sha256");

  const [inputNum1, setInputNum1] = React.useState("");
  const [inputNum2, setInputNum2] = React.useState("");
  const [errnum, setErrNum] = React.useState(1);

  const handleInputNum1 = (e) => {
    setInputNum1(e.target.value);
  };

  const handleInputNum2 = (e) => {
    setInputNum2(e.target.value);
  };

  const OnClickCertification = () => {
    jwt = localStorage.getItem("jwtRefreshToken");
    // console.log(inputNum1 + inputNum2);

    const hashed = SHA256(jwt.substr(7) + inputNum1 + inputNum2)
      .toString()
      .substr(0, 32);

    // console.log(hashed);

    Axios.post(
      "/api/v1/user/accounts/transaction/checksecuritycard",
      {
        hashedData: hashed,
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
        if (res.data.checker === true) {
          // console.log("1번진입");
          const params = new URLSearchParams({
            loginId: sessionStorage.getItem("loginId"),
          }).toString();

          const url = "/api/v1/user/accounts/transaction/transfer?" + params;
          var data = {};

          Axios.post(url, data, {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
              "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
            },
          })
            .then((res) => {
              if (res.data.checker === true) {
                // console.log("이체진입");
                // document.location.href = "/transfercomplete";
                navigate("/transfercomplete", {
                  state: [
                    {
                      accountNumber: accountNumber,
                      transactionDate: transactionDate,
                      transactionTime: transactionTime,
                      inputAmount: inputAmount,
                      inputToReceiberMessage: inputToReceiberMessage,
                      inputToSenderMessage: inputToSenderMessage,
                    },
                  ],
                });
              } else if (res.data.checker === false) {
                alert(
                  "에러가 발생했습니다. 처음부터 이체를 다시 진행해주세요."
                );
                document.location.href = "/";
              }
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        } else if (res.data.checker === false) {
          if (errnum < 3) {
            alert("보안카드 번호가 " + errnum + "회 틀렸습니다. ");
            setErrNum(errnum + 1);
          } else {
            alert(
              "보안카드 번호가 3회 틀렸습니다. 처음부터 이체를 진행해 주세요."
            );
            document.location.href = "/";
          }
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // console.log("리시버:" + receiverName);
  // console.log("랜넘1:" + selectNum1);
  // console.log("랜넘2:" + selectNum2);

  return (
    <div className={styles.Certification}>
      <Container fluid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h3 className={styles.confirm}>정보확인 및 인증</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>출금계좌</th>
                  <th>입금계좌(은행)</th>
                  <th>받는분</th>
                  <th>이체금액(원)</th>
                  <th>수수료(원)</th>
                  <th>받는통장메모</th>
                  <th>내통장메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{accountNumber}(상명)</td>
                  <td>{inputAccount}(상명)</td>
                  <td>{receiverName}</td>
                  <td>{inputAmount}</td>
                  <td> - </td>
                  <td>{inputToReceiberMessage}</td>
                  <td>{inputToSenderMessage}</td>
                </tr>
              </tbody>
            </Table>
            <Row>
              {/* <div className={styles.box}> */}
              <Col lg={6}>
                <img className={styles.otpsize} src="img/s_card.png" />
              </Col>
              <Col lg={6}>
                <Row className={styles.otpnum}>
                  보안카드 {selectNum1}번째 번호 앞 2자리 입력
                  <Row>
                    <Form.Control
                      className={styles.numberinput}
                      type="text"
                      placeholder=""
                      onChange={handleInputNum1}
                    />
                  </Row>
                </Row>
                <Row className={styles.otpnum}>
                  보안카드 {selectNum2}번째 번호 뒷 2자리 입력
                  <Row>
                    <Form.Control
                      className={styles.numberinput}
                      type="text"
                      placeholder=""
                      onChange={handleInputNum2}
                    />
                  </Row>
                </Row>
              </Col>

              {/* </div> */}
            </Row>
            <a>
              <Button
                className={styles.nextbutton}
                variant="primary"
                size="lg"
                onClick={OnClickCertification}
              >
                이체실행
              </Button>
            </a>
            <a href="/">
              <Button className={styles.cancelbutton} variant="primary">
                <Link to="/">취소</Link>
              </Button>{" "}
            </a>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Certification;
