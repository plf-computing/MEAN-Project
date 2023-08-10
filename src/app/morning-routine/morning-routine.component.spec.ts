import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningRoutineComponent } from './morning-routine.component';

describe('MorningRoutineComponent', () => {
  let component: MorningRoutineComponent;
  let fixture: ComponentFixture<MorningRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorningRoutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorningRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
