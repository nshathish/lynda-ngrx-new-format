import { Action, createReducer, on } from '@ngrx/store';

import { CurrentConditionsActionsUnion } from '../actions/current-conditions.actions';
import { CurrentConditionActions } from '../actions';



export interface CurrentConditionState {
  currentConditions: Map<string, any>;
}

export const initialState: CurrentConditionState = {
  currentConditions: new Map<string, any>()
};

const currentConditionsReducer = createReducer(
  initialState,
  on(CurrentConditionActions.currentConditionsLoaded, (state, { zipCode, conditions }) => {
    const cc = new Map(state.currentConditions);
    cc.set(zipCode, conditions);
    return { ...state, currentConditions: cc };
  })
);

export function reducer(state: CurrentConditionState | undefined, action: CurrentConditionsActionsUnion) {
  return currentConditionsReducer(state, action);
}
