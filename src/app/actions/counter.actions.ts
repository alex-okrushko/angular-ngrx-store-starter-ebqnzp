import { createAction, props } from '@ngrx/store';
export const increment = createAction('[Counter] Increment Counter');
export const decrement = createAction('[Counter] Decrement Counter');
export const storeCounter = createAction(
  '[Counter] Store Counter',
  props<{ val: number }>()
);
