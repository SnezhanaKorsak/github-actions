import { createSelector } from '@reduxjs/toolkit';

import { filterTaskByStatus } from '@/utils/tasks';

import type { RootState } from '..';

const taskCategoriesDataSelector = (state: RootState) => state.taskCategories;

export const taskCategoriesSelector = createSelector(
  taskCategoriesDataSelector,
  ({ data }) => {
    return Object.entries(data);
  },
);

export const taskInfoByCategorySelector = createSelector(
  taskCategoriesDataSelector,
  ({ data }) =>
    (category: string) => {
      return data[category];
    },
);

export const allTasksCounterSelector = createSelector(
  taskCategoriesDataSelector,
  ({ data }) => {
    return Object.values(data).reduce((count, category) => {
      const notCompletedTasks = filterTaskByStatus(category.tasks, false);
      return count + notCompletedTasks.length;
    }, 0);
  },
);

export const categoriesSelector = createSelector(
  taskCategoriesDataSelector,
  ({ data }) => {
    return Object.keys(data);
  },
);
