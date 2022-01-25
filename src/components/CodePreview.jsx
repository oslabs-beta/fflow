import React, { useEffect, useState } from 'react';

import '../stylesheets/CodePreview.css';
import '../stylesheets/Terminal.css';

import TabContainer from "./TabContainer";

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

const CodePreview = () => {
// set initial terminal state to empty string
  let [terminalState, setTerminalState] = useState('$ '); 
  
  const terminal = new Terminal();
  const fitAddon = new FitAddon();
  
  useEffect(() => {
    // render terminal onto div with id terminal 
    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById("terminal"));

    // console.log('this is terminalState:', terminalState);
  })
  
    terminal.onData(key => {
      console.log('onKey', key);
        
      if (key === "Backspace") {
          terminal.write("\b \b");
          setTerminalState(terminalState.slice(0,-1)); 
          console.log('backspace state', terminalState);
      }
      else {
        terminal.write(key)
        setTerminalState(terminalState += key);
        console.log('state', terminalState);
        }
      })

        // terminal.onData(e => {
    //   console.log('onData', e)
    //   terminal.write(e)
    // });
  // const terminalChange = (e) => {
  //   setTerminalState(e.target.value);
  //   terminal.write(terminalState);
  // }

  return (
    <div className="codePreviewContainer">
    <TabContainer />       
    </div>
  )
}


export default CodePreview;
