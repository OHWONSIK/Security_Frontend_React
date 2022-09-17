import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/cardissuance.module.css";
import { Router, Route, Routes, Link } from "react-router-dom";
import React, { useEffect } from "react";
import Axios from "axios";

function Cardissuance() {
  const [info, setInfo] = React.useState([]);
  const [info2, setInfo2] = React.useState([]);
  

  //const [checked, setChecked] = React.useState(false);

  // const [selectCardType, setSelectCardType] = React.useState("");

  let accountNumber;
  let cardType;
  let i;
  let checked = false;

  const checkHandler = ({ target }) => {
    checked = !checked;
  };

  const handleAccountNum = (e) => {
    accountNumber = e.target.options[e.target.selectedIndex].value;
    // setAccountNum(e.target.options[e.target.selectedIndex].value)
    // setAccountNum(accountNum)
  };

  const handleCardType = (e) => {
    cardType = e.target.options[e.target.selectedIndex].text;
  };

  useEffect(() => {
    Axios.get('/api/v1/user/accounts/inquiry',
      // { params: { userId: sessionStorage.getItem('loginId') } }
      {
        params: { loginId: sessionStorage.getItem('loginId') },
        headers: {
          Authorization: localStorage.getItem('jwtToken'),
          "Authorization-refresh": localStorage.getItem('jwtRefreshToken')
        }
      }
    )
      .then((res) => setInfo2(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch((error) => {
        alert(error.response.data.message)
      });
  }, []);

  useEffect(() => {
    Axios.get('/api/v1/user/cardlist', {
      headers: {
        Authorization: localStorage.getItem('jwtToken'),
        "Authorization-refresh": localStorage.getItem('jwtRefreshToken')
      }
    }
    )
      .then(res => {
        setInfo(res.data.data)
        // setInterestRate(res.data.data[0].interestRate)
      })
      // .then(res => console.log(res.data.data))
      .catch((error) => {
        alert(error.response.data.message)
      });
  }, []);

  const onClickSubmit = () => {
    if (accountNumber === undefined || accountNumber === "계좌를 선택해주세요")
      alert("계좌번호를 선택해주세요");
    else if (cardType === undefined || cardType === "카드종류를 선택해주세요")
      alert("카드종류를 선택해주세요");
    else if (checked === false) alert("개인정보 수집 및 이용에 동의해주세요");
    else {
      Axios.post("/api/v1/user/card", {
        loginId: sessionStorage.getItem("loginId"),
        accountNumber: accountNumber,
        cardType: cardType
      }, {
        headers: {
          Authorization: localStorage.getItem('jwtToken'),
          "Authorization-refresh": localStorage.getItem('jwtRefreshToken'),
        }
      })
        .then((res) => {
          if (res.data.checker === true) {
            document.location.href = "cardissuancecomplete";
          } else alert(res.data.message);
        })
        .catch((error) => {
          alert(error.response.data.message)
        });
    }
  };

  const Tr = ({ info }) => {
    return (
      <Form.Select className={styles.cardtypeinput} aria-label="Default select example" onChange={handleCardType}>
        <option>카드종류를 선택해주세요</option>
        {
          info.map((item, idx) => {
            return (
              <Td key={item.title} item={item} />
            )
          })
        }
      </Form.Select>
    );
  };

  const Td = ({ item }) => {
    return (
      <>
        <option value={item.title}>{item.title}</option>
      </>
    )
  }

  const Tr2 = ({ info }) => {
    return (
      <Form.Select
        className={styles.accountinput}
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

  return (
    <div className={styles.Cardissuance}>
      <Container fluid>
        <Row className={styles.contentTop}>
          <Col lg={3}></Col>
          <Col lg={1}>
            <h3 className={styles.cardtype}>계좌번호</h3>
            <h3 className={styles.cardtype}>카드종류</h3>
            <h3 className={styles.guide}>개인정보 수집 및 이용동의</h3>
          </Col>
          <Col lg={4}>
            <h2 className={styles.application}>카드발급 신청</h2>

            <Tr2 info={info2} />
            {/* <Form.Select
              className={styles.cardtypeinput}
              aria-label="Default select example"
              onChange={handleCardType}
            > */}
              {/* <option>카드종류를 선택해주세요</option>
              <option value="1">상명체크카드</option>
              <option value="2">상명신용카드</option>
              <option value="3">상명나라사랑체크카드</option>
              <option value="4">상명나라사랑신용카드</option> */}
              <Tr info={info} />

            {/* </Form.Select> */}

            {/* <Form className={styles.cardcheckbox}>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check className={styles.firstcard}
                    inline
                    label="카드1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check className={styles.secondcard}
                    inline
                    label="카드2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form> */}

            <Form.Control
              className={styles.textinput}
              as="textarea"
              rows={3}
              disabled
              readOnly
              placeholder="본 계약과 관련하여 귀사가 본인의 개인신용정보를 수집·이용하고자 하는 경우에는 「개인정보 보호법」제15조, 제22조 및 제24조와 「신용정보의 이용 및 보호에 관한 법률」 제33조 및 제34조에 따라 본인의 동의를 얻어야 합니다. 이에 본인은 귀사가 아래의 내용과 같이 본인의 개인신용정보를 수집·이용하는데 동의합니다.

            [개인신용정보의 필수적인 수집·이용에 관한 사항]
            수집·이용목적
            카드이용계약 체결을 위한 본인 확인 등 계약의 체결·유지·이행·관리, 금융사고조사, 법령상 의무이행 등
            수집·이용할 개인신용정보의 내용
            성명, 주소, 카드번호, 카드 거래관련번호(카드거래일시, 사용금액, 가맹점 구매물품내역, 카드승인번호, 상품권 한도 등), 가상계좌번호, 휴대폰번호, 전화번호, 이메일,신청관련 정보(충전, 거래정지, 환불, 소득공제, 기부, SMS서비스 등)
            미성년자 등의 법정대리인이 신청 동의한 미성년자 등의 정보(개인식별정보, 주소·연락처정보, 신청상품명 등)
            보유 및 이용 기간: 수집·이용 동의일로부터 개인신용정보의 수집·이용 목적을 달성할 때까지(단, 금융거래 종료 이후에는 금융사고조사, 분쟁해결, 민원처리, 법령상 의무 이행 및 당사의 리스크 관리 업무만을 위하여 보유·이용됩니다.)
            상기 <개인신용정보의 필수적인 수집·이용에 관한 사항>에 대한 동의가 없는 경우 거래관계의 설정 또는 유지가 불가능할 수 있음을 알려드립니다."
            />

            <Form
              className={styles.agreeCheckbox}
              onChange={(e) => checkHandler(e)}
            >
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`개인정보 수집 및 이용에 동의합니다`}
                  />
                </div>
              ))}
            </Form>

            <Button className={styles.submitbutton} variant="primary" size="lg" onClick={onClickSubmit}>
                제출
            </Button>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cardissuance;
