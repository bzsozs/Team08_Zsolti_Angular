import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasodikoldalComponent } from './masodikoldal.component';

describe('MasodikoldalComponent', () => {
  let component: MasodikoldalComponent;
  let fixture: ComponentFixture<MasodikoldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasodikoldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasodikoldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
