import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/certification.module.css";

function Certification() {
  const location = useLocation();

  let accountNumber = location.state[0].accountNumber;
  let inputAccount = location.state[0].inputAccount;
  let transactionDate = location.state[0].transactionDate;
  let transactionTime = location.state[0].transactionTime;
  let inputAmount = location.state[0].inputAmount;
  let inputToReceiberMessage = location.state[0].inputToReceiberMessage;
  let inputToSenderMessage = location.state[0].inputToSenderMessage;

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
                  <td>1000</td>
                  <td>{inputAmount}</td>
                  <td> - </td>
                  <td>{inputToReceiberMessage}</td>
                  <td>{inputToSenderMessage}</td>
                </tr>
              </tbody>
            </Table>
            <div className={styles.box}></div>
            <Button className={styles.executebutton} variant="primary">
              <Link to="/transfercomplete">이체실행</Link>
            </Button>{" "}
            <Button className={styles.canclebutton} variant="primary">
              <Link to="/">취소</Link>
            </Button>{" "}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Certification;
