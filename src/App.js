import { useState } from "react"
import Button from "@mui/material/Button"
import Switch from "@mui/material/Switch"
import FormControlLabel from '@mui/material/FormControlLabel';
import "./App.scss"

function App() {
  const [switchState1, setSwitchState1] = useState(false)
  const [switchState2, setSwitchState2] = useState(false)
  const handleSwitchState1 = () => {
    setSwitchState1(!switchState1)
  }
  const handleSwitchState2 = () => {
    setSwitchState2(!switchState2)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="bulbs">
          <div
            className="bulb"
            style={
              switchState1
                ? { backgroundColor: "orange" }
                : { backgroundColor: "grey" }
            }
          ></div>
          <div
            className="bulb"
            style={
              switchState2
                ? { backgroundColor: "orange" }
                : { backgroundColor: "grey" }
            }
          ></div>
        </div>
        <div className="buttons">
          <MyButton
            switchState={switchState1}
            handleSwitchState={handleSwitchState1}
          />
          <MyButton
            switchState={switchState2}
            handleSwitchState={handleSwitchState2}
          />
         
        </div>
      </div>
    </div>
  )
}

export default App

function MyButton({ switchState, handleSwitchState }) {
  return (
    
    <FormControlLabel control={
    <Switch 
    
    // color={switchState ? "green" : "grey"}
    color="warning"
    onClick={() => handleSwitchState()}    
    checked={switchState} />} label= {switchState ? "On" : "Off"} />

  )
}
