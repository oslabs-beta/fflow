import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: [],
  code: '',
  cssCode: `html {
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
}`,
  tags: [],
  customComponents: [],
  imports: ["import React from 'react';\n"],
  codeList: {
    Div: `<div className=''></div>`,
    Paragraph: `<p className=''></p>`,
    Anchor: `<a href='' className=''></a>`,
    Image: `<img className=''></img>`,
    'Unordered List': `<ul className=''></ul>`,
    Form: `<form className=''></form>`,
    Input: `<input className=''></input>`,
    'Ordered List': `<ol className=''></ol>`,
    Button: `<button className=''></button>`,
    'List Item': `<li className=''></li>`,
    Span: `<span className=''></span>`,
    'Header 1': `<h1 className=''></h1>`,
    'Header 2': `<h2 className=''></h2>`,
    'Header 3': `<h3 className=''></h3>`,
    'Line Break': `<br>`,
    Table: `<table className=''></table>`,
    THead: `<thead className=''></thead>`,
  },
  files: [
    {
      type: 'file',
      name: 'App.js',
      fileCode: '',
      fileTags: [],
      fileImports: [],
      fileComponents: [],
    },
    {
      type: 'file',
      name: 'styles.css',
      fileCode: '',
      fileTags: [],
      fileImports: [],
      fileComponents: [],
    },
  ],
  currentFile: 'App.js',
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      // insert action.payload.draggableId at action.payload.destination.index
      state.components.splice(action.payload.destination.index, 0, action.payload.draggableId);
      state.tags.splice(action.payload.destination.index, 0, '\n\t\t\t' + state.codeList[action.payload.draggableId]);
    },
    deleteComponent: (state, action) => {
      if (confirm(`Delete this component?\n${action.payload.name + ' in position ' + action.payload.index}`)) {
        state.components.splice(action.payload.index, 1);
        state.tags.splice(action.payload.index, 1);
        //if custom component, remove from customComp array, files array, and imports
        for (let i = 0; i < state.customComponents.length; i++) {
          const curr = state.customComponents[i];
          if (curr === action.payload.name) {
            state.customComponents.splice(i, 1);
            state.files.splice(i + 2, 1);
            state.imports.splice(i + 2, 1);
          }
        }
      }
    },
    reorderComponent: (state, action) => {
      const [item] = state.components.splice(action.payload.source.index, 1);
      state.components.splice(action.payload.destination.index, 0, item);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      state.tags.splice(action.payload.destination.index, 0, tag);
    },
    clearProject: (state) => {
      state.components = [];
      state.tags = [];
      state.code = '';
      state.imports = ["import React from 'react';\n"];
      state.customComponents = [];
      state.files = [
        {
          type: 'file',
          name: 'App.js',
          fileCode: '',
          fileTags: [],
          fileImports: [],
          fileComponents: [],
        },
        {
          type: 'file',
          name: 'styles.css',
          fileCode: '',
          fileTags: [],
          fileImports: [],
          fileComponents: [],
        },
      ];
      state.currentFile = 'App.js';
    },
    combineComponents: (state, action) => {
      const [item] = state.components.splice(action.payload.source.index, 1);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      const index = action.payload.combine.draggableId.split('-')[0];

      if (Array.isArray(state.components[index])) {
        state.components[index].push(item);
      } else {
        state.components.splice(index, 1, [state.components[index], item]);
      }
    },
    refreshCode: (state) => {
      const name = state.currentFile.split('.')[0];
      state.code = `${state.imports.join('')}\nconst ${name} = () => {\n\treturn (\n\t\t<div>${state.tags.join(
        ';'
      )}\n\t\t</div>\n\t)\n}\nexport default ${name};`;
    },
    createComponent: (state, action) => {
      const { text } = action.payload;
      const newTag = `\n\t\t\t<${text} />`;
      const fileName = `${text}.jsx`;
      state.tags.push(newTag); // add custom comp to code
      state.customComponents.push(text); // add to list of custom comps
      state.components.push(text); // add to canvas
      state.imports.push(`import ${text} from './${text}.jsx';\n`); // add as import
      state.files.push({
        // add to file system
        type: 'file',
        name: fileName,
        fileCode: `import React from 'react';\n\nconst ${text} = () => {\n\treturn (\n\t\t<div>\n\t\t</div>\n\t)\n}\nexport default ${text};`,
        fileTags: [],
        fileImports: ["import React from 'react';\n"],
        fileComponents: [],
      });
    },
    renderComponentCode: (state, action) => {
      const { name } = action.payload;
      for (const file of state.files) {
        //iterate thru list of files to find match
        if (file.name === name) {
          // if match, pull all values and update outer state
          state.code = file.fileCode;
          state.tags = file.fileTags;
          state.imports = file.fileImports;
          state.components = file.fileComponents;
          state.currentFile = file.name;
        }
      }
    },
    setCurrentFile: (state, action) => {
      state.currentFile = action.payload;
    },
    saveComponentCode: (state) => {
      // const { currentCode, currentFile } = action.payload;
      state.files.forEach((file) => {
        if (file.name === state.currentFile) {
          // find file in list and take snapshot of code
          file.fileCode = state.code;
          file.fileTags = state.tags;
          file.fileImports = state.imports;
          file.fileComponents = state.components;
        }
      });
    },
    updateCss: (state, action) => {
      state.cssCode = action.payload;
    },
    updateJs: (state, action) => {
      state.code = action.payload;
    },
    loadPrevState: (state, action) => {
      const newState = action.payload;
      state.components = newState.components;
      state.code = newState.code;
      state.cssCode = newState.cssCode;
      state.tags = newState.tags;
      state.customComponents = newState.customComponents;
      state.imports = newState.imports;
      state.codeList = newState.codeList;
      state.files = newState.files;
      state.currentFile = newState.currentFile;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addComponent,
  deleteComponent,
  reorderComponent,
  clearProject,
  combineComponents,
  refreshCode,
  createComponent,
  renderComponentCode,
  saveComponentCode,
  setCurrentFile,
  updateCss,
  updateJs,
  loadPrevState,
} = canvasSlice.actions;

export default canvasSlice.reducer;

