import {Container, Row, Col, Button, Table} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/transfercomplete.module.css';

function Transfercomplete() {
    return (
      <div className={styles.Transfercomplete}>
        <Container fluid>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h3 className={styles.complete}>이체완료</h3>

                    <Table className={styles.completetable} striped bordered hover>
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
                        <td>2022-03-16</td>
                        <td>10:00:30</td>
                        <td>타행출금</td>
                        <td>20,000</td>
                        <td>-</td>
                        <td>홍길동</td>
                        <td>2002</td>
                        <td>대기1</td>
                        </tr>
                    </tbody>
                    </Table>

                    <Button className={styles.continuebutton} variant="primary">
                        <Link to = "transfer">이체계속하기</Link>
                    </Button>{' '}
                    <Button className={styles.checkbutton} variant="primary">
                        <Link to = "/">확인</Link>
                    </Button>{' '}
                </Col>
                <Col lg={2}></Col>


            </Row>
        </Container>
      </div>
    );
  }
  
  export default Transfercomplete;