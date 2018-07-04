import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenRandomQuotesComponent } from './ten-random-quotes.component';

describe('TenRandomQuotesComponent', () => {
  let component: TenRandomQuotesComponent;
  let fixture: ComponentFixture<TenRandomQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenRandomQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenRandomQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
