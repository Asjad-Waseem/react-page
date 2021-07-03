import React from "react";
import "./DeleteModel.css";
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
export default function DeleteModel(props) {
    const { del , handleDelete } = props;
    return (


  <Dialog onClose={handleDelete} aria-labelledby="simple-dialog-title" open={del} maxWidth="xs" fullWidth={true}>
       <DialogContent>
                <h6 >Delete Schedule?</h6>

                        <p className="text-delete">This will removethe schedule including all previous sessions from history.</p>
                        <p className="text-delete">If you want to end the session from now on,select 'End Schedule'.</p>


                </DialogContent>
                <DialogActions>
            <Button className="load-result" onClick={handleDelete}>Cancel</Button>

            <Button className="load-result-Delete"  onClick={handleDelete}>
            Delete
                </Button>
            </DialogActions>
            </Dialog>
    )
}