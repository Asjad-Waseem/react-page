import React from "react";
// import "./Appointment.css";
import { Modal, Row, Col, Form } from "react-bootstrap";

export default function Appointment(props) {
    const { show, handleClose } = props;
    return (


        <Modal size="md" show={show} onHide={handleClose} centered>

            <Modal.Body>
                <h6 >Add Appointment</h6>

                <div className="left-model-younger">
                    <div className="flex-model">
                        <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
                    </div>

                    <Form>

                        <Row>
                            <Col md={6}>
                                {/* <label className="start-date">Professional</label> */}
                                <label className="start-date">Professional</label>

                                <Form.Control type="input" placeholder="Select Professional" className="input-model" />


                            </Col>
                            <Col md={6}>
                                <label className="start-date">Date</label>

                                <Form.Control type="date" className="input-model" />
                            </Col>
                        </Row>

                        <Row>               <Col md={6}>
                            <label className="start-date">Time From</label>

                            <Form.Control type="date" placeholder="Time From" className="input-model" />

                        </Col>
                            <Col md={6}>
                                <label className="start-date">Time To</label>

                                <Form.Control type="date" placeholder="Time To" className="input-model" />

                            </Col>
                        </Row>
                        <Form.Control
                            className="input-model"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '70px' }}
                        />
                    </Form>
                </div>
                <button className="load-result" onClick={handleClose}>
                    Save
                </button>
                <button className="load-result1" onClick={handleClose}>
                    Close
                </button>

            </Modal.Body>

        </Modal>
    )
}