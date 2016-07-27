/* globals describe: false, it: false, expect: false, beforeEach: false */

import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let articlesComponent = {};
  
  beforeEach(() => {
    articlesComponent = new ArticlesComponent();
  });
  
  it('holds a reference to the selected article', () => {
    articlesComponent.onSelect({ title: 'Test', text: 'Test text' });
    expect(articlesComponent.selectedArticle).toEqual({ title: 'Test', text: 'Test text' });
  });

  it('creates a new article', () => {
    articlesComponent.onNew();
    expect(articlesComponent.selectedArticle).not.toBe(null);
  });
});
