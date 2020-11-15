import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitOrdererComponent } from './init-orderer.component';

describe('InitOrdererComponent', () => {
  let component: InitOrdererComponent;
  let fixture: ComponentFixture<InitOrdererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitOrdererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitOrdererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
