import { Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "../css/Netsec.module.css";

import Pagination from "./pagination";
import PageItem from "react-bootstrap/PageItem";

function Netsec() {
  const [info, setInfo] = useState([]);
  const [posts, setPosts] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(14);

  useEffect(() => {
    Axios.get("/api/v1/guest/cont/security-notices")
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
          <td className={styles.date}>{item.createdDate}</td>
        </tr>
      </>
    );
  };

  return (
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
  );
}

export default Netsec;
