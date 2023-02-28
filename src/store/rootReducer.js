import tasksReducer from './slices/toDoSlice';

const rootReducer = {
  toDoList: tasksReducer,
};

export default rootReducer;
