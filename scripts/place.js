/* Constants for weather calculation */
const TEMPERATURE = 10; // °C
const WIND_SPEED = 5;  // km/h

/* Function to calculate wind chill */
function calculateWindChill(temp, speed) {
    /* Check if conditions are met for wind chill calculation */
    if (temp <= 10 && speed > 4.8) {
        /* Wind chill formula for Celsius */
        /* Using the formula: 13.12 + 0.6215 * T - 11.37 * (V^0.16) + 0.3965 * T * (V^0.16) */
        /* Where T is temperature in Celsius and V is wind speed in km/h */
        const windChill = 13.12 + 
                         0.6215 * temp - 
                         11.37 * Math.pow(speed, 0.16) + 
                         0.3965 * temp * Math.pow(speed, 0.16);
        
        return windChill.toFixed(1);
    }
    return "N/A";
}

/* Function to update the footer year */
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

/* Function to update the last modified date */
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    
    /* Format the date as MM/DD/YYYY HH:MM:SS */
    const formattedDate = lastModified.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    lastModifiedElement.textContent = formattedDate;
}

/* Function to update wind chill display */
function updateWindChill() {
    const windChillElement = document.getElementById('windchill');
    const windChillValue = calculateWindChill(TEMPERATURE, WIND_SPEED);
    windChillElement.textContent = windChillValue + (windChillValue !== "N/A" ? "°C" : "");
}

/* Initialize all dynamic content when the page loads */
document.addEventListener('DOMContentLoaded', () => {
    updateYear();
    updateLastModified();
    updateWindChill();
});