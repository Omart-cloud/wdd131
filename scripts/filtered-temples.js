let d = new Date();
document.getElementById("currentYear"). innerHIML - "Scopy; ${d.
document.querySelector('@lastModified').textContent - 'Last Modirication: >[oocument.lastModified]';

const hambutton - document.querySelector('ihambutton');

const hambutton.addEventListener("click", () => {
    
});
    
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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: "253,015",
        imageUrl: "https://www.churchofjesuschrist.org/img/salt-lake-temple.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "November 27, 1919",
        area: "42,100",
        imageUrl: "https://www.churchofjesuschrist.org/img/laie-temple.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "March 10, 2019",
        area: "40,000",
        imageUrl: "https://www.churchofjesuschrist.org/img/rome-temple.jpg"
    }
  ];

  function createTempleCards() {
    const container = document.getElementById("album");

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
        area.textContent = `Area: ${temple.area}`;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy"); 
        img.classList.add("lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

/* Initialize on page load */
document.addEventListener("DOMContentLoaded", createTempleCards);