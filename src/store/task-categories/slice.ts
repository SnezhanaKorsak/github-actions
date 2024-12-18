import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Category, CategoryInfo, Task } from '@/types/index';
import { getRandomColor } from '@/utils/get-random-color';
import { filterTaskById, findTaskById } from '@/utils/tasks';

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
      const { description, tasksList } = action.payload;
      const category = action.payload.category.toLowerCase();

      if (category in state.data) {
        state.data[category].tasks.push(...tasksList);
      } else {
        state.data[category] = {
          title: category,
          description,
          tasks: tasksList.length != 0 ? tasksList : [],
          bgColor: getRandomColor(),
        };
      }
    },
    addTaskToCategory: (
      state,
      action: PayloadAction<{ category: string; task: Task }>,
    ) => {
      const { category, task } = action.payload;
      if (category in state.data) {
        state.data[category].tasks.push(task);
      }
    },
    changeCategoryDescription: (
      state,
      action: PayloadAction<{ category: string; description: string }>,
    ) => {
      const { category, description } = action.payload;
      state.data[category].description = description;
    },
    changeTaskNameInCategory: (
      state,
      action: PayloadAction<{
        category: string;
        newTaskName: string;
        taskId: string;
      }>,
    ) => {
      const { category, newTaskName, taskId } = action.payload;
      const tasksList = state.data[category].tasks;
      const editableTask = findTaskById(tasksList, taskId);

      if (editableTask) {
        editableTask.name = newTaskName;
      }
    },
    changeTaskStatusInCategory: (
      state,
      action: PayloadAction<{
        category: string;
        newTaskStatus: boolean;
        taskId: string;
      }>,
    ) => {
      const { category, newTaskStatus, taskId } = action.payload;
      const tasksList = state.data[category].tasks;
      const editableTask = findTaskById(tasksList, taskId);

      if (editableTask) {
        editableTask.status = newTaskStatus;
      }
    },
    deleteTaskInCategory: (
      state,
      action: PayloadAction<{
        category: string;
        taskId: string;
      }>,
    ) => {
      const { category, taskId } = action.payload;
      const tasksList = state.data[category].tasks;

      state.data[category].tasks = filterTaskById(tasksList, taskId);
    },
    deleteCategory: (state, action: PayloadAction<{ category: string }>) => {
      const { category } = action.payload;

      if (category in state.data) {
        delete state.data[category];
      }
    },
  },
});

export const taskCategoriesReducer = taskCategoriesSlice.reducer;

export const {
  createTaskCategory,
  changeCategoryDescription,
  changeTaskNameInCategory,
  changeTaskStatusInCategory,
  addTaskToCategory,
  deleteTaskInCategory,
  deleteCategory,
} = taskCategoriesSlice.actions;
