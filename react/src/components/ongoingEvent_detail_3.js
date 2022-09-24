import styles from "../css/ongoingEvent_detail.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import Axios from "axios";

const ongoingEvent_detail_3 = () => {

    return (
        <div>
            <Row>
                <Col>
                    <div className={styles.c_text}>제목 : 상명은행 코딩스쿨 무료수강 이벤트</div>
                </Col>
                <Col>
                    <div className={styles.c_d_text}>2022-09-18</div>
                </Col>
            </Row>
            <Row>
                <div className={styles.m_text}>
                    <Row>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event1_001.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event1_002.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event1_003.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>
                        <img
                            className={styles.item}
                            src="img/event1_004.png"
                            alt="Second slide"
                            />
                        </div>
                        <div>

                        <img
                            className={styles.item}
                            src="img/event1_005.png"
                            alt="Second slide"
                            />
                        </div>

                        <div>

                        <img
                            className={styles.item}
                            src="img/event1_006.png"
                                alt="Second slide"
                                useMap="#event3"
                            />
                        <map name="event3" id="event3">
                                <area shape="rect" coords="248,500,831,619" href="/signup"></area>
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

export default ongoingEvent_detail_3
