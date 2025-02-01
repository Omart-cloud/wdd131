document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    const templeContainer = document.querySelector(".res-grid");

    
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Update last modified date
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Updated: ${new Date(document.lastModified).toLocaleString()}`;
    }

    const temples = [
        { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
        { templeName: "Manti Utah", location: "Manti, Utah, USA", dedicated: "1888-05-21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
        { templeName: "Payson Utah", location: "Payson, Utah, USA", dedicated: "2015-06-07", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
        { templeName: "San Diego California", location: "San Diego, CA, USA", dedicated: "1993-04-25", area: 72000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego/400x250/san-diego-temple-exterior-1.jpg" },
        { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 52000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo/400x250/tokyo-temple.jpg" },
        { templeName: "Nauvoo Illinois", location: "Nauvoo, IL, USA", dedicated: "2002-06-27", area: 54000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo/400x250/nauvoo-temple.jpg" }
    ];

    function displayTemples(filter) {
        templeContainer.innerHTML = "";
        let filteredTemples = temples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
        }

        filteredTemples.forEach(temple => {
            let card = document.createElement("div");
            card.classList.add("temple-card");
            card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            templeContainer.appendChild(card);
        });
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            displayTemples(this.dataset.filter);
        });
    });

    displayTemples("all"); // Load all temples initially
});
