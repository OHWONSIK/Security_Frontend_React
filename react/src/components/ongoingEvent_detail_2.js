import styles from "../css/ongoingEvent_detail.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import Axios from "axios";

const ongoingEvent_detail_2 = () => {

    return (
        <div>
            <Row>
                <Col>
                    <div className={styles.c_text}>제목 : 상명은행 지식재산권 교육수강 이벤트</div>
                </Col>
                <Col>
                    <div className={styles.c_d_text}>2022-09-04</div>
                </Col>
            </Row>
            <Row>
                <div className={styles.m_text}>
                    <Row>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_001.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_002.png"
                            alt="Second slide"
                            />
                        </div>

                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_003.png"
                            alt="Second slide"
                            />
                        </div>

                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_004.png"
                            alt="Second slide"
                            />
                        </div>

                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_005.png"
                            alt="Second slide"
                            />
                        </div>

                        <div>
                        <img
                            className={styles.item}
                            src="img/event001_006.png"
                            alt="Second slide"
                            />
                        </div>


                    </Row>

                    <Row></Row>
                </div>
            </Row>
            <Row>
                <a href="/ongoingevent">
                    <Button variant="primary" className={styles.c_button1}>
                        목록
                    </Button>{" "}
                </a>
            </Row>
        </div>
    );
};

export default ongoingEvent_detail_2
