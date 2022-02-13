import reducer, { addComponent, clearProject, createComponent, reorderComponent, setCurrentFile } from '../src/redux/canvasSlice';

describe('canvasSlice reducers', () => {
  let initialState;

  function addCompTest(state, action) {
    state.components.splice(action.destination.index, 0, action.draggableId);
    state.tags.splice(action.destination.index, 0, '\n\t\t\t' + state.codeList[action.draggableId]);
    return state;
  }

  function createAction(end, id, start) {
    return {
      destination: {
        index: end,
      },
      source: {
        index: start,
      },
      draggableId: id,
      name: id,
    };
  }

  beforeEach(() => {
    initialState = {
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
  });

  describe('addComponent:', () => {
    test('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('should add to initial state', () => {
      const action = createAction(0, 'Div');
      expect(reducer(initialState, addComponent(action))).toEqual(addCompTest(initialState, action));
    });

    test('should add to end of array', () => {
      const action = createAction(1, 'Button');
      expect(reducer(initialState, addComponent(action))).toEqual(addCompTest(initialState, action));
    });

    test('should add to middle of array', () => {
      const action = createAction(1, 'Anchor');
      expect(reducer(initialState, addComponent(action))).toEqual(addCompTest(initialState, action));
    });
  });

  describe('reorderComponent:', () => {
    test('should swap 2 items', () => {
      const action = createAction(1, 'Button', 2);
      const comps = ['Div', 'Button', 'Anchor'];
      const tags = comps.map((ele) => '\n\t\t\t' + initialState.codeList[ele]);
      addCompTest(initialState, createAction(0, 'Div'));
      addCompTest(initialState, createAction(1, 'Anchor'));
      addCompTest(initialState, createAction(2, 'Button'));
      expect(reducer(initialState, reorderComponent(action))).toEqual({ ...initialState, components: comps, tags: tags });
    });
  });

  describe('clearProject:', () => {
    test('should reset initial state', () => {
      addCompTest(initialState, createAction(0, 'Div'));
      const newState = {
        ...initialState,
        components: [],
        tags: [],
      };
      expect(reducer(initialState, clearProject())).toEqual(newState);
    });
  });

  describe('createComponent:', () => {
    test('should create new custom component', () => {
      const state = {
        ...initialState,
        tags: ['\n\t\t\t<TestFile />'],
        customComponents: ['TestFile'],
        components: ['TestFile'],
        imports: ["import React from 'react';\n", "import TestFile from './TestFile.jsx';\n"],
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
          {
            type: 'file',
            name: 'TestFile.jsx',
            fileCode: `import React from 'react';\n\nconst TestFile = () => {\n\treturn (\n\t\t<div>\n\t\t</div>\n\t)\n}\nexport default TestFile;`,
            fileTags: [],
            fileImports: ["import React from 'react';\n"],
            fileComponents: [],
          },
        ],
      };
      expect(reducer(initialState, createComponent({ text: 'TestFile' }))).toEqual(state);
    });
  });

  describe('setCurrentFile:', () => {
    test('should update state', () => {
      expect(reducer(initialState, setCurrentFile('TestFile.jsx'))).toEqual({ ...initialState, currentFile: 'TestFile.jsx' });
    });
  });
});
