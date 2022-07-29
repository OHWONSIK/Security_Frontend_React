import { Nav } from "react-bootstrap";
import { Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "../css/Eventfinished.module.css";
import Pagination from "./pagination";
import PageItem from "react-bootstrap/PageItem";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";

function Eventfinished() {
  const [info, setInfo] = useState([]);
  const [posts, setPosts] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    Axios.get("/cont/events/done")
      .then((res) => setInfo(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const Tr = ({ info }) => {
    // let infoReverse = info.slice(0).reverse()
    return (
      <tbody>
        {info.map((item, idx) => {
          // console.log(item)
          return <Td key={item.id} item={item} />;
        })}
      </tbody>
    );
  };

  const Td = ({ item }) => {
    return (
      <>
        <tr>
          <td className={styles.index}>{item.id}</td>
          <td className={styles.title}>{item.title}</td>
          <td className={styles.date}>{item.createDate}</td>
        </tr>
      </>
    );
  };

  return (
    <div>
      <Nav fill className={styles.nav} variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/ongoingevent" active>
            진행중인 이벤트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/eventfinished" active>
            종료된 이벤트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/winnerannouncement" active>
            당첨자 발표
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>

          <Tr info={currentPosts(info.slice(0))}></Tr>
        </Table>
        <Row>
          {/* <Col lg={4}></Col>
        <Col lg={4}> */}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={info.length}
            paginate={setCurrentPage}
          >
            {/* <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last /> */}
          </Pagination>
          {/* </Col>
        <Col lg={4}></Col> */}
        </Row>
      </div>
    </div>
  );
}

export default Eventfinished;
