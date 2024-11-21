import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Category, CategoryInfo, Task } from '@/types/index';
import { getRandomColor } from '@/utils/get-random-color';

type TaskCategoriesState = {
  [key: string]: CategoryInfo;
};

type State = {
  data: TaskCategoriesState;
};

const initialState: State = {
  data: {},
};

const taskCategoriesSlice = createSlice({
  name: 'taskCategories',
  initialState,
  reducers: {
    createTaskCategory: (
      state,
      action: PayloadAction<Category & { category: string }>,
    ) => {
      const { category, description, tasksList } = action.payload;

      if (category in state.data) {
        state.data[category].tasks.push(...tasksList);
      } else {
        state.data[category] = {
          title: category,
          description,
          tasks: tasksList,
          bgColor: getRandomColor(),
        };
      }
    },
    addTaskToCategory: (
      state,
      action: PayloadAction<{ category: string; tasks: Task[] }>,
    ) => {
      const { category, tasks } = action.payload;
      if (state.data) {
        state.data[category].tasks.push(...tasks);
      }
    },
  },
});

export const taskCategoriesReducer = taskCategoriesSlice.reducer;

export const { createTaskCategory, addTaskToCategory } =
  taskCategoriesSlice.actions;
