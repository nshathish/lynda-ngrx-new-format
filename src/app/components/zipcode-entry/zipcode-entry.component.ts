import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { ZipcodeActions } from '../../actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  addZipcode(zipCode: string) {
    this.store.dispatch(ZipcodeActions.addZipcode({ zipCode }));
  }

  ngOnInit() {
  }

}
