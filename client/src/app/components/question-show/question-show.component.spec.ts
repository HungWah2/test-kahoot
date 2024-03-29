import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionShowComponent } from './question-show.component';

describe('QuestionShowComponent', () => {
  let component: QuestionShowComponent;
  let fixture: ComponentFixture<QuestionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
