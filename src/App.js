import React,{ useState } from 'react';
import Puzzle from './components/Puzzle'
import { Input } from '@material-ui/core';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
       	<Puzzle />
		<Input/>
      </header>
    </div>
  );
}


