import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open, handleClose, data, onChange, handleFormSubmit}) {
    const {id,ad,soyad,cartid,fincode,nomre,valideynnomresi,sinif,status}=data

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {id?"Şagirdi yenilə":"Yeni şagird əlavə et"}        
        </DialogTitle>
        <DialogContent>
          <form>
            <br />
            <TextField value={ad} onChange={e=>onChange(e)} id="ad" placeholder="Sinif adını daxil edin" label="Sinif adı" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={soyad} onChange={e=>onChange(e)} id="soyad" placeholder="Soyadı daxil edin" label="Soyad" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={cartid} onChange={e=>onChange(e)} id="cartid" placeholder="Kart id'ni daxil edin" label="Kart id" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={fincode} onChange={e=>onChange(e)} id="fincode" placeholder="Fin kodu daxil edin" label="Fin kod" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={nomre} onChange={e=>onChange(e)} id="nomre" placeholder="Nömrə daxil edin" label="Nömrə" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={valideynnomresi} onChange={e=>onChange(e)} id="valideynnomresi" placeholder="Valideyn nömrəsini daxil edin" label="Valideyn nömrəsi" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={sinif} onChange={e=>onChange(e)} id="sinif" placeholder="Sinif daxil edin" label="Sinif" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={status} onChange={e=>onChange(e)} id="status" placeholder="Status'u daxil edin" label="Status" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
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