import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewbooksPage } from './viewbooks.page';

describe('ViewbooksPage', () => {
  let component: ViewbooksPage;
  let fixture: ComponentFixture<ViewbooksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewbooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
