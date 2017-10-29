import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundCloudComponent } from './soundcloud.component';

describe('SoundCloudComponent', () => {
  let component: SoundCloudComponent;
  let fixture: ComponentFixture<SoundCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
