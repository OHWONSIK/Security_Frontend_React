import {Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loanapply.module.css';


function Loanapply() {
  return (
    <div className="Loanapply">
      <Container fluid>
        <Row className={styles.contentTop}>
            <Col lg={3}></Col>
            <Col lg={1}>
                <h2 className={styles.loanapply}>대출신청</h2>
                <h5 className={styles.loanproduct}>대출상품</h5>
                <h5 className={styles.interestrate}>이율</h5>
                <h5 className={styles.maximum}>최대한도</h5>
                <h5 className={styles.loanamount}>대출금액</h5>
            </Col>
            <Col lg={5}>
                <Form className={styles.loanproductcheckbox}>
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
                    </Form>

                    <h4 className={styles.interestrateguide}>3.7%</h4>

                    <h4 className={styles.maximumguide}>1억원</h4>

                    <InputGroup className={styles.transferamountinput}>
                <FormControl />
                <InputGroup.Text>원</InputGroup.Text>
                </InputGroup>
                <div className={styles.buttonlist}>
                    <Button className={styles.tenmillionbutton} variant="secondary" size="md"> 1000만    
                    </Button>
                            
                    <Button className={styles.millionbutton} variant="secondary" size="md">
                        100만    
                    </Button>

                    <Button className={styles.fivehundredthousandbutton} variant="secondary" size="md">
                        50만    
                    </Button>
                    
                    <Button className={styles.maximumbutton} variant="secondary" size="md">
                        최대한도    
                    </Button>
                    
                    <Button className={styles.correctionbutton} variant="secondary" size="md">
                        정정    
                    </Button>
                </div>

                <Button className={styles.applybutton}variant="primary" size="lg" >
                    <Link to ="/loancomplete">신청</Link>
                </Button>
            </Col>
            <Col lg={3}></Col>

            
        </Row>
      </Container>
    </div>
  );
}

export default Loanapply;






















