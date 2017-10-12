import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronearComponent } from './dronear.component';

describe('DronearComponent', () => {
  let component: DronearComponent;
  let fixture: ComponentFixture<DronearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
