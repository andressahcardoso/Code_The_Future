import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestaoDoTempoComponent } from './gestao-do-tempo.component';

describe('GestaoDoTempoComponent', () => {
  let component: GestaoDoTempoComponent;
  let fixture: ComponentFixture<GestaoDoTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoDoTempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoDoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
