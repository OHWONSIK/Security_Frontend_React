import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanList.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';



function LoanList() {
    const [data, setData] = React.useState([]);
    const [data2, setData2] = React.useState([]);

    let i;

    useEffect(() => {
        // console.log(data[0])
        for (i = 0; i < data.length; i++) {
            Axios.get('/users/loanlist/' + data[i].loanList
            )
                .then(res => {
                    console.log("test")
                    setData2(res.data.data)
                    console.log(data2.interestType)
                })
                .catch(err => console.log(err));
        }
    }, [data]);


    useEffect(() => {
        Axios.get('/users/loans/loanlist',
            { params: { loginId: sessionStorage.getItem('loginId') } }
        )
            .then(res => {
                setData(res.data.data)
                // console.log(data[0].loanlist)
            })
            .catch(err => console.log(err));
        
        // for (i = 0; i < data.length; i++) {
        //     Axios.get('/users/loanlist/' + data[i].loanlist
        //     )
        //         .then(res => {
        //             setData2(res.data.data)
        //             console.log(data2)
        //         })
        //         .catch(err => console.log(err));
        // }
        
        
    }, []);


    
    

    

    return (
        <div className={styles.LoanList}>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <h4 className={styles.loanList}>대출 목록</h4>
                        {data.map((data2) => (
                            <div className = {styles.loanlist}>
                                <div className={styles.loanType}>{data2.interestType}</div>
                                <div className={styles.box}></div>
                            </div>
                        ))}
                        
                    </Col>
                    <Col lg={6}>
                        {data.map((data)=> (
                            <div className = {styles.loanInfo}>
                                <div className = {styles.interestRate}>금리: {data.cardNumber}</div>
                                <div className={styles.amount}>대출금액: {data.amount}원</div>
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






















