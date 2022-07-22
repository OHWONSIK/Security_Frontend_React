import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loancomplete.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';

function Loancomplete() {
    const location = useLocation()

    const [createDate, setCreateDate] = React.useState('');
    const [loanList, setLoanList] = React.useState('');
    let loanType = location.state[0].loanType
    let inputAmount = location.state[0].inputAmount
    let interestRate = location.state[0].interestRate
    let i


    useEffect(() => {
        // if (loanType === 1)
        //     setLoanList('상명등록금대출')
        // else if (loanType === 2)
        //     setLoanList('상명신용대출')
        // else if (loanType === 3)
        //     setLoanList('상명비상금대출')

        Axios.get('users/loanlist/' + loanType,
            // { params: { loginId: sessionStorage.getItem('loginId') } }
        )
            .then(res => {
                setLoanList(res.data.data.interestType)
            })
            .catch()


        Axios.get('users/loans/loanlist',
            { params: { loginId: sessionStorage.getItem('loginId') } }
        )
            .then(res => {
                for (i = 0; i < res.data.data.length; i++) {
                    if (loanType == res.data.data[i].loanList) {
                        setCreateDate(res.data.data[i].createDate)
                    }
                }
            })
            .catch()
    }, [])






    return (
        <div className={styles.Loancomplete}>
            <Container fluid>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <h3 className={styles.complete}>대출완료</h3>

                        <Table className={styles.completetable} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>거래일자</th>
                                    <th>대출종류</th>
                                    <th>대출금액</th>
                                    <th>금리</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{createDate}</td>
                                    <td>{loanList}</td>
                                    <td>{inputAmount}원</td>
                                    <td>{interestRate}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button className={styles.checkbutton} variant="primary">
                            <Link to="/">확인</Link>
                        </Button>{' '}
                    </Col>
                    <Col lg={2}></Col>


                </Row>
            </Container>
        </div>
    );
}

export default Loancomplete;