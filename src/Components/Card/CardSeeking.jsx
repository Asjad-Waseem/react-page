import React from "react";
import "./Card.css";
import { Table, DropdownButton, Dropdown } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";
import Youngerleit from '../Modals/YoungerleitModel/Youngerleit'


export default function CardSeeking() {
    const [show , setshow] = React.useState(false);
const handleClose = () => {
    setshow(false);
}
    return (
        <React.Fragment>
                            <Youngerleit
                show={show}
                handleClose={handleClose}/>
            <div className="card-seeking">
                <div className="Header-section">
                    <p className="Yungerleit">Seeking</p>
                </div>
                <Table responsive>
                    <thead className="table-header-styl">
                        <tr className="row-font">
                            <th>Type</th>
                            <th>Schedule Date</th>
                            <th>Time</th>
                            <th>Note</th>
                            <th> Specialties</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-font">
                            <td>Youngerman</td>
                            <td>Tue, Wed</td>
                            <td>11:00 am - 1:00 pm</td>

                            <td>to test him</td>
                            <td>ADHD</td>
                            <td className="right-float">  <DropdownButton
                                title={<MdKeyboardArrowDown size={18} className="icon-styl" />}
                                noCaret
                                id="dropdown-no-caret"
                            >
                                <Dropdown.Item onClick={() => setshow(true)} eventKey="1">Chaim Royh -Pending Call</Dropdown.Item>
                                <Dropdown.Item onClick={() => setshow(true)} eventKey="1">Chaim Green - Awaiting Responsee</Dropdown.Item>
                            </DropdownButton></td>

                        </tr>
                        <tr className="row-font">
                            <td>Keriah Professional</td>
                            <td>Every 2nd Tue</td>
                            <td>3:00 pm - 4:00 pm</td>

                            <td>For Readin</td>
                            <td>ADHD</td>
                            <td className="right-float">  <DropdownButton
                                title={<MdKeyboardArrowDown size={18} className="icon-styl" />}
                                noCaret
                                id="dropdown-no-caret"
                            >
                                <Dropdown.Item onClick={() => setshow(true)} eventKey="1">Chaim Royh -Pending Call</Dropdown.Item>
                                <Dropdown.Item  onClick={() => setshow(true)} eventKey="1">Chaim Green - Awaiting Responsee</Dropdown.Item>
                            </DropdownButton></td>

                        </tr>

                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

