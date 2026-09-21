/* =====================================================
   ANANYA SINGH — PORTFOLIO SCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

document.body.classList.add("loading");

const loader =
    document.getElementById("loader");

const loaderBar =
    document.getElementById("loaderBar");

const loaderPercent =
    document.getElementById("loaderPercent");


let progress = 0;


const loaderInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 4) + 1;


    if (progress >= 100) {

        progress = 100;

        clearInterval(loaderInterval);


        setTimeout(() => {

            loader.classList.add("hidden");

            document.body.classList.remove("loading");

        }, 500);

    }


    loaderBar.style.width =
        `${progress}%`;

    loaderPercent.textContent =
        progress;

}, 35);



/* =====================================================
   REVEAL ON SCROLL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =====================================================
   PROJECT EXPANSION
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("click", () => {


        const wasActive =
            card.classList.contains("active");


        projectCards.forEach((item) => {

            item.classList.remove("active");

        });


        if (!wasActive) {

            card.classList.add("active");

        }

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(

    "scroll",

    () => {

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(8, 9, 11, 0.78)";

            navbar.style.backdropFilter =
                "blur(16px)";

        } else {

            navbar.style.background =
                "transparent";

            navbar.style.backdropFilter =
                "none";

        }

    },

    {
        passive: true
    }

);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                navLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.25
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});



/* =====================================================
   SMOOTH INTERNAL LINKS
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });



/* =====================================================
   IMAGE FALLBACK
===================================================== */

const heroPhoto =
    document.querySelector(".hero-photo");


if (heroPhoto) {

    heroPhoto.addEventListener(
        "error",
        () => {

            heroPhoto.style.display =
                "none";


            const frame =
                document.querySelector(
                    ".hero-photo-frame"
                );


            if (frame) {

                frame.style.background =
                    "linear-gradient(145deg, #17181d, #0b0c0f)";

            }

        }
    );

}