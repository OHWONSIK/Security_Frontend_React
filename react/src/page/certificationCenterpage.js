import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Incidentnotificationpage.module.css";
import TopContent from "../components/TopContent";
import CertificationCenter from "../components/certificationCenter";

const CertificationCenterpage = () => {
    return (
        <div>
            {/* <TopContent /> */}
            <Container fluid>
                <Row>
                    <Col lg={2}>
                        <Leftlist />
                    </Col>

                    <Col lg={10}>
                        <CertificationCenter />
                    </Col>
                </Row>
            </Container>
            <BottomContent />
        </div>
    );
};

export default CertificationCenterpage;
