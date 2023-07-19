import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewStudentPage } from './view-student.page';

describe('ViewStudentPage', () => {
  let component: ViewStudentPage;
  let fixture: ComponentFixture<ViewStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
