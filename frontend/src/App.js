import "./App.css";
import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Select,MenuItem } from "@mui/material";

const App=() =>{

  const [link, setLink] = useState("")
  const [resolution, setResolution] = useState(360)

  const handleChange=event=>{
    setLink(event.target.value)
    console.log(link);
    
  }
  const handleSelect=event=>{
    setResolution(event.target.value)
    console.log(resolution);
    
  }

  const handleOnClick=event=>{
    console.log(link)
    console.log(resolution);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Youtube Downloader</h1>
          <div className="box">
          <div className="linkbox">
            {/* <input type="text" placeholder="Paste Link here" onChange={handlechange} value={link} /> */}
            <TextField fullwidth="true" id="linkbox" label="Enter your video's link " variant="outlined" color="primary" onChange={handleChange} value={link} placeholder="Paste your link here"/>
            
          </div>
          <div>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={resolution}
                  label="Age"
                  onChange={handleSelect}
                >
                  <MenuItem value={360}>360p</MenuItem>
                  <MenuItem value={480}>480p</MenuItem>
                  <MenuItem value={720}>720p</MenuItem>
            </Select>
            </div>
            </div>
        {/* <button onClick={log}>Download</button> */}
        <Button variant="contained" onClick={handleOnClick}>Download</Button>
        </div>

      </header>
    </div>
  );
}

export default App;
