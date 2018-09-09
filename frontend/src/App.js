import React from 'react';
import './App.css';
import { default as Counter } from './components/Molecules/Counter';
import BoardList from './components/Organisms/BoardList';

export default () => (
  <div className="App">
    <BoardList />
    <Counter />
  </div>
);