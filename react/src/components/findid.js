import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/findid.module.css';
import React, { useEffect } from 'react';
import Axios from "axios";



function Findid() {
    let id;

    const navigate = useNavigate();
    const [inputName, setInputName] = React.useState('');
    const [inputEmail, setInputEmail] = React.useState('');

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onClickFind();
        }
    }

    const onClickFind = () => {
        if (inputName.length === 0)
            alert("이름을 입력해주세요");
        else if (inputEmail.length === 0)
            alert("이메일을 입력해주세요")
        else {
            Axios.post("/api/v1/user/find_login_id", {
                name: inputName,
                email: inputEmail
            })
                .then((res) => {
                    if (res.data.checker === true) {
                        console.log(res.data.data);
                        // console.log(res.data.data)
                        // sessionStorage.setItem('Temp_Password', res.data.data)
                        id = res.data.data;
                        // document.location.href = '/temporarypasswordguide'
                        navigate("/idguide", { state: id });
                    } else {
                        // console.log(res.data)
                        alert(res.data.message);
                    }
                })

                .catch();
        }
    };

    return (
        <div className={styles.Findid}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.findid}>아이디 찾기</h2>
                        <h4 className={styles.findidnotice}>아이디는 가입시 입력하신 이름과 이메일을 통해 찾으실 수 있습니다.</h4>
                        <Form.Control className={styles.inputname} type="name" placeholder="이름"
                            onChange={handleInputName}
                            onKeyPress={onKeyPress} />
                        <Form.Control className={styles.inputemail} type="email" placeholder="이메일"
                            onChange={handleInputEmail}
                            onKeyPress={onKeyPress} />
                        <Button className={styles.findbutton} variant="primary" size="lg"
                            onClick={onClickFind}>찾기
                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Findid;






















