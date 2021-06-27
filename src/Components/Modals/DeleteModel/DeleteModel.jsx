import React from "react";
import "./DeleteModel.css";
import { Modal, } from "react-bootstrap";

export default function DeleteModel(props) {
    const { del , handleDelete } = props;
    return (


        <Modal size="md" show={del} onHide={handleDelete} centered>

            <Modal.Body>
                <h6 >Delete Schedule?</h6>

                        <p className="text-delete">This will removethe schedule including all previous sessions from history.</p>
                        <p className="text-delete">If you want to end the session from now on,select 'End Schedule'.</p>

                <button className="load-result" onClick={handleDelete}>
                    Cancel
                </button>
                <button className="load-del" onClick={handleDelete}>
                    Delete
                </button>

            </Modal.Body>

        </Modal>
    )
}