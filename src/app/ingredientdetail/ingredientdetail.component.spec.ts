import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientdetailComponent } from './ingredientdetail.component';

describe('IngredientdetailComponent', () => {
  let component: IngredientdetailComponent;
  let fixture: ComponentFixture<IngredientdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
