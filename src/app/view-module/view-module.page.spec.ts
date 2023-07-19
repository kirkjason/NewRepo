import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewModulePage } from './view-module.page';

describe('ViewModulePage', () => {
  let component: ViewModulePage;
  let fixture: ComponentFixture<ViewModulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
