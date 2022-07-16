import Table from "react-bootstrap/Table";
import styles from "../css/Customerservice.module.css";
// import Pagination from "react-bootstrap/Pagination";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "./pagination";
import Axios from "axios";

const Customerservice = () => {
  const [info, setInfo] = useState([]);
  const [posts, setPosts] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    Axios.get("/cont/counsels", {
      params: { userId: sessionStorage.getItem("loginId") },
    })

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
        <Col lg={8}>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={info.length}
            paginate={setCurrentPage}
          ></Pagination>
        </Col>

        <Col lg={4}>
          <Button className={styles.write_style} variant="secondary" size="lg">
            <Link to="/qapage">글쓰기</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Customerservice;
