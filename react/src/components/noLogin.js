import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/noLogin.module.css";
import Button from "react-bootstrap/Button";

const NoLogin = () => {
    return (
        <div>
            <Row>
                <div className={styles.ca_text}>
                    회원님은 현재 로그인이 되어있지 않습니다. 로그인 후 이용해주세요.
                </div>
            </Row>
            <Row>
                {/* <Col lg={6}> */}
                <Col sm={6}>
                    <a href="/login">
                        <Button variant="primary" className={styles.ca_button}>
                            로그인 하러가기
                        </Button>{" "}
                    </a>
                    </Col>

                <Col sm={6}>

                    <a href="/signup">

                        <Button variant="primary" className={styles.ca_button2}>
                            회원가입 하러가기
                        </Button>{" "}
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default NoLogin;
