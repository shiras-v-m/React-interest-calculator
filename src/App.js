
import './App.css';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
function App() {
  // create state
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log(principle,rate,year);
    if(principle==0 || rate==0 || year==0){
      alert("Please enter a valid input")
    }
    else{
      let output=principle*rate*year/100
      setInterest(output)
    }
  }
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
  }
  return (
    <div className='container'>
      <div className='frame'>
        <h3>Simple Calculator</h3>
        <p>calculate your simple interest early</p>
  
        <div className='box'>
          <span>₹{interest}</span>
          <h4>Total simple interest</h4>
        </div>
        {/* <div className='input-fields'>
        <input type="text" placeholder='₹ Principle amount' />
        <input type="text" placeholder='Rate of Interest(p.a) %'/>
        <input type="text" placeholder='Time period (Yr)'/>
  <div className='buttons'>
          <button className='calculate-btn'>CALCULATE</button>
          <button className='reset-btn'>Reset</button>
  </div>
  
        </div> */}

        <form onSubmit={handleCalculate}>
         <div style={{marginTop:'40px'}} className='all-inputs'>
            <div className="input-field">
            <TextField value={principle || ""} onChange={e=>setPrinciple(e.target.value)} id="outlined-basic" label="₹ Principle amount" variant="outlined" />
            </div>
            <div className="input-field">
            <TextField value={rate || ""} onChange={e=>setRate(e.target.value)} id="outlined-basic" label="Rate of Interest(p.a) %" variant="outlined" />
            </div>
            <div className="input-field">
            <TextField value={year || ""} onChange={e=>setYear(e.target.value)} id="outlined-basic" label="Time period (Yr)" variant="outlined" />
            </div>
         </div>

         <Stack className='btnGroup' spacing={2} direction ="row">
         <Button type="submit" className='btn' style={{backgroundColor:"black"}} variant="contained">Calculate</Button>
         <Button onClick={handleReset} className='btn' variant="outlined">Reset</Button>

</Stack>

        </form>
      </div>
    </div>
  );
}

export default App;
