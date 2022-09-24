import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/signupcomplete.module.css';


function Signupcomplete() {
    return (
        <div className={styles.Event}>
            <Container fluid>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <img className={styles.checkimage}
                            src="img/check.png"
                            alt="checkimage"
                        />
                        <h1 className={styles.completemessage}>상명은행 회원가입이 완료되었습니다.</h1>
                        <h3 className={styles.noticemessage}>회원님은 상명은행의 모든 기능을 사용하실 수 있습니다. 회원접속후 이용가능합니다.</h3>
                        <a href="/login">
                        <Button className={styles.loginbutton} variant="primary">
                            로그인 하러가기
                        </Button>{' '}
                    </a>

                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </div >
);
}

export default Signupcomplete;






















