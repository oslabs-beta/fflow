import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: [],
  customComponents: [],
  tags: [],
  code: '',
  codeList: {
    Div: `<div className=''></div>`,
    Paragraph: `<p></p>`,
    Anchor: `<a></a>`,
    Image: `<img></img>`,
    'Unordered List': `<ul className=''></ul>`,
    Form: `<form className=''></form>`,
    'Ordered List': `<ol className=''></ol>`,
    Button: `<button className=''></button>`,
    'List Item': `<li></li>`,
    Span: `<span className=''></span>`,
    'Header 1': `<h1 className=''></h1>`,
    'Header 2': `<h2 className=''></h2>`,
    'Header 3': `<h3 className=''></h3>`,
  },
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log('addComponent fired');
      state.components.splice(action.payload.destination.index, 0, action.payload.draggableId);
      state.tags.push('\n\t\t\t' + state.codeList[action.payload.draggableId]);
    },
    deleteComponent: (state, action) => {
      console.log('deleteComponent fired');
      if (confirm(`Delete this component?\n${action.payload.name + ' in position ' + action.payload.index}`)) {
        state.components.splice(action.payload.index, 1);
        state.tags.splice(action.payload.index, 1);
      }
    },
    reorderComponent: (state, action) => {
      console.log('reorderComponent fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      state.components.splice(action.payload.destination.index, 0, item);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      state.tags.splice(action.payload.destination.index, 0, tag);
    },
    clearComponents: (state) => {
      console.log('clearComponents fired');
      state.components = [];
      state.tags = [];
    },
    combineComponents: (state, action) => {
      console.log('combineComponents fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      const [tag] = state.tags.splice(action.payload.source.index, 1);
      const index = action.payload.combine.draggableId.split('-')[0];
      console.log('index is: ', index);
      if (Array.isArray(state.components[index])) {
        state.components[index].push(item);
      } else {
        state.components.splice(index, 1, [state.components[index], item]);
      }
    },
    refreshCode: (state) => {
      state.code = `import React from 'react';\n\nconst App = () => {\n\treturn (\n\t\t<div className='App'>${state.tags}\n\t\t</div>\n\t)\n}\nexport default App;`;
    },
    createComponent: (state, action) => {
      console.log('createComponent fired');
      const { check } = action.payload;
      let { text } = action.payload;
      //add to tags array for code preview
      text = text[0].toUpperCase() + text.slice(1);
      const newTag = `\n\t\t\t<${text}><${text}/>`;
      state.tags.splice(0, 0, newTag);
      state.customComponents.push(text);
      //add to component array for canvas
      state.components.splice(0, 0, text);
    },
    addCustom: (state) => {
      console.log('addCustom fired');
      state.components.splice(action.payload.destination.index, 0, action.payload.draggableId);
      state.tags.push('\n\t\t\t' + state.codeList[action.payload.draggableId]);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addComponent, deleteComponent, reorderComponent, clearComponents, combineComponents, refreshCode, createComponent } = canvasSlice.actions;

export default canvasSlice.reducer;
