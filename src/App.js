import React, {useState, useEffect} from 'react';
import './App.css';
import Examples from './Examples';

const startState = 'START';

const regex = /^(.*?)(?:\s*<(.*?)>\s*)?$/;

const textToRules = text => 
  text
    .split('\n')
    .filter(line => line.indexOf('->') !== -1)
    .reduce((acc, curr) => {

      const [lhs, rhs] = curr.split('->').map(string => string.trim());
      const [_, content, label] = regex.exec(lhs);

      return Object.assign(acc, {[content]: {
        label: (label || content).trim(),
        values: rhs
          .split('|')
          .map(option => regex.exec(option.trim()))
          .map(([_, content, label]) => [content.trim(), (label || content).trim()])
      }})
    }, {});


function App() {
  const [state, setState] = useState(startState);
  const [text, setText] = useState('');

  useEffect(
    () => {
      let timer = setTimeout(() => rhs && rhs.values.length === 1 && setState(state.replace(lhs, rhs.values[0][0])), 500);
      return () => clearTimeout(timer);
    }
  )

  const rules = textToRules(text);

  const [lhs, rhs] = Object.entries(rules).find(([lhs, rhs]) => state.indexOf(lhs) !== -1) || [null, null];

  return (
    <div className="App">
      <h1>Unrestricted Grammar Simulator</h1>
      
      <h3>Rules</h3>
      <div>
  Examples: {Object.entries(Examples).map(([k, v]) => <button key={k} onClick={() => setText(v)}>{k}</button>)}
  </div>
      <textarea value={text} onChange={e => setText(e.target.value)} rows="10" cols="50"/>

      <h3>Hints</h3>
      {rhs && rhs.values.length > 1 && (
        <div>
          <div>
            <b>{rhs.label}</b>
          </div>
          {rhs.values.map(([replace, label]) => <button key={replace} onClick={() => setState(state.replace(lhs, replace))}>{label}</button>)}
        </div>
      )}

      <h3>State</h3>
      <div className="state-band">
        {Array.from(state).map((char, i) => (<div key={i} className="state-element">{char}</div>))}
      </div>
      <button onClick={() => setState(startState)}>Reset</button>

    </div>
  );
}

export default App;
