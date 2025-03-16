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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-box form");
    const webhookURL = "https://discord.com/api/webhooks/1350712867363618919/wxj3nNC0RklsHEsDsBXFEP9n9-D_r15x6j_YEBRVN8Y1ULQRPDJvzgvGESHyH6ZS9Lbr"; // Replace with your Discord Webhook URL
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[placeholder='Phone No']").value.trim();
        const subject = form.querySelector("input[placeholder='Email Subject']").value.trim();
        const message = form.querySelector("textarea").value.trim();
        
        if (!name || !email || !phone || !subject || !message) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("✉️ Please enter a valid email address.");
            return;
        }
        
        if (!validatePhone(phone)) {
            alert("📞 Please enter a valid phone number.");
            return;
        }
        
        const payload = {
            content: `📩 **New Contact Form Submission** 📩\n\n🔹 **Name:** ${name}\n🔹 **Email:** ${email}\n🔹 **Phone:** ${phone}\n🔹 **Subject:** ${subject}\n🔹 **Message:**\n${message}`
        };
        
        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                alert("✅ Your message has been sent successfully! We will get back to you soon. 🎉");
                form.reset(); // Reset form fields after submission
            } else {
                alert("❌ Failed to send message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error sending message:", error);
            alert("⚠️ An error occurred. Please try again.");
        });
    });
    
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    function validatePhone(phone) {
        const phonePattern = /^\+?[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});

