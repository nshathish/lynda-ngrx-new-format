import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConditionItemComponent } from './current-condition-item.component';

describe('CurrentConditionItemComponent', () => {
  let component: CurrentConditionItemComponent;
  let fixture: ComponentFixture<CurrentConditionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentConditionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentConditionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
