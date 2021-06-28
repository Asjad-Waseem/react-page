import React from "react";
import "./Card.css";
import {Table, DropdownButton,Dropdown} from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Appointment from '../Modals/Appointment/Appointment'
import DeleteModel from '../Modals/DeleteModel/DeleteModel'

export default function CardAppointment() {
  const [show , setshow] = React.useState(false);
  const handleClose = () => {
      setshow(false);
  }
  const [del, setdel] = React.useState(false);
  const handleDelete = () => {
      setdel(false);
  }
    return (
        <React.Fragment>
                          <Appointment
                show={show}
                handleClose={handleClose}/>
                 <DeleteModel
                del={del}
                handleDelete={handleDelete} />
            <div className="card-professional">
                <div className="Header-section">
                    <p className="Yungerleit">Appointments</p>
                    <p className="cursor-p" onClick={() => setshow(true)}><span className="font-plus">+</span> Add</p>
                </div>
                <Table responsive>
  <thead className="table-header-styl">
    <tr className="row-font">
      <th>Professional</th>
      <th>Start Date</th>
      <th>Time</th>
      <th>Note</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
    <tr  className="row-font">
      <td>Chaim Weiss</td>
      <td>06/07/2020</td>
      <td>12:00 pm - 1:30 pm</td>
      <td>-</td>
      <td className="right-float">  <DropdownButton
                                    title={<BiDotsVerticalRounded size={18} style={{ marginTop: -20 }} />}
                                    noCaret
                                    id="dropdown-no-caret"
                                >
                                    <Dropdown.Item eventKey="1" onClick={()=> setshow(true)}> Edit</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" className="color-del" onClick={()=> setdel(true)}> Delete </Dropdown.Item>
                                </DropdownButton></td>

    </tr>

  </tbody>
</Table>
            </div>
        </React.Fragment>
    );
}

