import { createSelector } from '@reduxjs/toolkit';

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
