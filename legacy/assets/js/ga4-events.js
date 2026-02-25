/**
 * GA4 Custom Event Tracking
 * 
 * This script adds tracking for important user interactions on H3 With Laura
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Track recipe views
  if (document.querySelector('body.single-post') && document.querySelectorAll('code:contains("recipes")').length > 0) {
    gtag('event', 'recipe_view', {
      'recipe_title': document.title,
      'recipe_url': window.location.pathname
    });
  }
  
  // Track outbound links
  const trackOutboundLink = function(event) {
    const link = event.currentTarget;
    const url = link.getAttribute('href');
    const isExternal = url.indexOf('http') === 0 && url.indexOf('h3withlaura.com') === -1;
    
    if (isExternal) {
      gtag('event', 'outbound_link_click', {
        'link_url': url,
        'link_text': link.innerText.trim() || 'Image Link'
      });
    }
  };
  
  // Track Buy Me A Coffee clicks
  const trackBMCClick = function() {
    gtag('event', 'donation_click', {
      'donation_type': 'buy_me_a_coffee'
    });
  };
  
  // Track category/tag clicks
  const trackCategoryClick = function(event) {
    const link = event.currentTarget;
    const category = link.innerText.trim();
    
    gtag('event', 'category_click', {
      'category_name': category
    });
  };
  
  // Track comment submissions
  const trackCommentSubmit = function() {
    gtag('event', 'comment_submit');
  };
  
  // Apply event listeners
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', trackOutboundLink);
  });
  
  document.querySelectorAll('a[href*="buymeacoffee.com"]').forEach(function(link) {
    link.addEventListener('click', trackBMCClick);
  });
  
  document.querySelectorAll('a[href*="/tag/"]').forEach(function(link) {
    link.addEventListener('click', trackCategoryClick);
  });
  
  const commentForm = document.querySelector('.js-form.form');
  if (commentForm) {
    commentForm.addEventListener('submit', trackCommentSubmit);
  }
  
  // Track scroll depth
  let scrollDepthTriggered = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
  };
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    
    if (scrollPercent >= 25 && !scrollDepthTriggered['25']) {
      gtag('event', 'scroll_depth', { 'percent': 25 });
      scrollDepthTriggered['25'] = true;
    }
    
    if (scrollPercent >= 50 && !scrollDepthTriggered['50']) {
      gtag('event', 'scroll_depth', { 'percent': 50 });
      scrollDepthTriggered['50'] = true;
    }
    
    if (scrollPercent >= 75 && !scrollDepthTriggered['75']) {
      gtag('event', 'scroll_depth', { 'percent': 75 });
      scrollDepthTriggered['75'] = true;
    }
    
    if (scrollPercent >= 90 && !scrollDepthTriggered['100']) {
      gtag('event', 'scroll_depth', { 'percent': 100 });
      scrollDepthTriggered['100'] = true;
    }
  }, { passive: true });
  
}); 