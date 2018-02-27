import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepartyPageComponent } from './createparty-page.component';

describe('CreatepartyPageComponent', () => {
  let component: CreatepartyPageComponent;
  let fixture: ComponentFixture<CreatepartyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepartyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
