import React from 'react';
import './App.css';
import Addtodo from './components/Addtodo/Addtodo';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Addtodo/>
      <List/>
    </div>
  );
}

export default App;
