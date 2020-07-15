import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentnewComponent } from './agentnew.component';

describe('AgentnewComponent', () => {
  let component: AgentnewComponent;
  let fixture: ComponentFixture<AgentnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
