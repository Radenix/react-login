import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormDialog from '../Components/dialog';
import Sidebar from '../Components/Sidebar';
import './Departamentler.css'
import { display, height } from '@mui/system';

const initialValue = { ad: ""}

const Departamentler = () => {
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const url = `http://213.136.85.174:8384/school/departament?page=0&size=15`
  const urll = `http://213.136.85.174:8384/login/u`
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaWphdCIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJBRE1JTiJ9XSwiaWF0IjoxNjY1MDY2NjQxLCJmaXJzdF9uYW1lIjoibmlqYXQiLCJsYXN0X25hbWUiOiJuaWphdCIsInVzZXJuYW1lIjoibmlqYXQiLCJpZGQiOjEsInJvbGUiOjEsIm9mZmljZW5hbWUiOiJuaWphdCIsIm1vYmlsZSI6IjEyMyIsImxvY2F0aW9uaWQiOjAsImV4cCI6MTY2NTA3MDk2MX0.bdldBpKzW0AVaxRKktZ5DHqAwGv1gQPkM36N1fmVmt2iWNkEe-V_9pVo8ZIa6zEHZJ0ykJC0Ks5R6yysmVChUA"

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Departamentin Adı", field: "ad", },
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
  const getUsers = async () => {
    await fetch(url, {
      method: 'POST',
      headers:  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
        "Access-Control-Allow-Origin": '*',
        "mode":'cors'
      }
    }).then(resp => resp.json()).then(resp => setTableData(resp))
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
      <h1 style={{ textAlign: "center" }}>Departamentler </h1>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Departament əlavə edin</Button>
      </Grid>
      <div className="ag-theme-alpine" style={{height: "750px"}}>
      
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
export default Departamentler;