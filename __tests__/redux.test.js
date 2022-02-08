import reducer, { addComponent } from '../src/redux/canvasSlice';

describe('canvasSlice reducers work', () => {
  let initialState;

  function addCompTest(state, action) {
    state.components.splice(action.destination.index, 0, action.draggableId);
    state.tags.splice(action.destination.index, 0, '\n\t\t\t' + state.codeList[action.draggableId]);
    return state;
  }

  function createAction(index, id) {
    return {
      destination: {
        index,
      },
      draggableId: id,
    };
  }

  beforeAll(() => {
    initialState = {
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
          name: 'App.js',
          fileCode: '',
          fileTags: [],
          fileImports: [],
          fileComponents: [],
        },
      ],
      currentFile: 'App.js',
    };
  });

  afterEach(() => {
    console.log(initialState);
  });

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('addComponent adds to initial state', () => {
    const action = createAction(0, 'Div');
    expect(reducer(initialState, addComponent(action))).toEqual(addCompTest(initialState, action));
  });

  test('should add to end of array', () => {
    const action = createAction(1, 'Button');
    expect(reducer(initialState, action)).toEqual(addCompTest(initialState, action));
  });

  test('should add to middle of array', () => {
    const action = createAction(1, 'Anchor');
    expect(reducer(initialState, action)).toEqual(addCompTest(initialState, action));
  });
});
