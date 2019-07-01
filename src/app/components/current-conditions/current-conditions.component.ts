import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { Observable } from 'rxjs';


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
    this.zipCodes$ = store.select(s => s.zipCodes.zipCodes);
    this.currentConditions$ = store.select(s => s.currentConditions);
  }

  ngOnInit() {
  }

}
