import React from 'react';
import ReactDOM from 'react-dom';
import Puzzle from './components/Puzzle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       	<Puzzle/>
      </header>
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
