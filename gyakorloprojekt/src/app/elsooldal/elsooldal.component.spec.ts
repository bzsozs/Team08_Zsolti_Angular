import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsooldalComponent } from './elsooldal.component';

describe('ElsooldalComponent', () => {
  let component: ElsooldalComponent;
  let fixture: ComponentFixture<ElsooldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElsooldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsooldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
