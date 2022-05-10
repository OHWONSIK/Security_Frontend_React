import {Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/transfer.module.css';


function Transfer() {
    return (
    <div className="Transfer">
        <Container fluid>
        <Row className={styles.contentTop}>
            <Col lg={3}></Col>
            <Col lg={1}>
                <h2 className={styles.banktransfer}>계좌이체</h2>
                <h5 className={styles.depositinformation}>입금정보</h5>
                <h5 className={styles.depositaccountnumber}>입금계좌번호</h5>
                <h5 className={styles.transferamount}>이체금액</h5>
                <h5 className={styles.receivingaccountkmemo}>받는통장 메모</h5>
                <h5 className={styles.myaccountmemo}>내통장 메모</h5>
            </Col>
            <Col lg={5}>
                <Form.Select className={styles.banklist}aria-label="Default select example">
                <option>입금할 은행을 선택하세요</option>
                <option value="1">상명은행</option>
                <option value="2">신한은행</option>
                <option value="3">국민은행</option>
                </Form.Select>
                <Form.Control className={styles.accountinput} as="textarea" rows={1} placeholder="-없이 입력"/>
                <InputGroup className={styles.transferamountinput}>
                <FormControl />
                <InputGroup.Text>원</InputGroup.Text>
                </InputGroup>
                <div className={styles.buttonlist}>
                    <Button className={styles.millionbutton} variant="secondary" size="md">
                        100만    
                    </Button>
                            
                    <Button className={styles.fivehundredthousandbutton} variant="secondary" size="md">
                        50만    
                    </Button>
                    
                    <Button className={styles.onehundredthousandbutton} variant="secondary" size="md">
                        10만    
                    </Button>
                    
                    <Button className={styles.fullamountbutton} variant="secondary" size="md">
                        전액    
                    </Button>

                    <Button className={styles.correctionbutton} variant="secondary" size="md">
                        정정    
                    </Button>
                </div>
                <Form.Control className={styles.receivingaccountkmemoinput} as="textarea" rows={1} placeholder="내용을 입력해주세요"/>

                <Form.Control className={styles.myaccountmemoinput} as="textarea" rows={1} placeholder="내용을 입력해주세요"/>
                
                <Button className={styles.nextbutton}variant="primary" size="lg" >
                    <Link to = "/certification">다음</Link>
                </Button>
            </Col>
            <Col lg={3}></Col>

            
        </Row>
      </Container>
    </div>
  );
}

export default Transfer;






















