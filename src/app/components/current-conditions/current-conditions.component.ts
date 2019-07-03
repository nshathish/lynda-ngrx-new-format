import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, selectCurrentConditionsList, selectZipcodeList } from '../../reducers';
import { Observable } from 'rxjs';
import { ZipcodeActions } from '../../actions';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  zipCodes$: Observable<string[]>;
  currentConditions$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this.zipCodes$ = store.select(selectZipcodeList);
    this.currentConditions$ = store.select(selectCurrentConditionsList);
  }

  onRemoveZip(zipCode: string) {
    this.store.dispatch(ZipcodeActions.removeZipcode({ zipCode }));
  }

  ngOnInit() {
  }

}
