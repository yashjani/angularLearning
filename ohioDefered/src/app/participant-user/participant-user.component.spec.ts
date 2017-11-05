import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantUserComponent } from './participant-user.component';

describe('ParticipantUserComponent', () => {
  let component: ParticipantUserComponent;
  let fixture: ComponentFixture<ParticipantUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
