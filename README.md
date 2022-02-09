<br />
<div align="center">
  <a href="https://github.com/oslabs-beta/fflow">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">fflow</h3>

  <p align="center">
    <strong>Supercharge your React development process</strong>
    <br />
    <a href="https://github.com/oslabs-beta/fflow"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/oslabs-beta/fflow">View Demo</a>
    ·
    <a href="https://github.com/oslabs-beta/fflow/issues">Report Bug</a>
    ·
    <a href="https://github.com/oslabs-beta/fflow/issues">Request Feature</a>
  </p>
</div>

<p align="center">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/oslabs-beta/fflow">
  <img alt="GitHub license" src="https://img.shields.io/github/license/oslabs-beta/fflow?color=blue">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/oslabs-beta/fflow?color=yellow">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/fflow?color=blueviolet">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/fflow?style=social">  
  <br />
  <br />
  Give a ⭐️ if our project helped or interests you!
</p>

<br />

<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
       <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#production-mode">Production Mode</a></li>
        <li><a href="#development-mode">Development Mode</a></li>
      </ul>
    </li>
    <li><a href="#run-exported-project">Run Exported Project</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing-guide">Contributing Guide</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About

fflow is a frontend developer tool to create React applications in no time and with minimal effort using the simple drag and drop UI. It combines the most compelling features of Create React App, React ES6 snippets, and a beautiful user experience.

👉 https://fflow.dev

GIFS to be inserted here and centered aligned

### Features

- Drag, Drop, Reorder and Delete HTML Tags
- Create Custom React Components
- Light and Dark Theme based on OS Preferences and Manual Toggle
- Delete Project to restart project
- Clear current canvas to restart nesting in a component
- Live preview in code editor with the ability to edit or add code to your JavaScript, HTML, and CSS files
- File tree switch between React components
- Export your code files with webpack to instantly setup your project
- Localstorage sync
- Canvas outline when HTML tag or Component is dragged over it

### Built with

