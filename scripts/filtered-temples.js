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
        templeName: "Mendoza Argentina",
        location: "Mendoza, Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl: "https://noticias-ar.laiglesiadejesucristo.org/media/960x540/Templ-Mendoza_2.jpg"
    },
    {
        templeName: "Arequipa Peru Temple",
        location: "Santiago, Chile",
        dedicated: "2019, December, 15",
        area: 72000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/320%2C/0/default"
    },
    {
        templeName: "Nauvoo Illinois Temple",
        location: "Nauvoo, Illinois, USA",
        dedicated: "1846 , May, 1",
        area: 29000,
        imageUrl: "https://www.ffkr.com/wp-content/uploads/2018/10/Nauvoo-Temple-Exterior-Signature-Front-1-1200x1370.jpg"
    }
];

function displayTemples(filteredTemples) {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        gallery.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = temples;
    switch (filter) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
    }
    displayTemples(filteredTemples);
}

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const filter = this.getAttribute("data-filter");
        filterTemples(filter);
    });
});

document.querySelector(".hamburger").addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
});

const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;

displayTemples(temples);
