import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { ipcRenderer } from 'electron';

const ipc = ipcRenderer;

const terminalArgs = {
  fontSize: 15,
  cols: 49,
  rows: 38,
  fontFamily: 'monospace',
  theme: {
    background: 'black',
  },
  cursorStyle: 'bar',
  cursorBlink: 'block',
};

const term = new Terminal(terminalArgs);
const fitAddon = new FitAddon();

const TerminalView = () => {
  useEffect(() => {
    term.loadAddon(fitAddon);
    term.open(document.getElementById('terminal'));
    fitAddon.fit();

    ipc.on('terminal.sentData', (event, data) => {
      term.write(data);
    });

    // ipc.on('terminal.close', () => {
    //   term.clear();
    // });

    term.onData((data) => {
      ipc.send('terminal.toTerm', data);
    });
  }, []);

  return <div id='terminal'></div>;
};

export default TerminalView;

// import React, { useEffect, useState } from 'react';
// import { FitAddon } from 'xterm-addon-fit';
// import '../stylesheets/Terminal.css';

// const Terminal = () => {
//   // set initial terminal state to empty string
//   let [terminalState, setTerminalState] = useState('$ ');

//   const terminal = new Terminal();
//   const fitAddon = new FitAddon();

//   useEffect(() => {
//     // render terminal onto div with id terminal
//     terminal.loadAddon(fitAddon);
//     terminal.open(document.getElementById("terminal"));

//     console.log('this is terminalState:', terminalState);
//   })

//     terminal.onData(key => {
//       console.log('onKey', key);

//       if (key === "Backspace") {
//           terminal.write("\b \b");
//           setTerminalState(terminalState.slice(0,-1));
//           console.log('backspace state', terminalState);
//       }
//       else {
//         terminal.write(key)
//         setTerminalState(terminalState += key);
//         console.log('state', terminalState);
//         }
//       })

//   return (
//   <div>

//   </div>
//   )
// };
