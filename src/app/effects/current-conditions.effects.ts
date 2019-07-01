import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { CurrentConditionActions, ZipcodeActions } from '../actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';



@Injectable()
export class CurrentConditionsEffects {

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActions.addZipcode),
    mergeMap(action =>
      this.weatherService.loadCurrentConditions(action['zipCode']).pipe(
        tap(data => console.log(data)),
        map(data => CurrentConditionActions.currentConditionsLoaded({ zipCode: action['zipCode'], conditions: data })),
        catchError(error => of(CurrentConditionActions.currentConditionsLoadFailed({ zipCode: action['zipCode'], error })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService) {}

}
