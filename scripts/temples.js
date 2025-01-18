
document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    const flowerSpans = document.querySelectorAll("#flower");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    
    const hamburgerButton = document.createElement("button");
    hamburgerButton.classList.add("hamburger");
    hamburgerButton.innerHTML = "&#9776;"; 
    header.insertBefore(hamburgerButton, nav);

  
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    
    if (lastModifiedSpan) {
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const formattedTime = lastModified.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        lastModifiedSpan.textContent = `Last Updated: ${formattedDate} at ${formattedTime}`;
    }

    
    if (flowerSpans) {
        flowerSpans.forEach((span) => {
            span.textContent = " 🌹 ";
        });
    }

    
    hamburgerButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("show");
        hamburgerButton.innerHTML = isOpen ? "&#x2715;" : "&#9776;"; 
    });
});
