import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { ipcRenderer } from 'electron';
// import '../stylesheets/Terminal.css';
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

    term.onData((data) => {
      ipc.send('terminal.toTerm', data);
    });
  }, []);

  return <div id='terminal'></div>;
};

export default TerminalView;
