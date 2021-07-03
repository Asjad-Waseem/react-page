import React from "react";
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '100%',
        marginTop: '25px',
        padding: 10
    },
}));
export default function Appointment(props) {
    const { show, handleClose } = props;
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={show} >
            <DialogContent>
                <h4>Add Appointment</h4>
                <div >
                    <div className="flex-model">
                        <p className="p-chaim">Bucher: <span className="bold-model">Chaim Green</span></p>
                    </div>
                    <Grid container spacing={1}>
                        <Grid md={6}>
                            <FormControl variant="outlined" className={classes.formControl} size="small">
                                <InputLabel htmlFor="outlined-age-native-simple " size="small" >Professional</InputLabel>
                                <Select
                                    native
                                    size="small"
                                    label="Professional"
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Add New Profession</option>
                                    <option value={20}>Moshe Green</option>
                                    <option value={30}>hello</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid md={6}>
                            <FormControl variant="outlined" className={classes.formControl} >
                                <TextField
                                    label="Date"
                                    id="date"
                                    defaultValue="2017-05-24"
                                    variant="outlined"
                                    size="small"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid md={6}>
                            <FormControl variant="outlined" className={classes.formControl} >
                                <TextField
                                    label="Time From"
                                    id="time"
                                    defaultValue="07:30"
                                    variant="outlined"
                                    size="small"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid md={6}>
                            <FormControl variant="outlined" className={classes.formControl} >
                                <TextField
                                    label="Time To"
                                    id="time"
                                    defaultValue="08:30"
                                    variant="outlined"
                                    size="small"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>

                        </Grid>
                    </Grid>
                    <FormControl variant="outlined" className={classes.formControl} size="small">
                        <label >Note</label>
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" />
                    </FormControl>
                </div>
            </DialogContent>
            <DialogActions>
            <Button className="load-result1" onClick={handleClose}>Cancel</Button>

            <Button className="load-result"  onClick={handleClose}>
                    Save
                </Button>
            </DialogActions>

        </Dialog>
    )
}