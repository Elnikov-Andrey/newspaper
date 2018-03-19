import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPreviewComponent } from './articles-preview.component';

describe('ArticlesPreviewComponent', () => {
  let component: ArticlesPreviewComponent;
  let fixture: ComponentFixture<ArticlesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
