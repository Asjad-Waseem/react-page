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
import Appointment from '../Modals/Appointment/Appointment'
import DeleteModel from '../Modals/DeleteModel/DeleteModel'
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

function createData(Professional, StartDate, Time, Note, ) {
  return { Professional, StartDate, Time, Note, };
}
const rows = [
  createData( "Chaim Weiss", "06/07/2020",'12:00 pm - 1:30 pm', "-", ),

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
  const showOpen = () => {
    setshow(true)
    setAnchorEl(null);

  }
  return (
    <>
      <Appointment
        show={show}
        handleClose={handleClose} />
      <DeleteModel
        del={del}
        handleDelete={handleDelete} />
      <TableContainer component={Paper} className="card-professional" responsive>

        <div className="Header-section">
          <p className="Yungerleit">Appointments</p>
          <Button className="cursor-p" onClick={() => setshow(true)}>+ Add</Button>
        </div>
        <Table aria-label="simple table">
          <TableHead className={classes.table}>
            <TableRow >
              <StyledTableCell >Professional</StyledTableCell>
              <StyledTableCell >Start Date</StyledTableCell>
              <StyledTableCell >Time</StyledTableCell>
              <StyledTableCell >Note</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Time} >
                <StyledTableRow >{row.Professional}</StyledTableRow>
                <StyledTableRow >{row.StartDate}</StyledTableRow>
                <StyledTableRow >
                  {row.Time}
                </StyledTableRow>
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
                    <MenuItem onClick={showOpen}>Edit  </MenuItem>
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