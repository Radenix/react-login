import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open, handleClose, data, onChange, handleFormSubmit}) {
    const {id,ad,soyad,cartid,sobe,departament,stat,issaatlari,status}=data

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {id?"İşçi'yi yenilə":"Yeni işçi əlavə et"}        
        </DialogTitle>
        <DialogContent>
          <form>
            <br />
            <TextField value={ad} onChange={e=>onChange(e)} id="ad" placeholder="Adı daxil edin" label="Ad" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={soyad} onChange={e=>onChange(e)} id="soyad" placeholder="Soyadı daxil edin" label="Soyad" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={cartid} onChange={e=>onChange(e)} id="cartid" placeholder="Kart id'ini daxil edin" label="Kart id" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={sobe} onChange={e=>onChange(e)} id="sobe" placeholder="Sobe daxil edin" label="Sobe" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={departament} onChange={e=>onChange(e)} id="departament" placeholder="Departament'i daxil edin" label="Departament" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={stat} onChange={e=>onChange(e)} id="stat" placeholder="Ştat'ı daxil edin" label="Ştat" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
            <TextField value={issaatlari} onChange={e=>onChange(e)} id="issaatlari" placeholder="İş saatlarını daxil edin" label="İş saatları" fullWidth style={{marginBottom: "10px", color: "red", width: "500px"}}/>
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