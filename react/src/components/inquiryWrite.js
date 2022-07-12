import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/inquiryWrite.module.css';


function InquiryWrite() {
    return (
        <div className={styles.InquiryWrite}>
            <h4 className={styles.inquiryWrite}>1:1문의 작성</h4>
            <h4 className={styles.title}>제목</h4>
            <Form.Control type="title" placeholder="제목을 입력해주세요" />
            <h4 className={styles.content}>내용</h4>
            <Form.Control as="textarea" rows={12} placeholder="내용을 입력해주세요"/>
            <Button className={styles.completebutton} variant="primary">
                <Link to="/">완료</Link>
            </Button>{' '}
            
            
        </div>
    );
}

export default InquiryWrite;






















