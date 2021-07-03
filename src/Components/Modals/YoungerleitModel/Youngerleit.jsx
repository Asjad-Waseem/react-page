import React from "react";
import "./Youngerleit.css";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
    marginTop: '20px',
    padding: 10
  },
}));


const StyledTableRow = withStyles((theme) => ({
  root: {
    fontSize: 12,

  },
}))(TableCell);

function createData(Time, Youngerman, Schedule, StartDate, EndDate, Note, Matura) {
  return { Time, Youngerman, Schedule, StartDate, EndDate, Note, Matura };
}
const rows = [
  createData('Moshe Roshen', "$20", "ADHD,Other", "Approved",),
  createData('Moshe Roshen', "$20", "ADHD,Other", "Approved",),
  createData('Moshe Roshen', "$20", "ADHD,Other", "Approved",),

];
export default function Youngerleit(props) {
  const { show, handleClose, edit, handleEdit } = props;
  const classes = useStyles();

  const [currency, setCurrency] = React.useState('Pending Youngerman');
  return (

    <>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={show} maxWidth="md" fullWidth={true}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid md={5}>
              <h6 >Add Youngerman</h6>

              <div className="left-model-younger">
                <div className="flex-model">
                  <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
                  <TextField
                    id="outlined"
                    value={currency}
                    select
                    label="Status"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setCurrency(event.target.value)}
                    style={{ width: '55%', marginLeft: 20, fontSize: 9 }}
                  >
                    <MenuItem value="Pending Youngerman">Pending Youngerman </MenuItem>
                    <MenuItem value="Pending Financial ">Pending Financial </MenuItem>
                    <MenuItem value="Active">Active </MenuItem>

                  </TextField>
                </div>
                <p className="p-chaim">Comfort Health Status: <span className="bold-model"> Approved</span></p>
                <p className="p-chaim">Youngerman: <span className="bold-model">Moshe Rosen</span></p>
                <p className="p-chaim">Schedule: </p>
                <RadioGroup row aria-label="position" name="position" defaultValue="top" size="small">
                  <FormControlLabel
                    style={{ fontSize: '0.8rem' }}
                    value="top"
                    control={<Radio color="primary" />}
                    label="Sun - Thurs"
                    labelPlacement="top"
                    size="small"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Sun - Fri"
                    labelPlacement="top"
                    size="small"

                  />
                  <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="Custom"
                    labelPlacement="top"
                    size="small"

                  />
                </RadioGroup>


                <div className="box-model">
                </div>
                <Grid container spacing={0}>
                  <Grid md={6}>
                    <TextField
                      id="outlined-required"
                      label="Rate"
                      defaultValue=" "
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid md={6}>
                    <p className="p-model-date"> Reg. Rate: $20</p>
                  </Grid>
                </Grid>
                <Grid container spacing={0} style={{ marginTop: 20 }}>
                  <Grid md={6}>
                    <TextField
                      id="date"
                      label="Start Date"
                      defaultValue="2017-05-24"
                      variant="outlined"
                      size="small"
                      type="date"
                      style={{ width: '100%', }}

                    />

                  </Grid>
                  <Grid md={6}>
                    <p className="p-model-date1">Add End Date</p>

                  </Grid>
                </Grid>
                <Grid container spacing={0} style={{ marginTop: 20, }}>
                  <Grid md={6}>
                    <TextField
                      id="time"
                      label="Time From"
                      type="time"
                      defaultValue="07:30"
                      variant="outlined"
                      size="small"
                      style={{ width: '100%', }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </Grid>
                  <Grid md={6}>
                    <TextField
                      id="time"
                      label="Time To"
                      defaultValue="05:30"
                      variant="outlined"
                      size="small"
                      type="time"
                      style={{ width: '96%', marginLeft: '4%' }}

                    />
                  </Grid>
                </Grid>
                <FormControl variant="outlined" size="small" className={classes.formControl}>
                  <label >Note</label>
                  <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" />
                </FormControl>


              </div>
            </Grid>
            <Grid md={7}>
              <h6 className="left-jj">Potentail Youngerleit: <span className="span-confirm">(Select to confirm)</span></h6>
              <div className="box-model">
              </div>
              <div className="inner-box">
                <h6 className="available" >Available Youngerleit:</h6>
                <label className="start-date">Filters:</label>

                <Grid container spacing={0}>

                  <Grid md={6}>
                    <TextField id="standard-basic" label="Rate To" />

                  </Grid>
                  <Grid md={6}>
                    <TextField id="standard-basic" label="Rate To" style={{ float: 'right' }} />
                  </Grid>
                </Grid>
                <Grid container spacing={0}>

                  <Grid md={6}>
                    <TextField
                      id="standard"
                      select
                      label="Boro Park"
                      style={{ width: '76%' }}
                    >
                      <MenuItem ></MenuItem>
                    </TextField>
                  </Grid>
                  <Grid md={6}>
                    <TextField
                      id="standard"
                      select
                      label="Specialities"
                      style={{ width: '76%', float: 'right' }}
                    >
                      <MenuItem >
                      </MenuItem>
                    </TextField>

                  </Grid>
                </Grid>
                <Button className="load-result-youngerman">Load Result</Button>
                <div>
                  <TableContainer component={Paper} className="card-results" responsive>
                    <Table aria-label="simple table">

                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.Time} >
                            <StyledTableRow component="th" scope="row" style={{ color: 'blue', textDecoration: 'underline' }}>
                              {row.Time}
                            </StyledTableRow>
                            <StyledTableRow >{row.Youngerman}</StyledTableRow>
                            <StyledTableRow >{row.Schedule}</StyledTableRow>
                            <StyledTableRow >{row.StartDate}</StyledTableRow>
                            <StyledTableRow ><Button className="select-button">Select</Button></StyledTableRow>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>


            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ marginRight: 10 }}>
          <Button className="load-result1" onClick={handleClose}>Cancel</Button>

          <Button className="load-result" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog onClose={handleEdit} aria-labelledby="simple-dialog-title" open={edit} maxWidth="xs" fullWidth={true}>
        <DialogContent>
          <h6 >Edit Youngerman</h6>

          <div className="left-model-younger">
            <div className="flex-model">
              <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
              <TextField
                id="outlined"
                value={currency}
                select
                label="Status"
                variant="outlined"
                size="small"
                onChange={(event) => setCurrency(event.target.value)}
                style={{ width: '55%', marginLeft: 20, fontSize: 9 }}
              >
                <MenuItem value="Pending Youngerman">Pending Youngerman </MenuItem>
                <MenuItem value="Pending Financial ">Pending Financial </MenuItem>
                <MenuItem value="Active">Active </MenuItem>

              </TextField>
            </div>
            <p className="p-chaim">Comfort Health Status: <span className="bold-model"> Approved</span></p>
            <p className="p-chaim">Youngerman: <span className="bold-model">Moshe Rosen</span></p>
            <p className="p-chaim">Schedule: </p>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" size="small">
              <FormControlLabel
                style={{ fontSize: '0.8rem' }}
                value="top"
                control={<Radio color="primary" />}
                label="Sun - Thurs"
                labelPlacement="top"
                size="small"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Sun - Fri"
                labelPlacement="top"
                size="small"

              />
              <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Custom"
                labelPlacement="top"
                size="small"

              />
            </RadioGroup>


            <div className="box-model">
            </div>
            <Grid container spacing={0}>
              <Grid md={6}>
                <TextField
                  id="outlined-required"
                  label="Rate"
                  defaultValue=" "
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid md={6}>
                <p className="p-model-date"> Reg. Rate: $20</p>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: 20 }}>
              <Grid md={6}>
                <TextField
                  id="date"
                  label="Start Date"
                  defaultValue="2017-05-24"
                  variant="outlined"
                  size="small"
                  type="date"
                  style={{ width: '100%', }}

                />

              </Grid>
              <Grid md={6}>
                <p className="p-model-date1">Add End Date</p>

              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: 20, }}>
              <Grid md={6}>
                <TextField
                  id="time"
                  label="Time From"
                  type="time"
                  defaultValue="07:30"
                  variant="outlined"
                  size="small"
                  style={{ width: '100%', }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid md={6}>
                <TextField
                  id="time"
                  label="Time To"
                  defaultValue="05:30"
                  variant="outlined"
                  size="small"
                  type="time"
                  style={{ width: '96%', marginLeft: '4%' }}

                />
              </Grid>
            </Grid>
            <FormControl variant="outlined" size="small" className={classes.formControl}>
              <label >Note</label>
              <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="To Catch up the camera" />
            </FormControl>


          </div>

        </DialogContent>
        <DialogActions style={{ marginRight: 10 }}>
          <Button className="load-result1" onClick={handleEdit}>Cancel</Button>

          <Button className="load-result" onClick={handleEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}