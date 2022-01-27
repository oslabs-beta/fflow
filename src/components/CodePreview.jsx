import React, { useEffect, useState } from 'react';
import TabContainer from './TabContainer';
import '../stylesheets/CodePreview.css';
import '../stylesheets/Terminal.css';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import * as monaco from 'monaco-editor';

const CodePreview = () => {
  // set initial terminal state to empty string
  let [terminalState, setTerminalState] = useState('$ ');

  const terminal = new Terminal();
  const fitAddon = new FitAddon();

  useEffect(() => {
    // render terminal onto div with id terminal
    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById('terminal'));
    // monaco.editor.create(document.getElementById('editor-container'), {
    //   // language: this._getLanguage(this.props.path),
    //   // theme: 'ayu-dark',
    //   // lineNumbers: 'on',
    //   // wordWrap: 'on',
    //   // scrollBeyondLastLine: false,
    //   // automaticLayout: true,
    //   // glyphMargin: true,
    //   value: "function hello() {\n\talert('Hello world!');\n}",
    //   language: 'javascript',
    // });
    // console.log('this is terminalState:', terminalState);
  });

  terminal.onData((key) => {
    console.log('onKey', key);

    if (key === 'Backspace') {
      terminal.write('\b \b');
      setTerminalState(terminalState.slice(0, -1));
      console.log('backspace state', terminalState);
    } else {
      terminal.write(key);
      setTerminalState((terminalState += key));
      console.log('state', terminalState);
    }
  });

  return (
    <div className='codePreviewContainer'>
      <TabContainer />
    </div>
  );
};

export default CodePreview;
