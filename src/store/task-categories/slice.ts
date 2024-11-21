import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Category, Task } from '@/types/index';

type TaskCategoriesState = {
  [key: string]: {
    description: string;
    tasks: Task[];
  };
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
    createTaskCategory: (state, action: PayloadAction<Category>) => {
      const { category, description, tasksList } = action.payload;

      if (category in state.data) {
        state.data[category].tasks.push(...tasksList);
      } else {
        state.data[category] = {
          description,
          tasks: tasksList,
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
