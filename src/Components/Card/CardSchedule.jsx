import React from "react";
import "./Card.css";
import { Table, DropdownButton, MenuItem, Dropdown } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import DeleteModel from '../Modals/DeleteModel/DeleteModel'
import Youngerleit from '../Modals/YoungerleitModel/Youngerleit';


export default function CardSchedule() {
    const [del, setdel] = React.useState(false);
    const handleDelete = () => {
        setdel(false);
    }
    const [edit, setedit] = React.useState(false);
const handleEdit = () => {
  setedit(false);
}
    return (
        <React.Fragment>
                  <Youngerleit
        edit={edit}
        handleEdit={handleEdit}
    />
            <DeleteModel
                del={del}
                handleDelete={handleDelete} />
            <div className="card-Schedule">
                <div className="Header-section">
                    <p className="Yungerleit">Schedule History</p>
                    <select className="select" >
                        <option value="Youngerleit">Youngerleit</option>
                        <option value="Sessions">Sessions/Appt</option>
                    </select>
                </div>
                <Table responsive>
                    <thead className="table-header-styl">
                        <tr className="row-font">
                            <th>Professional</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-font" >
                            <td>Chaim Weiss</td>
                            <td>06/07/2020</td>
                            <td>12:00 pm - 1:30 pm</td>
                            <td>Session</td>
                            <td>-</td>
                            <td>
                                <DropdownButton
                                    title={<BiDotsVerticalRounded size={18} className="icon-styl" />}
                                    noCaret
                                    id="dropdown-no-caret"
                                >
                                    <Dropdown.Item eventKey="1" onClick={() => setedit(true)}>Edit</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" className="color-del" onClick={()=> setdel(true)}> Delete </Dropdown.Item>
                                </DropdownButton>
                            </td>

                        </tr>

                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

