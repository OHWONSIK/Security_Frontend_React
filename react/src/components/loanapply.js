import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanapply.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';



function Loanapply() {
    const navigate = useNavigate();
    const location = useLocation()
    const accountNumber = location.state[0].accountNumber
    const loanType = location.state[0].loanType
    const [loanIndex, setLoanIndex] = React.useState('');
    // const interestRate = location.state[0].interestRate

    // let loanType
    const [inputAmount, setInputAmount] = React.useState('');
    // const [info2, setInfo2] = React.useState([]);
    const [interestRate, setInterestRate] = React.useState([]);
    const [interestType, setInterestType] = React.useState([]);
    let i

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let date2 = date.getDate();
    let loanApplyDate;


    useEffect(() => {

        // console.log(accountNumber, loanType, loanIndex)
        // if (loanType === '상명등록금대출') {
        //     setInterestRate('1.7%')
        //     setLoanIndex(1)
        // }
        // else if (loanType === '상명신용대출') {
        //     setInterestRate('3.7%')
        //     setLoanIndex(2)
        // }
        // else if (loanType === '상명비상금대출') {
        //     setInterestRate('5.7%')
        //     setLoanIndex(3)
        // }

        Axios.get(
            "/api/v1/guest/loanlist",
        )
            .then((res) => {
                for (i = 0; i < res.data.data.length; i++) {
                    if (loanType == res.data.data[i].title) {
                        setInterestRate(res.data.data[i].interestRate)
                        setInterestType(res.data.data[i].interestType)
                        setLoanIndex(res.data.data[i].id)
                    }
                }
            })
            .catch((error) => {
                alert(error.response.data.message)
            });
    }, []);


    // useEffect(() => {
    //     Axios.get('/users/loanlist')
    //         .then(res => {setInfo2(res.data.data)
    //             setInterestRate(res.data.data.interestRate)
    //         })
    //         // .then(res => console.log(res.data.data))
    //         .catch(err => console.log(err));
    // }, []);

    const handleInputAmount = (e) => {
        setInputAmount(e.target.value)
    }

    // const handleLoanType = (e) => {
    //     loanType = e.target.options[e.target.selectedIndex].text
    // };

    const onClickReset = () => {
        setInputAmount('')
    }

    // const onClickTenMillion = () => {
    //     if (inputAmount === '')
    //         setInputAmount(10000000)
    //     else
    //         setInputAmount(parseInt(inputAmount) + 10000000)
    // }

    const onClickMillion = () => {
        if (inputAmount === '')
            setInputAmount(1000000)
        else
            setInputAmount(parseInt(inputAmount) + 1000000)
    }

    const onClickFiveHundredThousand = () => {
        if (inputAmount === '')
            setInputAmount(500000)
        else
            setInputAmount(parseInt(inputAmount) + 500000)
    }

    const onClickMaximum = () => {
        setInputAmount(5000000)
    }

    const onClickLoan = () => {
        // console.log(setInfo2)
        // setAccountNum(accountNumber)
        // if (loanType === undefined || loanType === '대출종류를 선택해주세요')
        //     alert('대출종류를 선택해주세요')

        if (month < 10) month = "0" + month;
        else month = month;
        if (date2 < 10) date = "0" + date2;
        else date2 = date2;

        loanApplyDate = year + '-' + month + '-' + date2

        console.log(Number(accountNumber), inputAmount, loanType)
        if (inputAmount.length === 0)
            alert('대출금액이 비어있습니다')
        else if (inputAmount > 5000000)
            alert('대출금액을 최대한도 이하로 작성해주세요')
        else {
            Axios.post('/api/v1/user/loans', {   
                    "loginId": sessionStorage.getItem('loginId'),
                    "accountNumber": accountNumber,
                    "amount": inputAmount,
                    "loanList": loanIndex
            }, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                    "Authorization-refresh": localStorage.getItem('jwtRefreshToken'),
                }
            }
            )
                .then(res => {

                    if (res.data.checker === true) {

                        navigate('/loancomplete',
                            {
                                state: [
                                    {
                                        accountNumber: accountNumber,
                                        inputAmount: inputAmount,
                                        loanType: loanIndex,
                                        loginId: sessionStorage.getItem('loginId'),
                                        interestRate: interestRate,
                                        interestType: interestType,
                                        loanApplyDate: loanApplyDate
                                    }
                                ]
                            }
                        )
                    }
                    else
                        alert(res.data.message)
                })
                .catch((error) => {
                    alert(error.response.data.message)
                });
        }
    }

    // const Tr2 = ({ info }) => {
    //     return (
    //         <Form.Select className={styles.loantypeinput} aria-label="Default select example" onChange={handleLoanType}>
    //             <option>대출종류를 선택해주세요</option>
    //             {
    //                 info.map((item, idx) => {
    //                     return (
    //                         <Td2 key={item.title} item={item} />
    //                     )
    //                 })
    //             }
    //         </Form.Select>
    //     );
    // };

    // const Td2 = ({ item }) => {
    //     return (
    //         <>
    //             <option value={item.title}>{item.title}</option>
    //         </>
    //     )
    // }

    // console.log(loanType)

    return (
        <div className="Loanapply">
            <Container fluid>
                <Row className={styles.contentTop}>
                    <Col lg={3}></Col>
                    <Col lg={1}>
                        <h2 className={styles.loanapply}>대출신청</h2>
                        <h5 className={styles.loanproduct}>대출상품</h5>
                        <h5 className={styles.interestrate}>금리</h5>
                        <h5 className={styles.maximum}>최대한도</h5>
                        <h5 className={styles.loanamount}>대출금액</h5>
                    </Col>
                    <Col lg={5}>
                        {/* <Tr2 info={info2} /> */}
                        <h4 className={styles.loantypeguide}>{loanType}</h4>

                        <h4 className={styles.interestrateguide}>{interestRate}% {interestType}</h4>

                        <h4 className={styles.maximumguide}>5,000,000원</h4>

                        <InputGroup className={styles.transferamountinput}>
                            <FormControl onChange={handleInputAmount} value={inputAmount} />
                            <InputGroup.Text>원</InputGroup.Text>
                        </InputGroup>
                        <div className={styles.buttonlist}>
                            {/* <Button className={styles.tenmillionbutton} variant="secondary" size="md" onClick={onClickTenMillion}> 1000만
                            </Button> */}

                            <Button className={styles.millionbutton} variant="secondary" size="md" onClick={onClickMillion}>
                                100만
                            </Button>

                            <Button className={styles.fivehundredthousandbutton} variant="secondary" size="md" onClick={onClickFiveHundredThousand}>
                                50만
                            </Button>

                            <Button className={styles.maximumbutton} variant="secondary" size="md" onClick={onClickMaximum}>
                                최대한도
                            </Button>

                            <Button className={styles.correctionbutton} variant="secondary" size="md" onClick={onClickReset}>
                                정정
                            </Button>
                        </div>

                        <Button className={styles.applybutton} onClick={onClickLoan} variant="primary" size="lg" >
                            신청
                        </Button>
                    </Col>
                    <Col lg={3}></Col>


                </Row>
            </Container>
        </div>
    );
}

export default Loanapply;






















