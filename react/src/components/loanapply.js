import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanapply.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';



function Loanapply() {
    const navigate = useNavigate();
    const location = useLocation()
    const accountNumber = location.state
    let loanType
    const [inputAmount, setInputAmount] = React.useState('');

    const handleInputAmount = (e) => {
        setInputAmount(e.target.value)
    }

    const handleLoanType = (e) => {
        loanType = e.target.options[e.target.selectedIndex].text
    };

    const onClickReset = () => {
        setInputAmount('')
    }

    const onClickTenMillion = () => {
        if (inputAmount === '')
            setInputAmount(10000000)
        else
            setInputAmount(parseInt(inputAmount) + 10000000)
    }

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

    const onClickLoan = () => {
        // setAccountNum(accountNumber)
        if (loanType === undefined || loanType === '대출종류를 선택해주세요')
            alert('대출종류를 선택해주세요')
        else if (inputAmount.length === 0)
            alert('대출금액이 비어있습니다')
        else if (inputAmount > 100000000)
            alert('대출금액을 최대한도 이하로 작성해주세요')
        else {
            Axios.post('users/loan', {   
                    "accountNumber": accountNumber,
                    "amount": inputAmount,
                    "loanList": loanType,
                    "loginId": sessionStorage.getItem('loginId')
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
                                        loanType: loanType,
                                        loginId: sessionStorage.getItem('loginId'),
                                    }
                                ]
                            }
                        )
                    }
                    else
                        alert(res.data.message)
                })

                .catch()
        }
    }

    console.log(loanType)

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
                        <Form.Select className={styles.loantypeinput} aria-label="Default select example" onChange={handleLoanType}>
                            <option>대출종류를 선택해주세요</option>
                            <option value="1">상명등록금대출</option>
                            <option value="2">상명신용대출</option>
                            <option value="3">상명비상금대출</option>
                        </Form.Select>
                        {/* <Form className={styles.loanproductcheckbox}>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="lg-3">
                        <Form.Check
                            className={styles.productcheck1}
                            inline
                            label="상명 신용대출"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}

                            
                        />
                        <Form.Check
                            className={styles.productcheck2}
                            inline
                            label="상명 비상금대출"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            className={styles.productcheck3}
                            inline
                            label="상명 등록금대출"
                            name="group3"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        </div>
                    ))}
                    </Form> */}

                        <h4 className={styles.interestrateguide}>3.7%</h4>

                        <h4 className={styles.maximumguide}>1억원</h4>

                        <InputGroup className={styles.transferamountinput}>
                            <FormControl onChange={handleInputAmount} value={inputAmount} />
                            <InputGroup.Text>원</InputGroup.Text>
                        </InputGroup>
                        <div className={styles.buttonlist}>
                            <Button className={styles.tenmillionbutton} variant="secondary" size="md" onClick={onClickTenMillion}> 1000만
                            </Button>

                            <Button className={styles.millionbutton} variant="secondary" size="md" onClick={onClickMillion}>
                                100만
                            </Button>

                            <Button className={styles.fivehundredthousandbutton} variant="secondary" size="md" onClick={onClickFiveHundredThousand}>
                                50만
                            </Button>

                            <Button className={styles.maximumbutton} variant="secondary" size="md">
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






















