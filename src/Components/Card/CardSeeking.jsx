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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    createData("Youngerman", "Tue , Wed", '11:00 pm - 1:00 pm', "To test him","ADHD"),
    createData("Keriah Professional", "Every 2nd Tue", '3:00 pm - 4:00 pm', "For Reading","ADHD"),


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
    const [show , setshow] = React.useState(false);
const handleClose = () => {
    setshow(false);
}
const handleOpen = () => {
    setshow(true);
    setAnchorEl(null);

}
    return (
        <>
           <Youngerleit
                show={show}
                handleClose={handleClose}/>
            <TableContainer component={Paper} className="card-seeking" responsive>

            <div className="Header-section">
                     <p className="Yungerleit">Seeking</p>
                </div>
                <Table aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow >
                            <StyledTableCell >Type</StyledTableCell>
                            <StyledTableCell >Schedule</StyledTableCell>
                            <StyledTableCell >Time</StyledTableCell>
                            <StyledTableCell >Note</StyledTableCell>
                            <StyledTableCell >Specialties</StyledTableCell>
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
                                        <ArrowDropDownIcon />
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
                                        <MenuItem onClick={handleOpen}>Chaim Royh -Pending Call</MenuItem>
                                        <MenuItem  onClick={handleOpen}>Chaim Green - Awaiting Responsee  </MenuItem>

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