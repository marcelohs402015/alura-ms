import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimComponent } from './fim.component';

describe('FimComponent', () => {
  let component: FimComponent;
  let fixture: ComponentFixture<FimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
