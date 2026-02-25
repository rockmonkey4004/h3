// algolia.js
const search = instantsearch({
  appId: SFBKC3K3JE,
  apiKey: 85b2425c53e4d9a38ce774223eea053f,
  indexName: blog_posts,
  routing: true
});

// initialize SearchBox
// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for products'
  })
);

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      item: '<em>Hit </em>: }'
    }
  })
);

search.start();

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for products'
  })
);

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      item: '<em>Hit </em>: }'
    }
  })
);

search.start();
