import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewteacherPage } from './viewteacher.page';

describe('ViewteacherPage', () => {
  let component: ViewteacherPage;
  let fixture: ComponentFixture<ViewteacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
