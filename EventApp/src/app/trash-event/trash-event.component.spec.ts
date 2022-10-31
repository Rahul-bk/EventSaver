import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashEventComponent } from './trash-event.component';

describe('TrashEventComponent', () => {
  let component: TrashEventComponent;
  let fixture: ComponentFixture<TrashEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
