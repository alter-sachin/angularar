import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDataComponent } from './geodata.component';

describe('GeoDataComponent', () => {
  let component: GeoDataComponent;
  let fixture: ComponentFixture<GeoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
