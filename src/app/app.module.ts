import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';

import { CurrentConditionsEffects } from './effects/current-conditions.effects';

import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';
import { CurrentConditionItemComponent } from './components/current-conditions/current-condition-item/current-condition-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    CurrentConditionItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CurrentConditionsEffects]),

  ],
  providers: [
    WeatherService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
