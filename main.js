/**
 * Ali Cheema Real Estate Landing Page
 * Main JavaScript file
 */

// Listing data
const listingsData = [
    {
        price: '$1,299,000',
        address: '123 Maple Street, Oakville',
        beds: 4,
        baths: 3,
        sqft: '2,400',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80'
    },
    {
        price: '$1,549,000',
        address: '456 Oak Avenue, Oakville',
        beds: 5,
        baths: 4,
        sqft: '3,200',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80'
    },
    {
        price: '$989,000',
        address: '789 Birch Lane, Oakville',
        beds: 3,
        baths: 2,
        sqft: '1,850',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80'
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ali Cheema Real Estate Landing Page - Initialized');

    // Render featured listings dynamically
    renderListings();

    // Smooth scrolling for anchor links (if added later)
    initSmoothScroll();

    // Add active state to buttons on click
    initButtonFeedback();

    // Track page visibility for analytics (placeholder)
    trackPageVisibility();
});

/**
 * Render featured listings dynamically
 */
function renderListings() {
    const listingsGrid = document.querySelector('.listings-grid');

    if (!listingsGrid) {
        console.error('Listings grid container not found');
        return;
    }

    // Clear existing content
    listingsGrid.innerHTML = '';

    // Create and append listing cards
    listingsData.forEach(listing => {
        const listingCard = createListingCard(listing);
        listingsGrid.appendChild(listingCard);
    });

    console.log(`Rendered ${listingsData.length} listings`);
}

/**
 * Create a listing card element from listing data
 */
function createListingCard(listing) {
    const card = document.createElement('div');
    card.className = 'listing-card';

    card.innerHTML = `
        <div class="listing-image" style="background-image: url('${listing.imageUrl}')"></div>
        <div class="listing-details">
            <div class="listing-price">${listing.price}</div>
            <div class="listing-address">${listing.address}</div>
            <div class="listing-specs">
                <span>${listing.beds} Beds</span>
                <span>${listing.baths} Baths</span>
                <span>${listing.sqft} sqft</span>
            </div>
        </div>
    `;

    return card;
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add visual feedback to button clicks
 */
function initButtonFeedback() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect or track click
            console.log('Button clicked:', this.textContent.trim());

            // Placeholder for future form handling or analytics
            // This will be expanded when forms are added
        });
    });
}

/**
 * Track page visibility for analytics
 * Placeholder for future analytics implementation
 */
function trackPageVisibility() {
    let startTime = Date.now();

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            console.log('Page hidden. Time spent:', timeSpent, 'seconds');
        } else {
            startTime = Date.now();
            console.log('Page visible');
        }
    });
}

/**
 * Utility function to handle phone clicks
 * Can be expanded for analytics tracking
 */
function trackPhoneClick(phoneNumber) {
    console.log('Phone number clicked:', phoneNumber);
    // Future: Send to analytics
    // Future: Track conversion event
}

// Add click tracking to phone links
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackPhoneClick(this.getAttribute('href'));
        });
    });
});

/**
 * Form handling placeholder
 * To be implemented when forms are added
 */
function handleFormSubmit(formData) {
    console.log('Form submitted:', formData);
    // Future implementation:
    // - Validate form data
    // - Send to backend/email service
    // - Show success/error message
    // - Track conversion
}

/**
 * Placeholder for future lead form functionality
 */
class LeadFormHandler {
    constructor(formElement) {
        this.form = formElement;
        // Future: Initialize form validation and submission
    }

    validate() {
        // Future: Implement validation
        return true;
    }

    submit() {
        // Future: Implement submission logic
        console.log('Lead form submission - to be implemented');
    }
}

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleFormSubmit,
        LeadFormHandler,
        trackPhoneClick
    };
}
