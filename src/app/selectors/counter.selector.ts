import { AppState } from '../reducers';
import { createSelector, defaultMemoize } from '@ngrx/store';
import { createSelectorFactory, isEqualCheck } from '@ngrx/store/src/selector';

export const selectCounterState = (state: AppState) => state.counter;

export const createInstrumentedSelector: typeof createSelector = (
  ...input: any[]
) => {
  (projectionFn) => defaultMemoize(projectionFn, isEqualCheck, isEqualCheck);
  return createSelectorFactory(defaultMemoize)(...input);
};

export const getCount = createInstrumentedSelector(
  selectCounterState,
  (counter) => counter.count
);
