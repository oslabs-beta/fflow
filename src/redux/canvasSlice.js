import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: [],
  code: '',
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
      name: 'App.jsx',
      fileCode: 'hihihi',
      fileTags: [],
      fileImports: [],
      fileComponents: [], //transfer code - line 7 into fileCode before we display new component code in the onclick
    },
  ],
  currentFile: 'App.jsx',
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      // console.log('addComponent fired');
      state.components.splice(action.payload.destination.index, 0, action.payload.draggableId);
      state.tags.splice(action.payload.destination.index, 0, '\n\t\t\t' + state.codeList[action.payload.draggableId]);
    },
    deleteComponent: (state, action) => {
      // console.log('deleteComponent fired');
      if (confirm(`Delete this component?\n${action.payload.name + ' in position ' + action.payload.index}`)) {
        state.components.splice(action.payload.index, 1);
        state.tags.splice(action.payload.index, 1);
        //if custom component, remove from customComp array, files array, and imports
        for (let i = 0; i < state.customComponents.length; i++) {
          const curr = state.customComponents[i];
          if(curr === action.payload.name){
            state.customComponents.splice(i, 1);
            state.files.splice(i + 1, 1);
            state.imports.splice(i + 1, 1);
          }
        }
      }
    },
    reorderComponent: (state, action) => {
      // console.log('reorderComponent fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      state.components.splice(action.payload.destination.index, 0, item);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      state.tags.splice(action.payload.destination.index, 0, tag);
    },
    clearComponents: (state) => {
      // console.log('clearComponents fired');
      state.components = [];
      state.tags = [];
      state.code = '';
    },
    combineComponents: (state, action) => {
      // console.log('combineComponents fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      const index = action.payload.combine.draggableId.split('-')[0];
      // console.log('index is: ', index);
      if (Array.isArray(state.components[index])) {
        state.components[index].push(item);
      } else {
        state.components.splice(index, 1, [state.components[index], item]);
      }
    },
    refreshCode: (state) => {
      const name = state.currentFile.split('.')[0];
      state.code = `${state.imports.join('')}\nconst ${name} = () => {\n\treturn (\n\t\t<div>${state.tags}\n\t\t</div>\n\t)\n}\nexport default ${name};`;
    },
    createComponent: (state, action) => {
      console.log('createComponent fired');
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
      const { currentFile } = action.payload;
      for (const file of state.files) {
        //iterate thru list of files to find match
        if (file.name === currentFile) {
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
      console.log('current file payload:', action.payload);
      state.currentFile = action.payload;
    },
    saveComponentCode: (state, action) => {
      const { currentCode, currentFile } = action.payload;
      state.files.forEach((file) => {
        if (file['name'] === currentFile) {
          // find file in list and take snapshot of code
          file.fileCode = currentCode;
          file.fileTags = state.tags;
          file.fileImports = state.imports;
          file.fileComponents = state.components;
        }
      });
      // state.code = currentCode;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addComponent,
  deleteComponent,
  reorderComponent,
  clearComponents,
  combineComponents,
  refreshCode,
  createComponent,
  renderComponentCode,
  saveComponentCode,
  setCurrentFile,
} = canvasSlice.actions;

export default canvasSlice.reducer;
