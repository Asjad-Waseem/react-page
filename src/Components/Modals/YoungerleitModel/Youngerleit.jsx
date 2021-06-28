import React from "react";
import "./Youngerleit.css";
import { Modal, Button, Row, Col, Form ,Table} from "react-bootstrap";

export default function Youngerleit(props) {
  const { show, handleClose,edit,handleEdit } = props;
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
                  <option value="Youngerleit">Pending Youngerman</option>
                  <option value="Sessions">Pending Financial</option>
                  <option value="Sessions">Active</option>

                </select>
              </div>
              <p className="p-chaim">Comfort Health Status: <span className="bold-model"> Approved</span></p>
              <p className="p-chaim">Youngerman: <span className="bold-model">Moshe Rosen</span></p>
              <p className="p-chaim">Schedule: </p>
              <div className="mb-3 text-center" >
                <Form.Label className="radio-label">Sun-Thurs</Form.Label>
                <Form.Label className="radio-label">Sun-Fri</Form.Label>
                <Form.Label className="radio-label">Custom</Form.Label>

              </div>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-0 radio-model" >
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}

                    />
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
                <div className="box-model">
                </div>
                <Row>
                  <Col md={6}>
                  <label className="start-date">Rate</label>

                    <Form.Control type="input" placeholder="Rate" className="input-model" />

                  </Col>
                  <Col md={6}>
                    <p className="p-model-date"> Reg. Rate: $20</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <label className="start-date">Start Date</label>
                    <Form.Control type="date" placeholder="Start Date" className="input-model"/>

                  </Col>
                  <Col md={6}>
                    <p className="p-model-date1">Add End Date</p>

                  </Col>
                </Row>
                <Row>               <Col md={6}>
                <label className="start-date">Time From</label>
                
                  <Form.Control type="time" placeholder="Time From" className="input-model"/>

                </Col>
                  <Col md={6}>
                  <label className="start-date">Time To</label>

                    <Form.Control type="time" placeholder="Time To" className="input-model"/>

                  </Col>
                </Row>
                <label className="start-date">Note</label>

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
          <h6 className="left-jj">Potentail Youngerleit: <span className="span-confirm">(Select to confirm)</span></h6>
          <div className="box-model">
                </div>
                <div className="inner-box">
                <h6 className="available" >Available Youngerleit:</h6>
                <Row>
                <label className="start-date">Filters:</label>

                  <Col md={6}>
                    <Form.Control type="input" placeholder="Rate From" className="input-model-right"/>

                  </Col>
                  <Col md={6}>
                  <Form.Control type="input" placeholder="Rate To" className="input-model-right"/>

                  </Col>
                </Row>
                <Row>

                  <Col md={6}>
                  <select className="select-model">
                    <option>Boro Park</option>
                    </select>
                  </Col>
                  <Col md={6}>
                  <select className="select-model">
                    <option>Specialties</option>
                    </select>

                  </Col>
                </Row>
                <button className="load-result" variant="primary">Load Result</button>{' '}
                    <div className="table-style-card">
                <Table responsive >

          <tbody>
            <tr className="row-font">
              <td className="moshe-blue">Moshe Rosen</td>
              <td>$20</td>
              <td>ADHD,Other</td>
              <td>Approved</td>
              <td><button className="load-Select">Select</button></td>
            </tr>
            <tr className="row-font">
              <td className="moshe-blue">Moshe Rosen</td>
              <td>$20</td>
              <td>ADHD,Other</td>
              <td>Approved</td>
              <td><button className="load-Select">Select</button></td>
            </tr>            <tr className="row-font">
              <td className="moshe-blue">Moshe Rosen</td>
              <td>$20</td>
              <td>ADHD,Other</td>
              <td>Approved</td>
              <td><button className="load-Select">Select</button></td>
            </tr>
            <tr className="row-font">
              <td className="moshe-blue">Moshe Rosen</td>
              <td>$20</td>
              <td>ADHD,Other</td>
              <td>Approved</td>
              <td><button className="load-Select">Select</button></td>
            </tr>
            

          </tbody>
        </Table>
        </div>
                </div>
                <button className="load-result" onClick={handleClose}>
          Save 
        </button>
                <button className="load-result1"  onClick={handleClose}>
          Cancel
        </button>

          </Col>
        </Row>
      </Modal.Body>
    </Modal>

    <Modal size="xs" show={edit} onHide={handleEdit} centered>

      <Modal.Body>

            <h6 >Edit Youngerman</h6>

            <div className="left-model-younger">
              <div className="flex-model">
                <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
                <select className="select-modell" >
                  <option value="Youngerleit">Pending Youngerman</option>
                  <option value="Sessions">Pending Financial</option>
                  <option value="Sessions">Active</option>

                </select>
              </div>
              <p className="p-chaim">Comfort Health Status: <span className="bold-model"> Approved</span></p>
              <p className="p-chaim">Youngerman: <span className="bold-model">Moshe Rosen</span></p>
              <p className="p-chaim">Schedule: </p>
              <div className="mb-3 text-center" >
                <Form.Label className="radio-label">Sun-Thurs</Form.Label>
                <Form.Label className="radio-label">Sun-Fri</Form.Label>
                <Form.Label className="radio-label">Custom</Form.Label>

              </div>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-0 radio-model" >
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}

                    />
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label=""
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
                <div className="box-model">
                </div>
                <Row>
                  <Col md={6}>
                  <label className="start-date">Rate</label>

                    <Form.Control type="input" placeholder="Rate" className="input-model" />

                  </Col>
                  <Col md={6}>
                    <p className="p-model-date"> Reg. Rate: $20</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <label className="start-date">Start Date</label>
                    <Form.Control type="date" placeholder="Start Date" className="input-model"/>

                  </Col>
                  <Col md={6}>
                    <p className="p-model-date1">Add End Date</p>

                  </Col>
                </Row>
                <Row>               <Col md={6}>
                <label className="start-date">Time From</label>
                
                  <Form.Control type="date" placeholder="Time From" className="input-model"/>

                </Col>
                  <Col md={6}>
                  <label className="start-date">Time To</label>

                    <Form.Control type="date" placeholder="Time To" className="input-model"/>

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
                <button className="load-result1"  onClick={handleEdit}>
          Close
        </button>


      </Modal.Body>

    </Modal>
    </>
  )
}