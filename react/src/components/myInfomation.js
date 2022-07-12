import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/myInfomation.module.css';
import React, { useEffect } from 'react';


function MyInfomation() {

    return (
        <div className={styles.MyInfomation}>
            <Container fluid>
                <Row>
                    <Col lg={4}>
                        <h4 className={styles.myInfomation}>본인정보 확인</h4>
                        <h4 className={styles.id}>아이디</h4>
                        <h4 className={styles.name}>이름</h4>
                        <h4 className={styles.age}>나이</h4>
                        <h4 className={styles.gender}>성별</h4>
                        <h4 className={styles.email}>이메일</h4>
                        <h4 className={styles.phoneNumber}>전화번호</h4>
                        <h4 className={styles.accountNumber}>계좌번호</h4>
                        <h4 className={styles.cardList}>카드목록</h4>
                        <h4 className={styles.loanList}>대출목록</h4>
                    </Col>
                    <Col lg={8}>
                        <h4 className={styles.Id}>fsdafd3253</h4>
                        <h4 className={styles.Name}>홍길동</h4>
                        <h4 className={styles.Age}>26</h4>
                        <h4 className={styles.Gender}>남자</h4>
                        <h4 className={styles.Email}>fsdafd3253@naver.com</h4>
                        <h4 className={styles.PhoneNumber}>010-1234-5678</h4>
            
                        <Form.Select className={styles.AccountNumber} aria-label="Default select example">
                            <option>계좌목록</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        <Form.Select className={styles.CardList} aria-label="Default select example">
                            <option>카드목록</option>
                            <option value="1">상명카드</option>
                        </Form.Select>
                        <Form.Select className={styles.LoanList} aria-label="Default select example">
                            <option>대출목록</option>
                            <option value="1">상명대출</option>
                        </Form.Select>
                    </Col>
                    <Button className={styles.checkbutton} variant="primary">
                <Link to="/">확인</Link>
            </Button>{' '}
                </Row>
            </Container>
        </div>
    );
}

export default MyInfomation;






















