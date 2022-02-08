const fs = require('fs');
// const path = require('path');
const fse = require('fs-extra');
const df = require('downloads-folder');
// const dialog = electron.remote.dialog;

export default function exportApp(snapshot) {
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

  const tags = snapshot.tags.map(ele => {
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

  const templateCSS = `html {
  box-sizing: border-box;
  height: 100%;
}
body { 
  margin: 0;
  padding-top: 20%;
  overflow: hidden;
  background-color: #272727;
  font-family: "Helvetica Neue";
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
}
h1 {
  color: white;
  font-size: 3rem;
}
p {
  color: white;
  font-size: 1.5rem;
}
.default-spans {
  color: #4338ca;
}`;

  const templatePackage = `{
"name": "exported-project",
"version": "1.0.0",
"description": "",
"main": "index.js",
"keywords": [],
"author": "",
"license": "ISC",
"scripts": {
  "clean": "rm dist/bundle.js",
  "build-dev": "webpack --mode development",
  "build-prod": "webpack --mode production",
  "start": "webpack serve --hot --mode development"
},
"dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-hot-loader": "^4.13.0"
},
"devDependencies": {
  "webpack": "^5.68.0",
  "webpack-cli": "^4.9.2",
  "babel-loader": "^8.2.3",
  "@babel/core": "^7.16.12",
  "@babel/preset-env": "^7.16.11",
  "@hot-loader/react-dom": "^17.0.2+4.13.0",
  "@babel/preset-react": "^7.16.7",
  "webpack-dev-server": "^4.7.3",
  "css-loader": "^6.5.1",
  "style-loader": "^3.3.1"
}
}`;

  const ticks = '```';
  const templateReadMe = `# exported-project

## Building and running on localhost

First install dependencies:

${ticks}sh
npm install
${ticks}

To run in hot module reloading mode:

${ticks}sh
npm start
${ticks}

To create a production build:

${ticks}sh
npm run build-prod
${ticks}

To create a development build:

${ticks}sh
npm run build-dev
${ticks}

## Running

Open the file 'dist/index.html' in your browser

## Credits

Made with [fflow.io](https://fflow.io/)`;

  const templateGitIgnore = `.cache/
coverage/
dist/*
!dist/index.html
node_modules/
*.log

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db`;

  const templateWebpack = `const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;`;

  const templateBabel = `{
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'react-hot-loader/babel'
  ]
}`;

  const path = df();
  const name = 'Exported_Project';

  //iterate through files array, create file for each, fill with its code key

  const files = snapshot.files;
  for (let i = 1; i < files.length; i++) {
    //start at one to skip app file which has it's own template
    const curr = files[i];
    fse.outputFile(path + `/${name}/src/${curr.name}`, curr.fileCode);
  }

  fse.outputFile(path + `/${name}/dist/index.html`, templateHTML);
  fse.outputFile(path + `/${name}/src/index.js`, templateIndexJS);
  fse.outputFile(path + `/${name}/src/App.js`, templateAppJS);
  fse.outputFile(path + `/${name}/src/styles.css`, templateCSS);
  fse.outputFile(path + `/${name}/.gitignore`, templateGitIgnore);
  fse.outputFile(path + `/${name}/package.json`, templatePackage);
  fse.outputFile(path + `/${name}/README.md`, templateReadMe);
  fse.outputFile(path + `/${name}/webpack.config.js`, templateWebpack);
  fse.outputFile(path + `/${name}/.babelrc`, templateBabel);
  alert('Files downloaded to download folder');
}
