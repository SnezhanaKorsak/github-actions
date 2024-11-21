import { combineReducers } from '@reduxjs/toolkit';

import { taskCategoriesReducer } from '@/store/task-categories/slice';

export const rootReducer = combineReducers({
  taskCategories: taskCategoriesReducer,
});
