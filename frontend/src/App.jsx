import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonAppBar from './components/appbar';
import Footer from './components/footer';

import './App.css'

function App() {
  const [positionsList, setPositionList] = useState([]);
  const [repository, setRepository] = useState("");

  const getPositionsList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/");
      setPositionList(response.data.payload);
    } catch (error) {
      console.log("[APP] Error fetching position list from backend.");
    }
  }

  useEffect(() => {
    getPositionsList();
  }, []);

  const postApply = async () => {
    const candidate = {
      uuid: "eb08591c-a6a8-419b-8e42-b8dec6b87fff",
      jobId: "4416372005",
      candidateId: "74193122005",
      repoUrl: repository
    }

    try {
      const apply = await axios.post("http://localhost:8080/api/", candidate);
      console.log("[APP] Apply sended: ", apply);
    } catch (error) {
      console.log("[APP] Error posting apply to backend.");
    }
  }

  const handleSubmit = () => {
    if(!repository.trim()){
      alert("El campo del repositorio es obligatorio.");
      return;
    }
    postApply();
  }

  return (
    <div className='container'>
      <ButtonAppBar />
      <div className='hero'>
        <h1>Open positions</h1>
      </div>
      <section className='positionItemConatiner'>
        {positionsList.map((p) => (
          <div key={p.id} className='positionItem'>
            <h3>{p.title}</h3>
            <Box
              component="form"
              sx={{ width: '100%' }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="GitHub repository link"
                variant="outlined"
                placeholder="Paste your repo here"
                fullWidth
                value={repository}
                onChange={e => setRepository(e.target.value)}
              />
            </Box>
            <Button variant="contained" style={{ width: "140px" }} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default App
