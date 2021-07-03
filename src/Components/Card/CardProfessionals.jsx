import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Card.css";
import { FcCheckmark } from "react-icons/fc";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteModel from '../Modals/DeleteModel/DeleteModel';
import EndSchedule from '../Modals/EndSchedule/EndSchedule';
import ProfessionalModal from '../Modals/ProfessionalModal/ProfessionalModal'
import Button from '@material-ui/core/Button';

const ITEM_HEIGHT = 48;
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#536DFE',
        color: theme.palette.common.white,
        lineHeight: '0.4rem',
        fontSize: 12
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        fontSize: 12,

    },
}))(TableCell);

function createData(Time, Youngerman, Schedule, Next,StartDate, EndDate, Note, ) {
    return { Time, Youngerman, Schedule, Next,StartDate, EndDate, Note,  };
}
const rows = [
    createData('12:00 pm - 1:30 pm', "Moshe Green", "Every @nd Tues","06/07", "06/07/2020", "-", "For Keriah", ""),

];
const useStyles = makeStyles({
    table: {
        backgroundColor: '#536DFE',
    },
    font: {
        color: 'white'
    }
});
export default function CustomizedTables() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    const [show, setshow] = React.useState(false);
    const handleClose = () => {
        setshow(false);
    }
    const [del, setdel] = React.useState(false);
    const handleDelete = () => {
        setdel(false);

    }
    const handleDeleteOpen = () => {
        setdel(true);
        setAnchorEl(null);

    }
    const [end, setend] = React.useState(false);
    const handleEnd = () => {
        setend(false);
    }
    const handleEndOpen = () => {
        setend(true);
        setAnchorEl(null);

    }
    const [edit, setedit] = React.useState(false);
    const handleEdit = () => {
        setedit(false);
    }
    const handleEditOpen = () => {
        setedit(true);
        setAnchorEl(null);

    }
    return (
        <>
            <ProfessionalModal
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
            <TableContainer component={Paper} className="card-professional" responsive>

                <div className="Header-section">
                    <p className="Yungerleit">Professionals</p>
                    <Button className="cursor-p" onClick={() => setshow(true)}>+ Add</Button>
                </div>
                <Table aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow >
                            <StyledTableCell >Time</StyledTableCell>
                            <StyledTableCell >Professional</StyledTableCell>
                            <StyledTableCell >Schedule</StyledTableCell>
                            <StyledTableCell >Nextappt.</StyledTableCell>
                            <StyledTableCell >StartDate</StyledTableCell>
                            <StyledTableCell >EndDate</StyledTableCell>
                            <StyledTableCell >Note</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.Time} >
                                <StyledTableRow component="th" scope="row">
                                    {row.Time}
                                </StyledTableRow>
                                <StyledTableRow >{row.Youngerman}</StyledTableRow>
                                <StyledTableRow >{row.Schedule}</StyledTableRow>
                                <StyledTableRow >{row.Next}</StyledTableRow>

                                <StyledTableRow >{row.StartDate}</StyledTableRow>
                                <StyledTableRow align="center">{row.EndDate}</StyledTableRow>
                                <StyledTableRow>{row.Note}</StyledTableRow>
                                <StyledTableRow ><FcCheckmark size={18} /></StyledTableRow>
                                <StyledTableRow >
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose1}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >

                                        <MenuItem onClick={handleEditOpen}>Edit  </MenuItem>
                                        <MenuItem onClick={handleEndOpen}>End Schedule  </MenuItem>
                                        <MenuItem className="color-del" onClick={handleDeleteOpen}>Delete  </MenuItem>

                                    </Menu>
                                </StyledTableRow>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}