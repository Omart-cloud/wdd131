// Update current year and last modified date
let d = new Date();
document.getElementById("currentYear").innerHTML = `© ${d.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Updated: ${new Date(document.lastModified).toLocaleString()}`;

const hamburgerButton = document.createElement("button");
hamburgerButton.classList.add("hamburger");
hamburgerButton.innerHTML = "&#9776;";
document.querySelector("header").insertBefore(hamburgerButton, document.querySelector("nav"));

hamburgerButton.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
    hamburgerButton.innerHTML = nav.classList.contains("show") ? "&#x2715;" : "&#9776;"; 
});

function validateImageUrl(url) {
    if (!url.startsWith("http")) {
        return `https://${url}`;     }
        return url;
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "January 11, 2004",
        area: 17100,
        imageUrl: "https://www.churchofjesuschrist.org/media/image/accra-ghana-temple-lds-ea81753?lang=eng&collectionId=ee369e4f19cb48eaab04cc184b19c4d2"
    },
    {
        templeName: "Brigham City Utah Temple",
        location: "Brigham City, Utah, USA",
        dedicated: "September 23, 2012",
        area: 36000,
        imageUrl: "https://www.churchofjesuschrist.org/media/image/brigham-city-utah-mormon-temple-c17299a?lang=eng&collectionId=ba6545ccd566487c907188284e6c5e6c"
    },
    {
        templeName: "Cebu Philippines Temple",
        location: "Cebu City, Philippines",
        dedicated: "June 13, 2010",
        area: 29966,
        imageUrl: "https://www.churchofjesuschrist.org/media/image/cebu-philippines-temple-lds-27ddb5b?lang=eng&collectionId=c1bd264d892e41f6ae53060174c05f7a"
    }
];

// Create temple cards dynamically
function createTempleCards(temples) {
    const container = document.getElementById("album");
    container.innerHTML = ''; // Clear previous cards

    temples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h2");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        let dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        let area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy"); // Lazy load images
        img.classList.add("lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Filter temples based on selected category
function filterTemples(filter) {
    const filteredTemples = temples.filter(temple => {
        switch (filter) {
            case 'old':
                return new Date(temple.dedicated).getFullYear() < 1900;
            case 'new':
                return new Date(temple.dedicated).getFullYear() > 2000;
            case 'large':
                return temple.area > 90000;
            case 'small':
                return temple.area < 10000;
            case 'home':
            default:
                return true;
        }
    });
    createTempleCards(filteredTemples);
}

// Event listeners for filtering
document.querySelectorAll("nav ul li a").forEach(button => {
    button.addEventListener("click", (event) => {
        const filter = event.target.textContent.toLowerCase();
        filterTemples(filter);
    });
});

// Initialize with all temples
document.addEventListener("DOMContentLoaded", () => {
    createTempleCards(temples);
});
