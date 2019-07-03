import {
  ActionReducerMap, createSelector,
  MetaReducer
} from '@ngrx/store';

import { CurrentConditionState, reducer as currentConditionReducer } from './current-conditions.reducer';
import { ZipCodeState, reducer as zipCodeReducer } from './zip-codes.reducer';

import { environment } from '../../environments/environment';


export interface AppState {
  zipCodes: ZipCodeState,
  currentConditions: CurrentConditionState
}

export const reducers: ActionReducerMap<AppState> = {
  zipCodes: zipCodeReducer,
  currentConditions: currentConditionReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: AppState) => state.zipCodes;
export const selectZipcodeList = createSelector(
  selectZipcodeState,
  (state: ZipCodeState) => state.zipCodes);

export const selectCurrentConditionState = (state: AppState) => state.currentConditions;
export const selectCurrentConditionsList = createSelector(
  selectCurrentConditionState,
  (state: CurrentConditionState) => state.currentConditions
);
