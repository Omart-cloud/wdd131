// Service prices object
const servicePrices = {
    residential: 50,
    commercial: 100,
    deep: 150
};

// Form data object for storing contact information
const formData = {
    name: '',
    email: '',
    message: ''
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load saved form data if it exists
    loadSavedFormData();
    
    // Initialize contact form handlers
    initializeContactForm();
    
    // Initialize price calculator
    initializePriceCalculator();
});

// Contact form initialization and handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    // Add input event listeners to save form data
    formInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            formData[e.target.name] = e.target.value;
            saveFormData();
        });
    });

    contactForm.addEventListener('submit', handleFormSubmit);
}

// Save form data to localStorage
function saveFormData() {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}

// Load saved form data from localStorage
function loadSavedFormData() {
    const savedData = localStorage.getItem('contactFormData');
    if (!savedData) return;

    const parsedData = JSON.parse(savedData);
    Object.assign(formData, parsedData);

    // Populate form fields if they exist
    Object.keys(parsedData).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
            input.value = parsedData[key];
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Validate form
    const isValid = validateForm();
    
    if (isValid) {
        // Create confirmation message using template literal
        const confirmationMessage = `Thank you ${formData.name}! We'll contact you at ${formData.email} shortly.`;
        alert(confirmationMessage);
        
        // Clear form and localStorage
        e.target.reset();
        localStorage.removeItem('contactFormData');
        Object.keys(formData).forEach(key => formData[key] = '');
    }
}

// Form validation
function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (formData.name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (formData.message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }
    
    return true;
}

// Price calculator initialization and handling
function initializePriceCalculator() {
    const calculateButton = document.getElementById('calculate-price');
    if (!calculateButton) return;

    calculateButton.addEventListener('click', calculatePrice);
}

// Calculate estimated price based on selected services
function calculatePrice() {
    const selectedServices = Array.from(document.querySelectorAll('.services-list input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    if (selectedServices.length === 0) {
        alert('Please select at least one service');
        return;
    }

    const total = selectedServices.reduce((sum, service) => sum + servicePrices[service], 0);
    
    const estimatedPrice = document.getElementById('estimated-price');
    estimatedPrice.textContent = `Estimated Price: $${total}`;
}