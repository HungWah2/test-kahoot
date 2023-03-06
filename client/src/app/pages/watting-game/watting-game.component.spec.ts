import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WattingGameComponent } from './watting-game.component';

describe('WattingGameComponent', () => {
  let component: WattingGameComponent;
  let fixture: ComponentFixture<WattingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WattingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WattingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
