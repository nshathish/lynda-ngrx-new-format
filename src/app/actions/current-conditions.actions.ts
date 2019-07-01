import { createAction, props } from '@ngrx/store';

export const currentConditionsLoaded = createAction(
  '[CurrentConditions] Current Conditions Loaded',
  props<{ zipCode: string, conditions: any }>()
);

export const currentConditionsLoadFailed = createAction(
  '[CurrentConditions] Current Conditions Load Failed',
  props<{ zipCode: string, error: any }>()
);

export type CurrentConditionsActionsUnion = ReturnType<typeof currentConditionsLoaded | typeof currentConditionsLoadFailed>;




