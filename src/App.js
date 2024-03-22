import logo from './logo.svg';
import './App.css';
import React from 'react';
import Location from "./components/location"
import Programm from './components/programm';
import Wishes from './components/wishes';
import Contacts from './components/contacts';
import Form from './components/form';

class App extends React.Component{
  render(){
    return( 
    <div>
      <Location />
      <Programm />
      <Wishes />
      <Form />
      <Contacts />
    </div>
    )
  }
}

export default App;
