import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "../css/Quicksearch.module.css";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Quicksearch = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [sname, setSName] = React.useState("");

  const Component = () => {
    return (
      <div>
        <Row>
          <Col lg={6}>
            <div className={styles.nobullet}>
              최근 10건의 거래내역을 보여드립니다.
            </div>
          </Col>
          <Col lg={6}></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.nobullet}>계좌번호 : {accountNum}</div>
          </Col>
          <Col lg={6}>
            <div className={styles.nobullet}>예금주 : {name}</div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <div className={styles.nobullet}>상명예금</div>
          </Col>

          <Col lg={6}>
            <div className={styles.nobullet}>잔액 : {balanceNum} 원</div>
          </Col>
        </Row>

        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>거래일자</th>
                <th>거래시간</th>
                {/* <th>적요</th> */}
                <th>출금(원)</th>
                <th>입금(원)</th>
                {/* <th>내용(입금자명)</th> */}

                <th>거래점</th>
              </tr>
            </thead>
            <Tr info={info}></Tr>
          </Table>
        </Row>
      </div>
    );
  };

  const [accountNum, setAccountNum] = React.useState("");
  const [name, setName] = React.useState("");
  const [balanceNum, setBalanceNum] = React.useState("");
  const [inquireNum, setInquireNum] = React.useState("");
  const [info, setInfo] = React.useState([]);
  const [info2, setInfo2] = React.useState([]);

  let accountNumber;
  let balance;
  let inquireNumber = 0;
  let i;
  let senderAccount;
  let transactionDate;
  let transactionTime;
  let amount;
  let depositAmount;
  let withdrawAmount;
  let infoTest = [];
  let tempInfoTest = [];
  let startDate = "2022-01-01-13:00:00";
  let endDate = "2022-12-31-23:59:59";

  const handleAccountNum = (e) => {
    accountNumber = e.target.options[e.target.selectedIndex].value;
  };

  useEffect(() => {
    Axios.get("/api/v1/user/accounts/inquiry", {
      params: { loginId: sessionStorage.getItem("loginId") },
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
        "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
      },
    })
      .then((res) => setInfo2(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  const onClickTransfer = () => {
    if (accountNumber === undefined || accountNumber === "계좌를 선택해주세요")
      alert("계좌를 선택해주세요");
    else {
      console.log(accountNumber);
      navigate("/transfer", { state: accountNumber });
    }
  };

  const onClickInquiry = () => {
    setShow(true);
    setAccountNum(accountNumber);
    // setIsRender(isRender + 1)

    {
      Axios.get(
        "/api/v1/user/accounts/inquiry",
        // { params: { userId: sessionStorage.getItem('loginId') } }
        {
          params: { loginId: sessionStorage.getItem("loginId") },
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
            "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
          },
        }
      )
        .then((res) => {
          for (i = 0; i < res.data.data.length; i++) {
            if (accountNumber == res.data.data[i].accountNumber) {
              balance = res.data.data[i].balance;
            }
          }
          setBalanceNum(balance);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }

    {
      Axios.get("/api/v1/user/", {
        params: { loginId: sessionStorage.getItem("loginId") },
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
          "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
        },
      })
        .then((res) => {
          setName(res.data.data.name);
        })
        .catch((error) => {
          alert(error.data.message);
        });
    }

    if (
      /*isAccount === true && */ accountNumber !== undefined &&
      accountNumber !== "계좌를 선택해주세요"
    ) {
      // Axios.get('/users/transactions/' + account,
      // )
      Axios.post(
        "/api/v1/user/transactions/inquiry",
        {
          accountNumber: accountNumber,
          endDate: endDate,
          startDate: startDate,
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
            "Authorization-refresh": localStorage.getItem("jwtRefreshToken"),
          },
        }
      )
        .then((res) => {
          if (Object.keys(res.data.data).length === 0) {
            // console.log("거래내역이 존재하지 않습니다.");
            // console.log(startDate);
            // console.log(endDate);
            setInquireNum(0);
            tempInfoTest = [];
            setInfo(tempInfoTest);
          } else {
            for (i = 0; i < res.data.data.length; i++) {
              if (i > 9) {
                // i = 0;
                break;
              }
              // for (i = 0; i < res.data.data.length - (res.data.data.length-10); i++) {

              // console.log(res.data.data[i].sendMoney)
              // console.log(typeof(res.data.data[i].sendMoney))
              // if (res.data.data[i].sendMoney <= 0){
              //   amount = res.data.data[i].sendMnoney.toString()
              //   console.log(amount)
              // }
              // else{
              //   amount = res.data.data[i].sendMnoney.toString()
              //   console.log(amount)
              // }
              // amount = (res.data.data[i].sendMoney >= 0) ? res.data.data[i].sendMoney : Math.abs(res.data.data[i].sendMoney)
              inquireNumber = inquireNumber + 1;
              transactionDate = res.data.data[i].transactionDate.substring(
                0,
                10
              );
              transactionTime = res.data.data[i].transactionDate.substring(
                11,
                19
              );
              amount = res.data.data[i].sendMoney;

              if (amount >= 0) {
                senderAccount = res.data.data[i].senderAccount;
                depositAmount = amount;
                withdrawAmount = "-";

                Axios.get("/api/v1/user/accounts/name", {
                  params: { accountNumber: senderAccount },

                  headers: {
                    Authorization: localStorage.getItem("jwtToken"),
                    "Authorization-refresh":
                      localStorage.getItem("jwtRefreshToken"),
                  },
                })
                  .then((res) => {
                    if (res.data.checker === true) {
                      // console.log("진입");
                      setSName(res.data.data[0].name);
                      // // sendername = res.data.data[0].name;
                      // console.log(sendername);
                      // console.log(sname);
                    } else alert("오류, 다시진행해주세요");

                    // } else {
                    //   // console.log("isAccount ?? :: ", isAccount);
                    //   // account = res.data.data[0].accountNumber
                    //   // balance = res.data.data[0].balance
                    //   setMyAccount(res.data.data[0].accountNumber);
                    // setIsAccount(true);
                    // }
                  })
                  .catch((error) => {
                    alert(error.response.data.message);
                  });

                // console.log(i + 1 + '번째 거래내역 = ' + ' 거래일자:' + transactionDate + ' 거래시간' + transactionTime + ' 출금(원):' + withdrawAmount + ' 입금(원)' + depositAmount + ' 메모:' + res.data.data[i].toReceiverMessage
                // )
                infoTest = {
                  id: i + 1,
                  transactionDate: transactionDate,
                  transactionTime: transactionTime,
                  withdrawAmount: withdrawAmount,
                  depositAmount: depositAmount,

                  memo: res.data.data[i].toReceiverMessage,
                };
                tempInfoTest.push(infoTest);

                // .push(transactionDate, transactionTime, withdrawAmount, depositAmount, res.data.data[i].toReceiverMessage)
                // console.log(tempInfoTest)
              } else {
                senderAccount = "-";
                depositAmount = "-";
                withdrawAmount = Math.abs(amount);
                // console.log(i + 1 + '번째 거래내역 = ' + ' 거래일자:' + transactionDate + ' 거래시간' + transactionTime + ' 출금(원):' + withdrawAmount + ' 입금(원)' + depositAmount + ' 메모:' + res.data.data[i].toSenderMessage
                // )
                infoTest = {
                  id: i + 1,
                  transactionDate: transactionDate,
                  transactionTime: transactionTime,
                  withdrawAmount: withdrawAmount,
                  depositAmount: depositAmount,

                  memo: res.data.data[i].toSenderMessage,
                };
                tempInfoTest.push(infoTest);
              }
              setInfo(tempInfoTest);

              // console.log(i + 1 + '번째 거래내역 = ' + ' 거래날짜:' + transactionDate + '보낸사람계좌:'
              //   + res.data.data[i].senderAccount + ' 받은사람계좌:' + res.data.data[i].receiverAccount + ' 거래금액:' + res.data.data[i].sendMoney + '받는통장 메모:' + res.data.data[i].toReceiverMessage + '보낸통장 메모:' + res.data.data[i].toSenderMessage
              // )
            } // 거래내역 찍히게 변경해야함, 이체금액 - 떼고 줘야됨

            // console.log(transactionDate)
            // console.log(`${res.data.data[i].sendMoney}`)
            setInquireNum(inquireNumber);

            //여기구분선
          }
        })
        .catch();
    } else if (
      /*isAccount === true &&*/ accountNumber === undefined ||
      accountNumber === "계좌를 선택해주세요"
    )
      alert("계좌번호를 선택해주세요");
    else document.location.href = "CreateAccountpage";
  };

  const Tr2 = ({ info }) => {
    return (
      <Form.Select
        className={styles.accountInput}
        aria-label="Default select example"
        onChange={handleAccountNum}
      >
        <option>계좌를 선택해주세요</option>
        {info.map((item, idx) => {
          return <Td2 key={item.accountNumber} item={item} />;
        })}
      </Form.Select>
    );
  };

  const Td2 = ({ item }) => {
    return (
      <>
        <option value={item.accountNumber}>{item.accountNumber}</option>
      </>
    );
  };

  const Tr = ({ info }) => {
    // let infoReverse = info.slice(0).reverse()
    return (
      <tbody>
        {info.map((item, idx) => {
          return <Td key={item.id} item={item} />;
        })}
      </tbody>
    );
  };

  const Td = ({ item }) => {
    return (
      <>
        <tr>
          <td>{item.transactionDate}</td>
          <td>{item.transactionTime}</td>
          <td>{item.withdrawAmount}</td>
          <td>{item.depositAmount}</td>
          <td>상명은행</td>
        </tr>
      </>
    );
  };

  return (
    <Row>
      <Row>
        <div className={styles.qs_text}>빠른거래내역</div>
      </Row>
      <Row>
        <Col>
          <Tr2 info={info2} />
        </Col>
        <Col>
          <Button variant="primary" size="lg" onClick={onClickInquiry}>
            <div className={styles.leftalign2}>조회</div>
          </Button>{" "}
        </Col>
      </Row>
      {show && <Component />}
    </Row>
  );
};

export default Quicksearch;
