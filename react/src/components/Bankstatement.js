import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "../css/Bankstatement.module.css";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Bankstatement = () => {
  return (
    <Row>
      <div className={styles.bs_border}>
        <Row>
          <Row>
            <Col>
              <div className={styles.statement_text}>거래내역 조회</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className={styles.nobullet}>
                <li className={styles.leftalign}>조회기간</li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="년"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1995년</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">1996년</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">1997년</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="월"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1월</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2월</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3월</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4월</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5월</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">6월</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">7월</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">8월</Dropdown.Item>
                    <Dropdown.Item href="#/action-9">9월</Dropdown.Item>
                    <Dropdown.Item href="#/action-10">10월</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">11월</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">12월</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="일"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1일</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2일</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3일</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4일</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5일</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">6일</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">7일</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">8일</Dropdown.Item>
                    <Dropdown.Item href="#/action-9">9일</Dropdown.Item>
                    <Dropdown.Item href="#/action-10">10일</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">11일</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">12일</Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col className={styles.bs_search}>
            <ul className={styles.nobullet}>
              <li className={styles.leftalign}>조회내용</li>
              <li className={styles.leftalign}>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-1">
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="전체내역"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="출금내역"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="입금내역"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col lg={5}></Col>
          <Col lg={1}>
            <Button variant="primary" size="lg">
              <div className={styles.leftalign2}>조회</div>
            </Button>{" "}
          </Col>

          <Col lg={1}>
            <Button variant="primary" size="lg">
              <div className={styles.leftalign3}>이체</div>
            </Button>{" "}
          </Col>
        </Row>
      </div>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>5건의 조회내역이 있습니다.</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>계좌번호 : 356-0027-5834-73</li>
          </ul>
        </Col>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li> 예금주 : 홍길동 </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>상명예금</li>
          </ul>
        </Col>

        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>잔액 : 2000원</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>거래일자</th>
                <th>거래시간</th>
                <th>적요</th>
                <th>출금(원)</th>
                <th>입금(원)</th>
                <th>내용(입금자명)</th>
                <th>잔액(원)</th>
                <th>거래점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022-02-16</td>
                <td>10:00:03</td>
                <td>타행출금</td>
                <td>출금(원)</td>
                <td>입금(원)</td>
                <td>내용(입금자명)</td>
                <td>잔액(원)</td>
                <td>대기1</td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Row>
  );
};

export default Bankstatement;
