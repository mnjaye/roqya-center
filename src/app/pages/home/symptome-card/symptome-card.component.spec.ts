import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomeCardComponent } from './symptome-card.component';

describe('SymptomeCardComponent', () => {
  let component: SymptomeCardComponent;
  let fixture: ComponentFixture<SymptomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
