import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                로그인
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor="username">사용자 이름:</label><br/>
                        <input type="text" id="username" name="username"/><br/>
                        <label htmlFor="password">비밀번호:</label><br/>
                        <input type="password" id="password" name="password"/><br/><br/>
                        <input type="submit" value="로그인"/>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Example;