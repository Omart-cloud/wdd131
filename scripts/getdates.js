// getdates.js
// Get the current year and update the copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and update the footer
var lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
lastModifiedElement.style.color = "#ffd700";
lastModifiedElement.style.fontSize = "1.2em";




// document.addEventListener('DOMContentLoaded', () => {
//     const yearSpan = document.getElementById('currentyear');
//     yearSpan.textContent = new Date().getFullYear();

//     const lastModifiedSpan = document.getElementById('lastModified');
//     lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
// });
