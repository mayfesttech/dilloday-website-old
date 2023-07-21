import React from 'react';
import logo from '../../images/background_trans.png'
import '../../styles/App.css';
import '../../styles/popup.css'
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap"
import {useState} from 'react';
import {render} from "react-dom";
import Pdf from '../../images/announcement-2020.pdf'

function Popup() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DILLO DAY 2020 FESTIVAL UPDATES</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="popup_text">
                    <Nav.Link className="navlink" href="/lineup">👀👀👀👀</Nav.Link>
                    </p>
                </Modal.Body>


                <Modal.Footer className="navlink">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;
