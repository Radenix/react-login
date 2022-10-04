import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormDialog from '../Components/dialog_sinif';
import Sidebar from '../Components/Sidebar';
import './Sinif.css'
import { display, height } from '@mui/system';

const initialValue = { ad: "", dersbaslamasaati: "", dersbitmesaati: "",hefteningunu: "",sinifnomresi: ""}

const Sinif = () => {
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const url = `http://localhost:4000/sinif`
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Sinif Adı", field: "ad", },
    { headerName: "Ders başlama saatı", field: "dersbaslamasaati"},
    { headerName: "Dərs bitmə saatı", field: "dersbitmesaati"},
    { headerName: "Həftənin günü", field: "hefteningunu"},
    { headerName: "Sinif nömrəsi", field: "sinifnomresi"},
    {
      headerName: "Parametrlər", field: "id", cellRendererFramework: (params) => <div>
        <Button variant="outlined" color="primary" style={{ marginRight: "10px", marginBottom: "5px" }} onClick={() => handleUpdate(params.data)}>Yenilə</Button>
        <Button variant="outlined" color="secondary" style={{ marginBottom: "5px" }} onClick={() => handleDelete(params.value)}>Sil</Button>
      </div>
    }
  ]

  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }

  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const onGridReady = (params) => {
    setGridApi(params);
  }

  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Bunu silmək istədiyinizə əminsinizmi?", id)
    console.log(confirm)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getUsers())
    }
  }

  const handleFormSubmit = () => {
    if (formData.id) {
      fetch(url+`/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    } else {
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }

  return (
    <div className='Departamentler'>
        <div className="sidebar">
        <Sidebar/>
        </div>
     <div className="layout">   
      <h1 style={{ textAlign: "center" }}>Sinif</h1>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Sinif əlavə edin</Button>
      </Grid>
      <div className="ag-theme-alpine" style={{height: "100%"}}>
      
        <AgGridReact
          columnDefs={columnDefs}
          rowData={tableData}
          defaultColDef={defaultColDef}
          pagination={true}
          onGridReady={onGridReady}
        />
        
      
      </div>
      </div>
      <FormDialog open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
};
export default Sinif;