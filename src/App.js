import logo from './logo.svg';
import './App.css';
import React from 'react';
import Location from "./components/location"
import Programm from './components/programm';
import Wishes from './components/wishes';
import Contacts from './components/contacts';

class App extends React.Component{
  render(){
    return( 
    <div>
      <Location />
      <Programm />
      <Wishes />
      <Contacts />
    </div>
    )
  }
}

export default App;
