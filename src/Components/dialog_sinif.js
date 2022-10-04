import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open, handleClose, data, onChange, handleFormSubmit}) {
    const {id,ad,dersbaslamasaati,dersbitmesaati,hefteningunu,sinifnomresi}=data

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {id?"Sinifi yenilə":"Yeni sinif əlavə et"}        
        </DialogTitle>
        <DialogContent>
          <form>
            <br />
            <TextField value={ad} onChange={e=>onChange(e)} id="ad" placeholder="Sinif adını daxil edin" label="Sinif adı" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={dersbaslamasaati} onChange={e=>onChange(e)} id="dersbaslamasaati" placeholder="Dərs başlama saatını daxil edin" label="Dərs başlama saatı" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={dersbitmesaati} onChange={e=>onChange(e)} id="dersbitmesaati" placeholder="Dərs bitmə saatını daxil edin" label="Dərs bitmə saatı" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={hefteningunu} onChange={e=>onChange(e)} id="hefteningunu" placeholder="Həftənin gününü daxil edin" label="Həftənin günü" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={sinifnomresi} onChange={e=>onChange(e)} id="sinifnomresi" placeholder="Sinif nömrəsini daxil edin" label="Sinif nömrəsi" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
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