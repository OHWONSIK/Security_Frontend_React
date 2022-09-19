import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanList.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';



function LoanList() {
    const [data, setData] = React.useState([]);

    const Tr = ({ info }) => {
        // let infoReverse = info.slice(0).reverse()
        return (
            <tbody>
                {info.map((item, idx) => {
                    // console.log(item)
                    return <Td key={item.id} item={item} />;
                })}
            </tbody>
        );
    };

    const Td = ({ item }) => {
        return (
            <>
                <tr>
                    <td className={styles.index}>{item.loanList}</td>
                    <td className={styles.index}>{item.accountNumber}</td>
                    <td className={styles.index}>{item.amount}</td>
                    <td className={styles.index}>{item.interestRate}% {item.interestType}</td>
                    <td className={styles.index}>{item.createDate}</td>
                    <td className={styles.index}>{item.dueDate}</td>
                </tr>
            </>
        );
    };


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
                        <h4 className={styles.loanList}>대출 목록</h4>
                        {/* {data.map((data, idx) => (
                            <div className={styles.loanlist}>
                                <div className={styles.loanType}>{data.loanList}</div>
                                <div className={styles.amount}>대출금액: {data.amount}원</div>
                                <div className={styles.interest}>금리: {data.interestRate} {data.interestType}</div>
                                <div className={styles.expireDate}>만료날짜: {data.dueDate}</div>
                            </div>
                        ))} */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>대출상품</th>
                                <th>대출계좌</th>
                                <th>대출실행금액</th>
                                <th>금리</th>
                                <th>대출일</th>
                                <th>만료일</th>
                            </tr>
                        </thead>

                        <Tr info={data}></Tr>
                    </Table>

                    
                        

                        


                    
                </Row>
            </Container>
        </div>
    );
}

export default LoanList;






















