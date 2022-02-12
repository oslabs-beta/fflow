// Creates all component files (but not the full application files) and places them in a "components" directory
// To be added as export option in next release

const fs = require('fs');
const fse = require('fs-extra');
const df = require('downloads-folder');

export default function exportFiles(snapshot) {
  const templateHTML = `<!DOCTYPE html>
<html>
    <head>
        <title>Exported Project</title>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>`;

  const templateIndexJS = `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

var mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);`;

  const tags = snapshot.tags.map((ele) => {
    return ele.slice(1);
  });

  const templateAppJS = `${snapshot.imports}import { hot } from 'react-hot-loader/root';

const App = () => {
  return (
  <div className="App">
    <h1>Hello <span className='default-spans'>there!</span></h1>
    <p>Thanks for using <span className='default-spans'>fflow</span></p>
    <p>LOGO HERE</p>\n${tags.join('\n')}
  </div>
  )
};

export default hot(App);`;

  const path = df();
  const name = 'Exported_Project';

  // iterate through files array, create file for each, fill with its code key

  const files = snapshot.files;
  for (let i = 1; i < files.length; i++) {
    //start at one to skip app file which has it's own template
    const curr = files[i];
    fse.outputFile(path + `/${name}/src/${curr.name}`, curr.fileCode);
  }

  fse.outputFile(path + `/${name}/dist/index.html`, templateHTML);
  fse.outputFile(path + `/${name}/src/index.js`, templateIndexJS);
  fse.outputFile(path + `/${name}/src/App.js`, templateAppJS);
  fse.outputFile(path + `/${name}/README.md`, templateReadMe);
  alert('Component files downloaded to your download folder');
}
