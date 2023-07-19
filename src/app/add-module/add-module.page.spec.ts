import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddModulePage } from './add-module.page';

describe('AddModulePage', () => {
  let component: AddModulePage;
  let fixture: ComponentFixture<AddModulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
