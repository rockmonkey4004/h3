/**
 * Simple consent management for Google Analytics 4
 * 
 * This script provides basic functionality to update consent settings for GA4.
 * Add your cookie consent UI integration to call these functions.
 */

// Function to update consent status when user accepts
function acceptAnalyticsConsent() {
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
    console.log('Analytics consent granted');
    
    // Optional: Store consent in localStorage or cookie
    localStorage.setItem('h3_analytics_consent', 'granted');
}

// Function to update consent status when user rejects
function rejectAnalyticsConsent() {
    gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
    console.log('Analytics consent denied');
    
    // Optional: Store consent in localStorage or cookie
    localStorage.setItem('h3_analytics_consent', 'denied');
}

// Check for stored consent on page load
document.addEventListener('DOMContentLoaded', function() {
    const storedConsent = localStorage.getItem('h3_analytics_consent');
    if (storedConsent === 'granted') {
        acceptAnalyticsConsent();
    }
});

// Export functions for use in your cookie consent UI
window.H3ConsentManager = {
    acceptAnalytics: acceptAnalyticsConsent,
    rejectAnalytics: rejectAnalyticsConsent
}; 