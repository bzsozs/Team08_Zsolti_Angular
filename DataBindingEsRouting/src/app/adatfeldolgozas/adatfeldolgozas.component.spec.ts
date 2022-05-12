import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatfeldolgozasComponent } from './adatfeldolgozas.component';

describe('AdatfeldolgozasComponent', () => {
  let component: AdatfeldolgozasComponent;
  let fixture: ComponentFixture<AdatfeldolgozasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdatfeldolgozasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdatfeldolgozasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
