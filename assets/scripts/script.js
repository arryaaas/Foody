// Add shadow to header when webpage is scrolled
document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

// Open and close navigation menu via hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

// Looping to display elements and content (reason-item)
const reasons = [
    {
        img: "easy.png",
        title: "Easy",
        description: "Only with your smartphone you can get a food",
    },
    {
        img: "fast.png",
        title: "Fast",
        description: "We can deliver the food you ordered very quickly",
    },
    {
        img: "safe.png",
        title: "Safe",
        description: "All food label halal and stay healthy for you",
    },
];

const renderReason = () => {
    let reasonItems = "";
    reasons.forEach((item) => {
        reasonItems += `
            <div class="reason-item">
                <img src="assets/images/${item.img}" alt="${item.title}" />
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
    });
    const reasonContainer = document.querySelector(".reason-container");
    reasonContainer.innerHTML = reasonItems;
};

renderReason();
