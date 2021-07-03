import React from "react";
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    textField: {
      marginLeft: 70,
      width: 150,
      justifyContent:'center',
      textAlign:'center',
      marginTop:30,
      marginBottom:30


    },
  }));
export default function EndSchedule(props) {
    const { end, handleEnd } = props;
    const classes = useStyles();

    return (


  <Dialog onClose={handleEnd} aria-labelledby="simple-dialog-title" open={end} maxWidth="xs" fullWidth={true}>
       <DialogContent>
                <h6 >End Schedule</h6>
                <div className="text-delete">
                <TextField
        id="date"
        label="Schedule End Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

                </div>


        </DialogContent>
        <DialogActions>
            <Button className="load-result1" onClick={handleEnd}>Cancel</Button>

            <Button className="load-result-schedule"  onClick={handleEnd}>
            End Schedule
                </Button>
            </DialogActions>
        </Dialog>
    )
}