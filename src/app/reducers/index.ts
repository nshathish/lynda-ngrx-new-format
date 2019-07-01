import {
  ActionReducerMap,
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
