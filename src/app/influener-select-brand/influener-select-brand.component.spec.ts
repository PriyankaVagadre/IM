import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenerSelectBrandComponent } from './influener-select-brand.component';

describe('InfluenerSelectBrandComponent', () => {
  let component: InfluenerSelectBrandComponent;
  let fixture: ComponentFixture<InfluenerSelectBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluenerSelectBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenerSelectBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
