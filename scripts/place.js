/* Constants for weather calculation */
const TEMPERATURE = 10; // °C
const WIND_SPEED = 5;  // km/h

/* Function to calculate wind chill */
function calculateWindChill(temp, speed) {
    /* Check if conditions are met for wind chill calculation */
    if (temp <= 10 && speed > 4.8) {
        /* Wind chill formula for Celsius */
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
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* Function to update the last modified date */
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
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
}

/* Function to update wind chill display */
function updateWindChill() {
    const windChillElement = document.getElementById('windchill');
    if (windChillElement) {
        const windChillValue = calculateWindChill(TEMPERATURE, WIND_SPEED);
        windChillElement.textContent = windChillValue + (windChillValue !== "N/A" ? "°C" : "");
    }
}

/* Function to update weather icon in mobile view */
function updateWeatherIcon() {
    const weatherIcon = document.querySelector(".weather-icon");
    if (weatherIcon && window.innerWidth <= 768) {
        weatherIcon.innerHTML = `
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='50' height='50'>
                <circle cx='32' cy='32' r='10' fill='yellow' stroke='orange' stroke-width='2' />
                <ellipse cx='42' cy='45' rx='15' ry='10' fill='lightgray' stroke='gray' stroke-width='2' />
                <ellipse cx='28' cy='48' rx='10' ry='8' fill='lightgray' stroke='gray' stroke-width='2' />
            </svg>`;
    }
}

/* Initialize all dynamic content when the page loads */
document.addEventListener('DOMContentLoaded', () => {
    updateYear();
    updateLastModified();
    updateWindChill();
    updateWeatherIcon();
});
