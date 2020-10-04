import React,{ useState } from 'react';
import Puzzle from './components/Puzzle'

export default function App() {
	const [counter, setCounter] = useState(0);
	// Create a stete and set it to the state of the puzzle component
		// Every time when component renders add one to state 
  return (
    <div className="App">
      <header className="App-header">
       	<Puzzle />
      </header>
    </div>
  );
}