- [React.js](https://reactjs.org/)
- [Electron](https://www.electronjs.org/)
- [React-Monaco/Editor](https://github.com/react-monaco-editor/react-monaco-editor)
- [Webpack 5](https://webpack.js.org)
- [TailwindUI](https://tailwindui.com)
- [React–Redux](https://react-redux.js.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Modal](https://github.com/reactjs/react-modal)
<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

The following instructions are split into two sections for:

- [Production Mode](#production-mode)
- [Development Mode](#development-mode)

### Production Mode

Download for [MacOS](https://github.com/oslabs-beta/fflow/releases), [Windows](https://github.com/oslabs-beta/fflow/releases), [Linux](https://github.com/oslabs-beta/fflow/releases).

- **Mac users**: After opening the dmg and dragging fflow into your Applications folder, `CTL + Click` the icon and 'Open' from the context menu to open the app. This extra step is necessary since we don't have an Apple developer license yet.

- **Windows users**: Install the application by running fflow setup 1.0.0.exe.

- **Linux users**: Run the application as a super user in order to read and write files.

### Keyboard Shortcuts (Mac and Windows)

| Shortcut         | Description               |
| ---------------- | ------------------------- |
| `cmd+e` `ctrl+e` | Export Project            |
| `cmd+z` `ctrl+z` | Undo last action          |
| `cmd+y` `ctrl+y` | Redo action               |
| `del`            | Delete selected component |
| `c`              | Toggle Code panel         |
| `t`              | Toggle directory tree     |

<details>
  <summary>Mac Shortcuts</summary>
  <ul>
    <li>Export Project: Command + e</li>
    <li>Undo: Command + z</li>
    <li>Redo: Command + Shift + z</li>
    <li>Save Project As: Command + s</li>
    <li>Save Project: Command + shift + s</li>
    <li>Delete HTML Tag on Canvas: Backspace</li>
    <li>Delete Project: Command + Backspace</li>
    <li>Open Project: Command + o</li>
  </ul>
</details>

<details>
  <summary>Windows Shortcuts</summary>
  <ul>    
    <li>Export Project: Control + e</li>
    <li>Undo: Control + z</li>
    <li>Redo: Control + Shift + z</li>
    <li>Save Project As: Control + s</li>
    <li>Save Project: Control + shift + s</li>
    <li>Delete HTML Tag on Canvas: Backspace</li>
    <li>Delete Project: Control + Backspace</li>
    <li>Open Project: Control + o</li>
  </ul>
</details>

### Development Mode

#### Clone this repo

1. Clone this repo

```
git clone https://github.com/oslabs-beta/fflow
```

2. Install the dependencies

```
npm install
```

3. Run script for development mode

```
npm run start
```

4. Build the app (automatic)

```
npm run package
```

5. Build the app (manual)

```
npm run build
```

6. Test the app (after `npm run build` || `yarn run build`)

```
npm run prod
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Run Exported Project

Below is the generated directory structure of the React and Webpack application that is created when you export your application.

```
├── dist                    # Compiled files
│    └── index.html
├── src                     # Source files
│    └── App.js
│    └── index.js
│    └── styles.css
├── test                    # Automated tests (alternatively `spec` or `tests`)
├── webpack.config.js       # Webpack configuration
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── package.json            # Dependencies file
└── README.md               # Boilerplate README file

```

1. Open exported project directory in your Downloads folder
2. Install dependencies

```
npm install
```

3. Start an instance

```
npm run start
```

4. `Localhost:8080` should open automatically in your default browser. If it does not, open browser and navigate to the specified port

<br />

### Add Sass

Adding Sass to your exported project requires updating webpack configs and adding necessary loaders.

1. Install loaders for sass, `sass-loader` and `node-sass`
2. Add another object to the rules in `webpack.config` with the following:

```javascript
 {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
```

3. Rename `styles.css` to `styles.scss`

### Add Tailwind

Adding Tailwind to your exported project requires updating webpack configs, adding necessary loaders and tailwind config.

1. Install tailwind as a dependency

```
npm install tailwindcss
```

2. Install postcss-loader and autoprefixer as development dependencies

```
npm install -D postcss-loader autoprefixer
```

3. Copy the following copy into `src/styles.css`

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

4. Create a `postcss.config.js` file and copy the following code in

```javascript
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

5. Add `'postcss-loader'` to the css rules in `webpack.config`

### Change App Title

This boilerplate names your project `Exported Project`. You can change the app title by inserting the app title within the `<title> </title>` tags in `index.html`.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributors

- Rain Hsu [@crumblepie](https://github.com/crumblepie) | [Linkedin](https://www.linkedin.com/in/rainhsu/)
- Jake Pino [@jakepino](https://github.com/jakepino) | [Linkedin](https://www.linkedin.com/in/jakepino/)
- Bryanna DeJesus [@BryannaDeJesus](https://github.com/BryannaDeJesus) | [Linkedin](https://www.linkedin.com/in/bryannadejesus/)
- Ronak Hirpara [@ronakh130](https://github.com/ronakh130) | [Linkedin](https://www.linkedin.com/in/ronak-hirpara/)

Project Links: [Github](https://github.com/oslabs-beta/fflow) | [Linkedin](https://www.linkedin.com/company/fflow-io) | [Press]

## Roadmap

- GitHub OAuth Integration and online project save
- Export in TypeScript
- Save Multiple Projects
- Create Custom HTML Elements
- Open and compose multiple projects in different windows simultaneously
- Dynamic CSS and HTML Editor
- BrowserView to preview project
- Live Editing with other collaborators
- AWS hosted version

## Contributing Guide

Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contributions are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork this repo
2. Create your Feature Branch (git checkout -b yourgithubhandle/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin yourgithubhandle/AmazingFeature)
5. Open a Pull Request

<!-- Read our [contributing guide](https://github.com/oslabs-beta/CONTRIBUTING.md) for more information on how to propose fixes and improvements to fflow. -->

## License

Licensed under MIT License © [fflow](fflow.dev).
