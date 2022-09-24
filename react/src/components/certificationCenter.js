import { Row, Col } from "react-bootstrap";
import styles from "../css/certificationCenter.module.css";

const certificationCenter = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className={styles.c_text}>인증센터</div>
                </Col>
            </Row>
            <Row>
                <div className={styles.i_text}> 안내 </div>
            </Row>
            <Row>
                <div className={styles.m_text}>
                    <Row></Row>
                    <img
                        className={styles.image}
                        src="img/issuance.png"
                        alt="Second slide"
                    />
                    <Row></Row>
                </div>
            </Row>
        </div>
    );
};

export default certificationCenter;
