import React from "react";
import "./ProfessionalModal.css";
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
    marginTop: '20px',
    padding: 10
  },
}));
export default function ProfessionalModal(props) {
  const { show, handleClose,handleEdit,edit } = props;
  const classes = useStyles();

  const [currency, setCurrency] = React.useState('Active');
  const [currency1, setCurrency1] = React.useState('Keriah');

  const [currency2, setCurrency2] = React.useState('Weekly');

  return (
<>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={show} maxWidth="md" fullWidth={true}>
        <DialogContent>
        <Grid  container spacing={1}>
          <Grid md={5}>
            <h6 >Add professional</h6>

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
                    style={{ width: '55%', marginLeft: 35, fontSize: 9 }}
                  >
                    <MenuItem value="Pending Professional">Pending Youngerman </MenuItem>
                    <MenuItem value="Pending Financial ">Pending Financial </MenuItem>
                    <MenuItem value="Active">Active </MenuItem>

                  </TextField>
                </div>
              <p className="p-chaim">Professional: <span className="bold-model">Moshe Rosen</span></p>
              <Grid md={6}  >
              <TextField
                    id="outlined"
                    value={currency1}
                    select
                    label="Professional Type"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setCurrency1(event.target.value)}
                    style={{ width: '100%',marginTop:20}}
                  >
                    <MenuItem value="Keriah" selected>Keriah</MenuItem>
                    <MenuItem value="Therapy">Therapy </MenuItem>
                    <MenuItem value="Other">Other </MenuItem>

                  </TextField>
                  </Grid>
                  <Grid md={6}>
                  <TextField
                    id="outlined"
                    value={currency2}
                    select
                    label="Schedule"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setCurrency2(event.target.value)}
                    style={{ width: '100%',marginTop:20}}
                  >
                    <MenuItem value="Weekly" selected>Weekly</MenuItem>
                    <MenuItem value="Monthly">Monthly </MenuItem>
                    <MenuItem value="Yearly">Yearly </MenuItem>

                  </TextField>

                  </Grid>
                <div className="box-model">
                </div>
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
            <h6 className="selected-prof">Selected Professional</h6>
            <div className="box-model">
            </div>
            <Button className="load-result-Professional">Load Result</Button>
            <div className="inner-box-professional">
            <h6 className="available" >Available Professionals:</h6>

              </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions style={{marginRight:10}}>
            <Button className="load-result1" onClick={handleClose}>Cancel</Button>

            <Button className="load-result"  onClick={handleClose}>
                    Save
                </Button>
            </DialogActions>
    </Dialog>

{/*  */}
<Dialog onClose={handleEdit} aria-labelledby="simple-dialog-title" open={edit} maxWidth="xs" fullWidth={true}>
        <DialogContent>
            <h6 >Edit professional</h6>

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
                    style={{ width: '55%', marginLeft: 35, fontSize: 9 }}
                  >
                    <MenuItem value="Pending Professional">Pending Youngerman </MenuItem>
                    <MenuItem value="Pending Financial ">Pending Financial </MenuItem>
                    <MenuItem value="Active">Active </MenuItem>

                  </TextField>
                </div>
              <p className="p-chaim">Professional: <span className="bold-model">Moshe Rosen</span></p>
              <Grid md={6}  >
              <TextField
                    id="outlined"
                    value={currency1}
                    select
                    label="Professional Type"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setCurrency1(event.target.value)}
                    style={{ width: '100%',marginTop:20}}
                  >
                    <MenuItem value="Keriah" selected>Keriah</MenuItem>
                    <MenuItem value="Therapy">Therapy </MenuItem>
                    <MenuItem value="Other">Other </MenuItem>

                  </TextField>
                  </Grid>
                  <Grid md={6}>
                  <TextField
                    id="outlined"
                    value={currency2}
                    select
                    label="Schedule"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setCurrency2(event.target.value)}
                    style={{ width: '100%',marginTop:20}}
                  >
                    <MenuItem value="Weekly" selected>Weekly</MenuItem>
                    <MenuItem value="Monthly">Monthly </MenuItem>
                    <MenuItem value="Yearly">Yearly </MenuItem>

                  </TextField>

                  </Grid>
                <div className="box-model">
                </div>
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
 
      </DialogContent>
      <DialogActions style={{marginRight:10}}>
            <Button className="load-result1" onClick={handleEdit}>Cancel</Button>

            <Button className="load-result"  onClick={handleEdit}>
                    Save
                </Button>
            </DialogActions>
    </Dialog>

    
</>
  )
}