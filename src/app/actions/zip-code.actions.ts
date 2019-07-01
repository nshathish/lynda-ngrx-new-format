import { createAction, props } from '@ngrx/store';

export const addZipcode = createAction(
  '[Zipcode] Add Zip Code',
  props<{ zipCode: string }>()
);

export const removeZipcode = createAction(
  '[Zipcode] Remove Zip Code',
  props<{ zipCode: string }>()
);

export type ZipCodeActionsUnion = ReturnType<typeof addZipcode | typeof removeZipcode>;




