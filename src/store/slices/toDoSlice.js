import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const toDoSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },

  reducers: {
    createTask (state, action) {
      state.tasks.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
    deleteTask (state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    updateTask (state, action) {
      const index = state.tasks.findIndex(
        item => item.id === action.payload.id
      );
      console.log('index :>> ', index);
      state.tasks[index] = {
        ...state.tasks[index],
        ...action.payload.updatedData,
      };
    },
  },
});

const { reducer, actions } = toDoSlice;
export const { createTask, deleteTask, updateTask } = actions;
export default reducer;
