import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Button, Table, Container, Form } from "react-bootstrap";



const Input = ({ clicked }) => {
  let [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Search for cocktails by name"
      />
      <Button variant="primary" onClick={() => clicked(name)} >Search</Button>
    </>
  );
};

const Output = ({ name }) => <p>{name}</p>;

function App4() {
  let [name, setName] = useState("");

  return (
    <div>
      <Input clicked={(name) => setName(name)} />
      <Output name={name} />
    </div>
  );
}

function App() {

  let [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={'Logo.png'} className="App-logo" alt="logo" />
        <p>
        </p>
      <Input clicked={(name) => setName(name)} />
      {/*<img src={'Logo2.png'} className="Logo22" alt="logo3"/> */}
      <Output name={name} /> 
      </header>
    </div>
    
  );
}


export default App;