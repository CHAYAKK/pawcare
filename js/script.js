/* ==========================================
   PAWCARE JAVASCRIPT
========================================== */


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

}


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

    });

});


/* DARK / LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeToggle) {
            themeToggle.textContent = "☾";
        }

    } else {

        document.body.classList.remove("dark");

        if (themeToggle) {
            themeToggle.textContent = "☼";
        }

    }

}

const savedTheme =
    localStorage.getItem("pawcare-theme");

if (savedTheme) {
    setTheme(savedTheme);
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isDark =
            document.body.classList.contains("dark");

        const newTheme =
            isDark ? "light" : "dark";

        setTheme(newTheme);

        localStorage.setItem(
            "pawcare-theme",
            newTheme
        );

    });

}


/* COUNTER ANIMATION */

const counters =
    document.querySelectorAll(".counter");

if (counters.length > 0) {

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const speed = target / 70;

                function update() {

                    current += speed;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(update);

                    } else {

                        counter.textContent =
                            target;

                    }

                }

                update();

                observer.unobserve(counter);

            });

        }, {
            threshold: .5
        });


    counters.forEach(counter => {
        observer.observe(counter);
    });

}


/* BACK TO TOP */

const topBtn =
    document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* GALLERY FILTER */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            galleryItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}


/* CONTACT FORM VALIDATION */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let valid = true;

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const messageError =
            document.getElementById("messageError");

        const success =
            document.getElementById("formSuccess");


        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        success.classList.remove("show");


        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }


        if (valid) {

            success.classList.add("show");

            contactForm.reset();

        }

    });

}


/* SIMPLE SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .service-card, .tip-card, .mission-card, .gallery-item"
    );

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        }, {
            threshold: .15
        });


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(25px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        revealObserver.observe(element);

    });

}