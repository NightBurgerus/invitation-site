// import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Home from "./components/home"
import Location from "./components/location"
import Programm from './components/programm';
import Wishes from './components/wishes';
import Timer from './components/timer'
import Contacts from './components/contacts';
import Form from './components/form';

class App extends React.Component{
  render(){
    return( 
    <div>
        <Home />
        <Location />
        <Programm />
        <Wishes />
        <Timer />
        <Form />
        <Contacts />
    </div>
    )
  }
}

export default App