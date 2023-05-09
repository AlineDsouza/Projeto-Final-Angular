import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeConhecaComponent } from './me-conheca.component';

describe('MeConhecaComponent', () => {
  let component: MeConhecaComponent;
  let fixture: ComponentFixture<MeConhecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeConhecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeConhecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
