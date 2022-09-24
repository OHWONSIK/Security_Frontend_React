import styles from "../css/ongoingEvent_detail.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import Axios from "axios";

const ongoingEvent_detail = () => {

    return (
        <div>
            <Row>
                <Col>
                    <div className={styles.c_text}>제목 : 상명카드 신규발급 이벤트</div>
                </Col>
                <Col>
                    <div className={styles.c_d_text}>2022-09-01</div>
                </Col>
            </Row>
            <Row>
                <div className={styles.m_text}>
                    <Row>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event01_001.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event01_002.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event01_003.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event01_004.png"
                            alt="Second slide"
                            />
                        </div>
                        <div className={styles.item}>
                            <img
                                className={styles.item}
                                src="img/event01_005.png"
                                alt="Second slide"
                                useMap="#event1"
                            />
                            <map name="event1" id="event1">
                                <area shape="rect" coords="316,853,763,958" href="/cardissuance"></area>
                            </map>
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

export default ongoingEvent_detail
