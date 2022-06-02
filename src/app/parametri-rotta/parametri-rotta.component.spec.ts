import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametriRottaComponent } from './parametri-rotta.component';

describe('ParametriRottaComponent', () => {
  let component: ParametriRottaComponent;
  let fixture: ComponentFixture<ParametriRottaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametriRottaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametriRottaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
