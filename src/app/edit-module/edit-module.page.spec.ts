import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditModulePage } from './edit-module.page';

describe('EditModulePage', () => {
  let component: EditModulePage;
  let fixture: ComponentFixture<EditModulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
