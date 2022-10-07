import './App.css';
import Sidebar from './Components/Sidebar';
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
function App() {
  const url = "u"
  const [name, setName] = useState('')
  const [navigate, setNavigate] = useState(false)

  useEffect(() => {
    (async () => {
      try{
        const {data} = await axios.get(url)
        setName(data.name)
      }catch (e){
        setNavigate(true)
      }
      }
    )();
  }, []);
  if (navigate) {
    return <Navigate to="/" />
  }
  return (
    <div className="App">
      <Sidebar />
      <span>Hi {name} !</span>
      
    </div>
  );
}

export default App;
