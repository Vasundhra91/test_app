import React,{useState} from 'react';
import './App.css';
import ViewCountryState from "./ViewCountryState"
import SelectedView from "./SelectedView";
import 'bootstrap/dist/css/bootstrap.min.css';
 function App()
  {
    const [selectedvalue, setSelectedvalue]=useState("")
  return (
    <div className="<Container>">
    <div className="row" >
           <div className="col"><ViewCountryState value={setSelectedvalue}/></div>
           <div className="col"><SelectedView value={selectedvalue}/></div>
           
    </div>
    </div>
  )}

export default App;
