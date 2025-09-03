import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDetailPage } from './page-detail.page';

describe('PageDetailPage', () => {
  let component: PageDetailPage;
  let fixture: ComponentFixture<PageDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
