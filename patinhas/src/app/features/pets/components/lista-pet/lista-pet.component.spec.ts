import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPetComponent } from './lista-pet.component';

describe('ListaPetComponent', () => {
  let component: ListaPetComponent;
  let fixture: ComponentFixture<ListaPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
