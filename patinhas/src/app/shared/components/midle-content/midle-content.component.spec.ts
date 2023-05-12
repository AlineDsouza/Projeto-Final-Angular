import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidleContentComponent } from './midle-content.component';

describe('MidleContentComponent', () => {
  let component: MidleContentComponent;
  let fixture: ComponentFixture<MidleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
