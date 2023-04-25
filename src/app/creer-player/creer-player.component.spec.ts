import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPlayerComponent } from './creer-player.component';

describe('CreerPlayerComponent', () => {
  let component: CreerPlayerComponent;
  let fixture: ComponentFixture<CreerPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
