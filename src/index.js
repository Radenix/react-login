import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import App from './App';
import Departamentler from './Pages/Departamentler';
import Sobeler from './Pages/Sobeler'
import Isciheyeti from './Pages/Isciheyeti';
import Sinif from './Pages/Sinif';
import Sagird from './Pages/Sagird';
import Login from './Pages/Login';
import './interceptors/axios'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='Home' element={<App/>} />
      <Route path='Departamentler' element={<Departamentler />} />
      <Route path='Sobeler' element={<Sobeler />} />
      <Route path='Isciheyeti' element={<Isciheyeti />} />
      <Route path='Sinif' element={<Sinif />} />
      <Route path='Sagird' element={<Sagird />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals