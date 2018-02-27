import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyNavBarComponent } from './party-nav-bar.component';

describe('PartyNavBarComponent', () => {
  let component: PartyNavBarComponent;
  let fixture: ComponentFixture<PartyNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
