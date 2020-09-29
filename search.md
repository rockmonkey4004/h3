---
layout: blog-search
title: Search
subtitle:
---
<!-- Html Elements for Search -->
<!-- <div id="search-box"> -->
<!-- <input type="text" id="search-input" autofocus placeholder="search..."> -->
<!-- <ul class="alt" id="results-container"></ul> -->
<!--- index.html -->
<!-- <div id="hits"> -->
  <!-- Hits widget will appear here -->
<!-- </div> -->
<!-- </div> -->

<!-- Formatting-->
<!-- Script pointing to search-script.js -->
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/algolia.js"></script>

<!--- index.html -->
<!-- <div id="hits"> -->
  <!-- Hits widget will appear here -->
<!-- </div> -->



<!-- Configuration -->
<!-- <script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script> -->


<!--- index.html -->

// Listen changes from input element
search.addWidget({
  init: function(opts) {
    const helper = opts.helper;
    const input = document.querySelector('#searchBox');
    input.addEventListener('input', function(e) {
      helper.setQuery(e.currentTarget.value) // update the parameters
            .search(); // launch the query
    });
  }
});

// Render results in hits element
search.addWidget({
  render: function(opts) {
    const results = opts.results;
    // read the hits from the results and transform them into HTML.
    document.querySelector('#hits').innerHTML = results.hits.map(function(h) {
      let formattedTime = date_unix_str(h.date);
      let external_tag = ('link' in h) ? `<span class="tag is-danger"><i class="fas fa-external-link-alt"></i></span>`: '' ;
      let img_template = '';
      if ('image' in h) {
        img_template = `
      <div class="card-image">
        <figure class="image">
          <a href="${('link' in h) ? h.link : h.url}">
            <center>
              <amp-img src="${h.image.path}" width="368" height="245" alt="${h.title}" layout="intrinsic"></amp-img>
            </center>
          </a>
        </figure>
      </div>`
      }

      return `
    <div class="column is-one-third">
      <div class="card">` + img_template  + `
        <div class="card-content">
          <div class="media apretaito">
            <div class="media-content">
              <a href="${('link' in h) ? h.link : h.url}" ${('link' in h) ? "target=\"_blank\"" : ''} class="title is-4">${h.title}</a>
            </div>
          </div>
          <div class="content apretaito">
            <p>
              ${h.description}
            </p>
            <div class="tags has-addons">
              <span class="tag">
                <i class="fas fa-calendar-alt"></i>&nbsp;${ formattedTime }
              </span>
              <span class="tag is-link">
                ${ h.categories.join(", ")}
              </span>` + external_tag + `
            </div>
          </div>
        </div>
      </div>
    </div>`
    }).join('');
  }
});
