import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tagList: {
    divTag: 'Div',
    pTag: 'Paragraph',
    aTag: 'Anchor',
    imgTag: 'Image',
    ulTag: 'Unordered List',
    formTag: 'Form',
    olTag: 'Ordered List',
    buttonTag: 'Button',
    liTag: 'List Item',
    spanTag: 'Span',
    h1Tag: 'Header 1',
    h2Tag: 'Header 2',
    h3Tag: 'Header 3',
  },
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = tagsSlice.actions;

export default tagsSlice.reducer;
