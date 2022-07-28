import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreators, State } from './state/index';

function App() {

  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
     <h1>{amount}</h1>
     <button onClick={()=>depositMoney(1)}>Deposit</button>
     <button onClick={()=>withdrawMoney(1)}>Withdraw</button>
     <button onClick={()=>bankrupt(0)}>Bankrupt</button>
    </div>
  );
}

export default App;
