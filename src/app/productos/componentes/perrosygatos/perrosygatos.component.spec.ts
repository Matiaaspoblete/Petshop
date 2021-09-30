import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosygatosComponent } from './perrosygatos.component';

describe('PerrosygatosComponent', () => {
  let component: PerrosygatosComponent;
  let fixture: ComponentFixture<PerrosygatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerrosygatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosygatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
