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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteModel from '../Modals/DeleteModel/DeleteModel'
import Youngerleit from '../Modals/YoungerleitModel/Youngerleit';

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
        fontSize: 10,

    },
}))(TableCell);

function createData(Professional, StartDate, Time, Schedule,Note,) {
    return { Professional, StartDate, Time,  Schedule,Note, };
}
const rows = [
    createData("Chaim Weiss", "06/07/2020 - 08/17/2021", '12:00 pm - 1:30 pm', "Sun - thurs","-"),

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
    const [del, setdel] = React.useState(false);
    const handleDelete = () => {
        setdel(false);
    }
    const handleDeleteOpen = () => {
        setdel(true);
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
            <Youngerleit
                edit={edit}
                handleEdit={handleEdit}
            />
            <DeleteModel
                del={del}
                handleDelete={handleDelete} />
            <TableContainer component={Paper} className="card-Schedule" responsive>

            <div className="Header-section">
                     <p className="Yungerleit">Schedule History</p>
                     <select className="select" >
                         <option value="Youngerleit">Youngerleit</option>
                        <option value="Sessions">Sessions/Appt</option>
                     </select>
                </div>
                <Table aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow >
                            <StyledTableCell >Youngerman</StyledTableCell>
                            <StyledTableCell >Dates</StyledTableCell>
                            <StyledTableCell >Time</StyledTableCell>
                            <StyledTableCell >Schedule</StyledTableCell>
                            <StyledTableCell >Note</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow >
                                <StyledTableRow >{row.Professional}</StyledTableRow>
                                <StyledTableRow >{row.StartDate}</StyledTableRow>
                                <StyledTableRow >
                                    {row.Time}
                                </StyledTableRow>
                                <StyledTableRow>{row.Schedule}</StyledTableRow>

                                <StyledTableRow>{row.Note}</StyledTableRow>
                                <StyledTableRow align="right" >
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