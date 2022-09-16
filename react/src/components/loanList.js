import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanList.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';



function LoanList() {
    const [data, setData] = React.useState([]);
    // const [interestRate, setInterestRate] = React.useState([]);
    // const [interestType, setInterestType] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    // let data2 = []
    let i;

    

    useEffect(() => {
        for (i = 0; i < data.length; i++) {
            Axios.get(
                "/api/v1/guest/loanlist",
            )
                .then((res) => {
                    setData2(res.data.data)
                })
                .catch((error) => {
                    alert(error.response.data.message)
                });
        }
    }, []);


    useEffect(() => {
        Axios.get('/api/v1/user/loans/loanlist',
            {
                params: { loginId: sessionStorage.getItem('loginId') },
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                    "Authorization-refresh": localStorage.getItem('jwtRefreshToken')
                }
            }
        )
            .then(res => {
                setData(res.data.data)
                console.log(data)
            })
            .catch((error) => {
                alert(error.response.data.message)
            });
    }, []);

    return (
        <div className={styles.LoanList}>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <h4 className={styles.loanList}>대출 목록</h4>
                        {data.map((data, idx) => (
                            <div className={styles.loanlist}>
                                <div className={styles.loanType}>{data.loanList}</div>
                                <div className={styles.box}></div>
                            </div>
                        ))}

                    </Col>
                    <Col lg={6}>
                        {data.map((data, idx) => (
                            <div className={styles.loanInfo}>
                                <div className={styles.amount}>대출금액: {data.amount}원</div>
                                <div className={styles.interestRate}>만료날짜: {data.dueDate}</div>
                            </div>
                        ))}

                        


                    </Col>
                    <Button className={styles.checkbutton} variant="primary">
                        <Link to="/myinfo">확인</Link>
                    </Button>{' '}
                </Row>
            </Container>
        </div>
    );
}

export default LoanList;






















