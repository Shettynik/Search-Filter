import './App.css';
import JSONDATA from './MOCK_DATA.json';
import React,{useState} from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Search..." onChange={(event)=>{setSearchItem(event.target.value)}} />
      </div>
      {JSONDATA.filter((val)=>{
        if(searchItem===""){
          return val
        }else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase())){
          return val
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
