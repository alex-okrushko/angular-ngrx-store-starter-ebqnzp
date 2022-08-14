import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, count: state.count + 2 })),
  on(decrement, state => ({ ...state, count: state.count - 1 }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
