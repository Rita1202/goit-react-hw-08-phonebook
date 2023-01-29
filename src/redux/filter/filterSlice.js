import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
