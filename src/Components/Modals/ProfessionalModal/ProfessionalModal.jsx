import React from "react";
import "./ProfessionalModal.css";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default function ProfessionalModal(props) {
  const { show, handleClose,handleEdit,edit } = props;
  return (
<>

    <Modal size="lg" show={show} onHide={handleClose} centered>

      <Modal.Body>
        <Row>
          <Col md={5}>
            <h6 >Add Youngerman</h6>

            <div className="left-model-younger">
              <div className="flex-model">
                <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
                <select className="select-modell" >
                  <option value="Youngerleit">Pending Professional</option>
                  <option value="Sessions">Pending Financial</option>
                  <option value="Sessions">Active</option>

                </select>
              </div>
              <p className="p-chaim">Professional: <span className="bold-model">Moshe Rosen</span></p>
              <Col md={6}>
                    <label className="start-date">Professional Type</label>
                    <select className="select-modell" >
                  <option value="Youngerleit">Keriah</option>
                  <option value="Sessions">Therapy</option>
                  <option value="Sessions">Other</option>

                </select>

                  </Col>
                  <Col md={6}>
                    <label className="start-date">Schedule</label>
                    <select className="select-modell" >
                  <option value="Youngerleit">Weekly</option>
                  <option value="Sessions">Monthly</option>
                  <option value="Sessions">Custom</option>

                </select>

                  </Col>

              <Form>

                <div className="box-model">
                </div>

                <Row>
                  <Col md={6}>
                    <label className="start-date">Start Date</label>
                    <Form.Control type="date" placeholder="Start Date" className="input-model" />

                  </Col>
                  <Col md={6}>
                    <p className="p-model-date1">Add End Date</p>

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
          </Col>
          <Col md={7}>
            <h6 >Selected Professional</h6>
            <div className="box-model">

            </div>
        <button className="load-professional" >Load Result</button>
            <div className="inner-box">
              <h6 className="available" >Available Professionals:</h6>

            </div>
            <button className="load-result" onClick={handleClose}>
              Save
            </button>
            <button className="load-result1" onClick={handleClose}>
              Close
            </button>

          </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>

    <Modal size="xs" show={edit} onHide={handleEdit} centered>

<Modal.Body>

      <h6 >Edit Youngerman</h6>

      <div className="left-model-younger">
        <div className="flex-model">
          <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
          <select className="select-modell" >
            <option value="Youngerleit">Pending Professional</option>
            <option value="Sessions">Pending Financial</option>
            <option value="Sessions">Active</option>

          </select>
        </div>
        <p className="p-chaim">Professional: <span className="bold-model">Moshe Rosen</span></p>
        <Col md={6}>
              <label className="start-date">Professional Type</label>
              <select className="select-modell" >
            <option value="Youngerleit">Keriah</option>
            <option value="Sessions">Therapy</option>
            <option value="Sessions">Other</option>

          </select>

            </Col>
            <Col md={6}>
              <label className="start-date">Schedule</label>
              <select className="select-modell" >
            <option value="Youngerleit">Weekly</option>
            <option value="Sessions">Monthly</option>
            <option value="Sessions">Custom</option>

          </select>

            </Col>

        <Form>

          <div className="box-model">
          </div>

          <Row>
            <Col md={6}>
              <label className="start-date">Start Date</label>
              <Form.Control type="date" placeholder="Start Date" className="input-model" />

            </Col>
            <Col md={6}>
              <p className="p-model-date1">Add End Date</p>

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
    
      <button className="load-result" onClick={handleEdit}>
        Save
      </button>
      <button className="load-result1" onClick={handleEdit}>
        Close
      </button>


</Modal.Body>
{/* <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer> */}
</Modal>
</>
  )
}