import React from 'react';
import './App.css';
import * as styled from './styled'

function App() {
  const today = new Date().toISOString().split('T')[0]
  return (
    <styled.MainContainer>
      <h1>Transaction</h1>
      <styled.Form>
        <input name="amount" type="date" value={today} onChange={console.log}/>
        <input name="payee" type="text" placeholder="payee" onChange={console.log}/>
        <input name="amount" type="number" placeholder="amount" onChange={console.log}/>
        <input name="destination" type="text" placeholder="destination" onChange={console.log}/>
        <input name="source" type="text" placeholder="source" onChange={console.log}/>
        <styled.Actions>
          <button type="submit">Submit</button>
        </styled.Actions>
      </styled.Form>
    </styled.MainContainer>
  );
}

export default App;
