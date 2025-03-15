const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});




const buttons = document.querySelectorAll(".resume-box .resume-btn");
const sections = document.querySelectorAll(".resume-detail");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const activeButton = document.querySelector(".resume-box .resume-btn.active");
        const activeSection = document.querySelector(".resume-detail.active");

        // Remove 'active' class from the previous active button and section
        if (activeButton && activeButton !== this) {
            activeButton.classList.remove("active");
        }
        if (activeSection) {
            activeSection.classList.remove("active");
        }

        // Add 'active' class to the clicked button
        this.classList.add("active");

        // Find the section to show based on data-target attribute
        const target = this.getAttribute('data-target');
        const sectionToShow = document.querySelector(`.resume-detail.${target}`);
        if (sectionToShow) {
            sectionToShow.classList.add("active");
        }
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const imgItems = document.querySelectorAll('.portfolio-carousel .img-item');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;

// Function to update active portfolio details and slide images
const updatePortfolio = () => {
    imgSlide.style.transform = `translateX(${-index * 100}%)`;

    portfolioDetails.forEach((detail, i) => {
        detail.classList.toggle('active', i === index);
    });
};

// Right arrow click (Next Image)
arrowRight.addEventListener('click', () => {
    index = (index + 1) % imgItems.length; // Loop back to first image
    updatePortfolio();
});

// Left arrow click (Previous Image)
arrowLeft.addEventListener('click', () => {
    index = (index - 1 + imgItems.length) % imgItems.length; // Loop back to last image
    updatePortfolio();
});

// Initialize first active state
updatePortfolio();
