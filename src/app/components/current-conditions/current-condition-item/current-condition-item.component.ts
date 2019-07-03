import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-current-condition-item',
  templateUrl: './current-condition-item.component.html',
  styleUrls: ['./current-condition-item.component.css']
})
export class CurrentConditionItemComponent implements OnInit {

  @Input() zipCode: string;
  @Input() conditions: Map<string, any>;

  @Output() removeZip = new EventEmitter<string>();

  constructor(
    public weatherService: WeatherService
  ) { }

  getConditions(zip: string) {
    return this.conditions.get(zip);
  }

  ngOnInit() {
    console.log(this.zipCode, this.conditions);
  }

}
