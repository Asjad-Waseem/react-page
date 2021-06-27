import React from "react";
// import "./DeleteModel.css";
import { Modal,Form } from "react-bootstrap";

export default function EndSchedule(props) {
    const { end, handleEnd } = props;
    return (


        <Modal size="md" show={end} onHide={handleEnd} centered>

            <Modal.Body>
                <h6 >End Schedule</h6>
                <div className="text-delete">
                    <label className="start-date">Schedule End-Date</label>

                    <Form.Control type="date" className="input-model" />
                </div>
                <button className="load-result" onClick={handleEnd}>
                End Schedule
                </button>
                <button className="load-del" onClick={handleEnd}>
                    Cancel
                </button>

            </Modal.Body>

        </Modal>
    )
}