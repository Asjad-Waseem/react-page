import React from "react";
import "./Card.css";
import { Table, DropdownButton, Dropdown } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Youngerleit from '../Modals/YoungerleitModel/Youngerleit';
import DeleteModel from '../Modals/DeleteModel/DeleteModel';
import EndSchedule from '../Modals/EndSchedule/EndSchedule';

export default function Card() {
  const [show, setshow] = React.useState(false);
  const handleClose = () => {
    setshow(false);
  }
  const [del, setdel] = React.useState(false);
  const handleDelete = () => {
    setdel(false);
  }
  const [end, setend] = React.useState(false);
  const handleEnd = () => {
    setend(false);
  }
  const [edit, setedit] = React.useState(false);
  const handleEdit = () => {
    setedit(false);
  }
  return (
    <React.Fragment>
      <Youngerleit
        show={show}
        edit={edit}
        handleEdit={handleEdit}
        handleClose={handleClose} />
      <DeleteModel
        del={del}
        handleDelete={handleDelete} />
      <EndSchedule
        end={end}
        handleEnd={handleEnd} />
      <div className="card-professional">
        <div className="Header-section">
          <p className="Yungerleit">Yungerleit</p>
          <p className="cursor-p" onClick={() => setshow(true)}><span className="font-plus">+</span> Add</p>
        </div>
        <Table responsive>
          <thead className="table-header-styl">
            <tr className="row-font">
              <th>Time</th>
              <th>Youngerman</th>
              <th>Schedule</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Note</th>
              <th></th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            <tr className="row-font">
              <td>12:00 pm - 1:30 pm</td>
              <td>Chaim Weiss</td>
              <td>Sun - Thurs</td>
              <td>06/07/2020</td>
              <td>-</td>
              <td>To catch up the Gamura</td>
              <td><FcCheckmark size={18} /></td>
              <td>                               <DropdownButton
                title={<BiDotsVerticalRounded size={18} className="icon-styl" />}
                noCaret
                id="dropdown-no-caret"
              >
                <Dropdown.Item eventKey="1" onClick={() => setedit(true)}>Edit</Dropdown.Item>
                <Dropdown.Item eventKey="1" onClick={() => setend(true)}>End Schedule</Dropdown.Item>
                <Dropdown.Item eventKey="2" className="color-del" onClick={() => setdel(true)}> Delete </Dropdown.Item>
              </DropdownButton></td>

            </tr>

          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
}

