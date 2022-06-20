import BottomContent from "../components/BottomContent";
import Leftlist from "../components/Leftlist";
import { Container } from "react-bootstrap";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import Newnews from "../components/Newnews";
import styles from "../css/Newnewspage.module.css";
import TopContent from "../components/TopContent";

const Newnewspage = () => {
  return (
    <div>
      {/* <TopContent /> */}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Leftlist />
          </Col>
          <Col lg={1}></Col>
          <Col lg={8}>
            <div className={styles.newnews_text}> 새소식</div>
            <Newnews />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <BottomContent />
    </div>
  );
};

export default Newnewspage;
