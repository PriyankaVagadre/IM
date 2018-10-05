import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerLoginComponent } from './influencer-login.component';

describe('InfluencerLoginComponent', () => {
  let component: InfluencerLoginComponent;
  let fixture: ComponentFixture<InfluencerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
