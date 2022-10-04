import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open, handleClose, data, onChange, handleFormSubmit}) {
    const {id,ad}=data

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {id?"Departamenti yenilə":"Yeni departament əlavə et"}        
        </DialogTitle>
        <DialogContent>
          <form>
            <br />
            <TextField value={ad} onChange={e=>onChange(e)} id="ad" placeholder="Departament adını daxil edin" label="Ad" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">Ləğv et</Button>
          <Button color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Yenilə":"Əlavə et"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}