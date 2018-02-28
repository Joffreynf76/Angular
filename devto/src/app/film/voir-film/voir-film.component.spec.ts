import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirFilmComponent } from './voir-film.component';

describe('VoirFilmComponent', () => {
  let component: VoirFilmComponent;
  let fixture: ComponentFixture<VoirFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
