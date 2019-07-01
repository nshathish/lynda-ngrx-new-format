import { Action, createReducer, on } from '@ngrx/store';
import { ZipcodeActions } from '../actions';


export interface ZipCodeState {
  zipCodes: string[];
}

export const initialState: ZipCodeState = {
  zipCodes: []
};

const zipCodesReducer = createReducer(
  initialState,
  on(ZipcodeActions.addZipcode, (state, { zipCode }) => ({ ...state, zipCodes: [...state.zipCodes, zipCode ]})),
  on(ZipcodeActions.removeZipcode, (state, { zipCode }) => ({ ...state, zipCodes: state.zipCodes.filter(z => z !== zipCode) }))
);

export function reducer(state: ZipCodeState | undefined, action: Action) {
  return zipCodesReducer(state, action);
}
