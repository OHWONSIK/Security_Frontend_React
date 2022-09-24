import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Commonpage.module.css";
import TopContent from "../components/TopContent";
import OngoingEvent_detail_3 from "../components/ongoingEvent_detail_3";

const OngoingEvent_detailpage_3 = () => {
    return (
        <div>
            {/* <TopContent /> */}
            <Container fluid>
                <Row>
                    <Col lg={2}>
                        <Leftlist />
                    </Col>

                    <Col lg={10}>
                        <OngoingEvent_detail_3 />
                    </Col>
                </Row>
            </Container>
            <BottomContent />
        </div>
    );
};

export default OngoingEvent_detailpage_3;
