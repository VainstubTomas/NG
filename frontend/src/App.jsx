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
  const [repositories, setRepositories] = useState({});

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

  const handleInputChange = (id, value) => {
    setRepositories(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (id) => {
    const repoUrl = repositories[id];
    if(!repoUrl || !repoUrl.trim()){
      alert("El campo del repositorio es obligatorio.");
      return;
    }
    const candidate = {
      uuid: "eb08591c-a6a8-419b-8e42-b8dec6b87fff",
      jobId: "4416372005",
      candidateId: "74193122005",
      repoUrl: repoUrl
    }
    postApply(candidate);
  }

  const postApply = async (candidate) => {
    try {
      const apply = await axios.post("http://localhost:8080/api/", candidate);
      console.log("[APP] Apply sended: ", apply);
    } catch (error) {
      console.log("[APP] Error posting apply to backend.");
    }
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
                id={`repo-${p.id}`}
                label="GitHub repository link"
                variant="outlined"
                placeholder="Paste your repo here"
                fullWidth
                value={repositories[p.id] || ""}
                onChange={e => handleInputChange(p.id, e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              style={{ width: "140px" }}
              onClick={() => handleSubmit(p.id)}
            >
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
