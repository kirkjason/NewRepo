import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Popup2Page } from './popup2.page';

describe('Popup2Page', () => {
  let component: Popup2Page;
  let fixture: ComponentFixture<Popup2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Popup2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
