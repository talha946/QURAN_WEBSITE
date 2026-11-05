/* =====================================================
   MOBILE NAVBAR — SINGLE MENU CONTROLLER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        const isOpen =
            navbar.classList.contains("mobile-open");

        if (isOpen) {

            navbar.classList.remove("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        } else {

            navbar.classList.add("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            menuToggle.textContent = "✕";
        }

    });


    const dropdownLinks =
        navbar.querySelectorAll(".dropdown-link");

    dropdownLinks.forEach(function (link) {
// WHY QURAN ACADEMY - SCROLL REVEAL
        link.addEventListener("click", function (e) {

            if (window.innerWidth <= 900) {

                e.preventDefault();
                e.stopPropagation();

                link.parentElement.classList.toggle(
                    "mobile-dropdown-open"
                );

            }

        });

    });


    document.addEventListener("click", function (e) {

        if (window.innerWidth > 900) return;

        if (
            !navbar.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            navbar.classList.remove("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    });


    navbar.querySelectorAll(
        "a:not(.dropdown-link)"
    ).forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 900) {

                navbar.classList.remove(
                    "mobile-open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            navbar.classList.remove(
                "mobile-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    });

});

// =====================================================
// REVIEWS - SCROLL ANIMATION
// =====================================================

const reviewsSection =
    document.querySelector(".reviews-section");

if (reviewsSection) {

    const reviewsHeading =
        reviewsSection.querySelector(".reviews-heading");

    const reviewCards =
        reviewsSection.querySelectorAll(".review-card");


    gsap.fromTo(
        reviewsHeading,
        {
            opacity: 0,
            y: 45
        },
        {
            opacity: 1,
            y: 0,

            duration: 0.8,

            ease: "power2.out",

            scrollTrigger: {
                trigger: reviewsSection,

                start: "top 85%",

                toggleActions:
                    "play none none reverse"
            }
        }
    );


    gsap.fromTo(
        reviewCards,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,

            duration: 0.7,

            stagger: 0.15,

            ease: "power2.out",

            scrollTrigger: {
                trigger: reviewsSection,

                start: "top 78%",

                toggleActions:
                    "play none none reverse"
            }
        }
    );

}
// =====================================================
// STUDENT REVIEWS SLIDER
// =====================================================

const reviewTrack =
    document.querySelector(".review-track");

const reviewSlides =
    document.querySelectorAll(".slider-review");

const reviewPrev =
    document.querySelector(".review-prev");

const reviewNext =
    document.querySelector(".review-next");

const reviewDots =
    document.querySelectorAll(".review-dot");


let currentReview = 0;


function updateReviewSlider() {

    if (!reviewTrack || !reviewSlides.length) {
        return;
    }


    reviewTrack.style.transform =
        `translateX(-${currentReview * 100}%)`;


    reviewSlides.forEach((slide, index) => {

        if (index === currentReview) {

            slide.style.opacity = "1";
            slide.style.transform = "scale(1)";

        } else {

            slide.style.opacity = "0.35";
            slide.style.transform = "scale(0.88)";

        }

    });


    reviewDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentReview
        );

    });

}


// =====================================================
// NEXT
// =====================================================

if (reviewNext) {

    reviewNext.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= reviewSlides.length) {
            currentReview = 0;
        }

        updateReviewSlider();

    });

}


// =====================================================
// PREVIOUS
// =====================================================

if (reviewPrev) {

    reviewPrev.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {
            currentReview = reviewSlides.length - 1;
        }

        updateReviewSlider();

    });

}


// =====================================================
// DOT NAVIGATION
// =====================================================

reviewDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentReview = index;

        updateReviewSlider();

    });

});


// =====================================================
// INITIAL STATE
// =====================================================

updateReviewSlider();

// =====================================================
// FINAL CTA - SCROLL ANIMATION
// =====================================================

const finalCta =
    document.querySelector(".final-cta-container");

if (finalCta) {

    gsap.fromTo(
        finalCta,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",

            scrollTrigger: {
                trigger: ".final-cta-section",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

}
/* =====================================================
   PREMIUM SCROLL REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(

        ".kids-journey-heading, " +
        ".adults-journey-heading, " +
        ".beginners-journey-heading, " +
        ".new-muslim-heading, " +
        ".families-heading, " +

        ".kids-journey-step, " +
        ".adults-journey-step, " +
        ".beginners-journey-step, " +
        ".new-muslim-step, " +
        ".families-step, " +

        ".kids-journey-bottom, " +
        ".adults-journey-bottom, " +
        ".beginners-journey-bottom, " +
        ".new-muslim-bottom, " +
        ".families-bottom"

    );


    /* =================================================
       OBSERVER
    ================================================= */

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate-in");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    /* =================================================
       START OBSERVING
    ================================================= */

    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

});
/* =====================================================
   LEARNING PATHS — SCROLL REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const learningElements = document.querySelectorAll(
        ".learning-paths-header, .learning-card"
    );


    const learningObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate-in");

                    learningObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    learningElements.forEach(function (element) {

        learningObserver.observe(element);

    });

});
// =====================================================
// INDEX PAGE — PREMIUM GSAP ANIMATIONS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // GSAP check
    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    // =================================================
    // REDUCED MOTION
    // =================================================

    const reduceMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {

        gsap.set(
            [
                ".hero-content > *",
                ".hero-visual",
                ".courses-inner > *",
                ".course-card",
                ".why-heading > *",
                ".why-card",
                ".how-heading > *",
                ".how-card",
                ".reviews-heading > *",
                ".review-slider",
                ".review-dots",
                ".home-faq-heading > *",
                ".home-faq-item",
                ".pricing-heading > *",
                ".pricing-card",
                ".final-cta-container > *",
                ".footer-brand",
                ".footer-column",
                ".footer-bottom"
            ],
            {
                opacity: 1,
                clearProps: "transform"
            }
        );

        return;
    }
    // =====================================================
// HERO — HEADING + QURAN IMAGE TOGETHER
// =====================================================

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


// Initial states

gsap.set([
    ".hero-eyebrow",
    ".hero-content h1",
    ".hero-content > p",
    ".hero-buttons",
    ".hero-trust"
], {
    opacity: 0,
    y: 35
});

gsap.set(".hero-visual", {
    opacity: 0,
    x: 60,
    scale: 1.08
});

gsap.set(".quran-scene", {
    opacity: 0,
    scale: 1.08
});


// =====================================================
// HEADING + IMAGE START TOGETHER
// =====================================================

heroTimeline
    .to(".hero-eyebrow", {
        opacity: 1,
        y: 0,
        duration: 0.55
    }, 0)

    .to(".hero-content h1", {
        opacity: 1,
        y: 0,
        duration: 0.9
    }, 0.05)

    .to(".hero-visual", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.15
    }, 0)

    .to(".quran-scene", {
        opacity: 1,
        scale: 1,
        duration: 1
    }, 0.15)

    .to(".hero-divider", {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, 0.35)

    .to(".hero-content > p", {
        opacity: 1,
        y: 0,
        duration: 0.6
    }, 0.4)

    .to(".hero-buttons", {
        opacity: 1,
        y: 0,
        duration: 0.6
    }, 0.5)

    .to(".hero-trust", {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, 0.6);


// =====================================================
// FEATURE ITEMS
// =====================================================

gsap.from(".hero-feature", {
    opacity: 0,
    y: 18,
    duration: 0.55,
    stagger: 0.1,
    ease: "power2.out",
    delay: 1
});

    // =================================================
    // GENERIC SECTION HELPER
    // =================================================
    function revealSection(section, heading, cards) {

    if (!section) return;

    // Heading animation
    if (heading) {

        gsap.fromTo(
            heading,
            {
                opacity: 0,
                y: 35
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 82%",
                    toggleActions: "play none none none",
                    once: true
                }
            }
        );

    }

    // Card animation
    if (cards && cards.length) {

        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 35
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.12,
                ease: "power3.out",

                clearProps: "transform",

                scrollTrigger: {
                    trigger: section,
                    start: "top 76%",
                    toggleActions: "play none none none",
                    once: true
                }
            }
        );

    }

}

    // =================================================
    // COURSES
    // =================================================

    const coursesSection =
        document.querySelector(".courses-preview");

    if (coursesSection) {

        revealSection(
            coursesSection,
            coursesSection.querySelector(".courses-inner"),
            coursesSection.querySelectorAll(".course-card")
        );

    }


    // =================================================
    // WHY US
    // =================================================

    const whySection =
        document.querySelector(".why-section");

    if (whySection) {

        revealSection(
            whySection,
            whySection.querySelector(".why-heading"),
            whySection.querySelectorAll(".why-card")
        );

    }


    // =================================================
    // HOW IT WORKS
    // =================================================

    const howSection =
        document.querySelector(".how-section");

    if (howSection) {

        revealSection(
            howSection,
            howSection.querySelector(".how-heading"),
            howSection.querySelectorAll(".how-card")
        );

    }


    // =================================================
    // REVIEWS
    // =================================================

    const reviewsSection =
        document.querySelector(".reviews-section");

    if (reviewsSection) {

        const reviewsHeading =
            reviewsSection.querySelector(".reviews-heading");

        const reviewSlider =
            reviewsSection.querySelector(".review-slider");

        const reviewDots =
            reviewsSection.querySelector(".review-dots");


        if (reviewsHeading) {

            gsap.fromTo(
                reviewsHeading,
                {
                    opacity: 0,
                    y: 40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: reviewsSection,
                        start: "top 82%",
                        toggleActions:
                            "play none none reverse"
                    }
                }
            );

        }


        if (reviewSlider) {

            gsap.fromTo(
                reviewSlider,
                {
                    opacity: 0,
                    y: 45
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.15,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: reviewsSection,
                        start: "top 72%",
                        toggleActions:
                            "play none none reverse"
                    }
                }
            );

        }


        if (reviewDots) {

            gsap.fromTo(
                reviewDots,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.35,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: reviewsSection,
                        start: "top 68%",
                        toggleActions:
                            "play none none reverse"
                    }
                }
            );

        }

    }
    // =================================================
// HOME FAQ
// =================================================

const homeFaqSection =
    document.querySelector(".home-faq-section");

if (homeFaqSection) {

    const homeFaqHeading =
        homeFaqSection.querySelector(".home-faq-heading");

    const homeFaqItems =
        homeFaqSection.querySelectorAll(".home-faq-item");


    // =========================
    // FAQ ANIMATION
    // =========================

    if (homeFaqHeading) {

        gsap.fromTo(
            homeFaqHeading,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: homeFaqSection,
                    start: "top 82%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }


    if (homeFaqItems.length) {

        gsap.fromTo(
            homeFaqItems,
            {
                opacity: 0,
                y: 28
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.09,
                ease: "power2.out",
                clearProps: "transform",

                scrollTrigger: {
                    trigger: homeFaqSection,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }


    // =========================
    // FAQ ACCORDION
    // =========================

    homeFaqSection.addEventListener("click", function (e) {

        const question =
            e.target.closest(".home-faq-question");

        if (!question) return;

        const item =
            question.closest(".home-faq-item");

        if (!item) return;

        const isOpen =
            item.classList.contains("active");


        // Close all FAQs
        homeFaqItems.forEach(function (faqItem) {

            faqItem.classList.remove("active");

            const button =
                faqItem.querySelector(".home-faq-question");

            const icon =
                faqItem.querySelector(".home-faq-icon");

            if (button) {
                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            if (icon) {
                icon.textContent = "+";
            }

        });


        // Open clicked FAQ
        if (!isOpen) {

            item.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

            const icon =
                item.querySelector(".home-faq-icon");

            if (icon) {
                icon.textContent = "+";
            }

        }

    });

}
// =================================================
// PRICING
// =================================================

const pricingSection =
    document.querySelector(".pricing-section");

if (pricingSection) {

    const pricingHeading =
        pricingSection.querySelector(".pricing-heading");

    const pricingCards =
        pricingSection.querySelectorAll(".pricing-card");


    // =========================
    // HEADING ANIMATION
    // =========================

    if (pricingHeading) {

        gsap.fromTo(
            pricingHeading,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: pricingSection,
                    start: "top 82%",
                    toggleActions: "play none none none",
                    once: true
                }
            }
        );

    }


    // =========================
    // CARDS ANIMATION
    // =========================

    if (pricingCards.length) {

        gsap.fromTo(
            pricingCards,
            {
                opacity: 0,
                y: 35
            },
            {
                opacity: 1,
                y: 0,

                duration: 0.7,
                stagger: 0.14,

                ease: "power3.out",

                clearProps: "transform",

                scrollTrigger: {
                    trigger: pricingSection,
                    start: "top 70%",

                    toggleActions:
                        "play none none none",

                    once: true
                }
            }
        );

    }

}

    // =================================================
    // FINAL CTA
    // =================================================

    const finalCtaSection =
        document.querySelector(".final-cta-section");

    const finalCtaContainer =
        document.querySelector(".final-cta-container");


    if (finalCtaSection && finalCtaContainer) {

        gsap.fromTo(
            finalCtaContainer.children,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: finalCtaSection,
                    start: "top 78%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


    // =================================================
    // FOOTER
    // =================================================

    const footer =
        document.querySelector(".site-footer");

    if (footer) {

        const footerItems =
            footer.querySelectorAll(
                ".footer-brand, .footer-column"
            );

        if (footerItems.length) {

            gsap.fromTo(
                footerItems,
                {
                    opacity: 0,
                    y: 25
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: footer,
                        start: "top 90%",
                        toggleActions:
                            "play none none reverse"
                    }
                }
            );

        }


        const footerBottom =
            footer.querySelector(".footer-bottom");

        if (footerBottom) {

            gsap.fromTo(
                footerBottom,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: footer,
                        start: "top 70%",
                        toggleActions:
                            "play none none reverse"
                    }
                }
            );

        }

    }


    // =================================================
    // REFRESH SCROLLTRIGGER
    // =================================================

    if (typeof ScrollTrigger !== "undefined") {

        setTimeout(function () {
            ScrollTrigger.refresh();
        }, 300);

    }

});

/* =====================================================
   QURAN PAGE — PREMIUM ANIMATION
   SLIGHTLY FASTER VERSION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =================================================
       REDUCED MOTION
    ================================================= */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        return;
    }
    /* ================================================
   HERO — 2 STEP ANIMATION
   Background stays completely static
================================================= */

const heroContent =
    document.querySelector(
        ".quran-hero-content"
    );

if (heroContent) {

    const stepOne =
        heroContent.querySelectorAll(
            ".quran-hero-label, " +
            ".quran-hero-arabic"
        );

    const stepTwo =
        heroContent.querySelectorAll(
            ".quran-hero-eyebrow, " +
            "h1, " +
            ".quran-hero-divider, " +
            "p, " +
            ".quran-hero-buttons"
        );


    /* ---------------------------------------------
       STEP 1
       Label + Arabic
    --------------------------------------------- */

    gsap.set(stepOne, {
        opacity: 0,
        y: 22
    });


    /* ---------------------------------------------
       STEP 2
       Main hero content
    --------------------------------------------- */

    gsap.set(stepTwo, {
        opacity: 0,
        y: 25
    });


    /* ---------------------------------------------
       TIMELINE
    --------------------------------------------- */

    const heroTimeline =
        gsap.timeline();


    // STEP 1
    heroTimeline.to(
        stepOne,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            stagger: .08,
            ease: "power3.out"
        },
        .15
    );


    // STEP 2
    heroTimeline.to(
        stepTwo,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            stagger: .08,
            ease: "power3.out"
        },
        "-=.35"
    );

}


    /* =================================================
       HELPER
    ================================================= */

    function reveal(
        element,
        options = {}
    ) {

        if (!element) return;


        gsap.fromTo(
            element,
            {
                opacity: 0,
                y:
                    options.y !== undefined
                        ? options.y
                        : 30
            },
            {
                opacity: 1,
                y: 0,

                duration:
                    options.duration || .80,

                delay:
                    options.delay || 0,

                ease: "power3.out",

                overwrite: "auto",

                scrollTrigger: {
                    trigger: element,

                    start:
                        options.start ||
                        "top 84%",

                    once: true,

                    toggleActions:
                        "play none none none"
                }
            }
        );

    }


    /* =================================================
       COURSES
    ================================================= */

    const coursesSection =
        document.querySelector(
            ".quran-courses-section"
        );


    if (coursesSection) {

        const heading =
            coursesSection.querySelector(
                ".quran-courses-heading"
            );


        if (heading) {

            reveal(
                heading,
                {
                    y: 28,
                    duration: .80
                }
            );

        }


        const cards =
            coursesSection.querySelectorAll(
                ".quran-course-card"
            );


        if (cards.length) {

            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 32
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: .75,

                    stagger: .13,

                    ease: "power3.out",

                    overwrite: "auto",

                    scrollTrigger: {
                        trigger: cards[0],

                        start: "top 88%",

                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            cards,
                            {
                                clearProps:
                                    "opacity,y"
                            }
                        );

                    }
                }
            );

        }

    }


    /* =================================================
       WHY LEARN
    ================================================= */

    const whySection =
        document.querySelector(
            ".quran-why-section"
        );


    if (whySection) {

        const intro =
            whySection.querySelector(
                ".quran-why-intro"
            );


        if (intro) {

            reveal(
                intro,
                {
                    y: 28,
                    duration: .80
                }
            );

        }


        const cards =
            whySection.querySelectorAll(
                ".quran-why-card"
            );


        if (cards.length) {

            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 32
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: .75,

                    stagger: .13,

                    ease: "power3.out",

                    overwrite: "auto",

                    scrollTrigger: {
                        trigger: cards[0],

                        start: "top 88%",

                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            cards,
                            {
                                clearProps:
                                    "opacity,y"
                            }
                        );

                    }
                }
            );

        }

    }


    /* =================================================
       DETAIL SECTIONS
    ================================================= */

    document
        .querySelectorAll(
            ".quran-detail-section"
        )
        .forEach(function (section) {

            const content =
                section.querySelector(
                    ".quran-detail-content"
                );


            const card =
                section.querySelector(
                    ".quran-detail-card"
                );


            const points =
                section.querySelectorAll(
                    ".quran-detail-point"
                );


            /* LEFT CONTENT */

            if (content) {

                gsap.fromTo(
                    content,
                    {
                        opacity: 0,
                        x: -32
                    },
                    {
                        opacity: 1,
                        x: 0,

                        duration: .80,

                        ease:
                            "power3.out",

                        scrollTrigger: {
                            trigger: section,

                            start: "top 78%",

                            once: true
                        },

                        onComplete: function () {

                            gsap.set(
                                content,
                                {
                                    clearProps:
                                        "opacity,x"
                                }
                            );

                        }
                    }
                );

            }


            /* RIGHT CARD */

            if (card) {

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: 32,
                        y: 10
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,

                        duration: .85,

                        delay: .06,

                        ease:
                            "power3.out",

                        scrollTrigger: {
                            trigger: section,

                            start: "top 78%",

                            once: true
                        },

                        onComplete: function () {

                            gsap.set(
                                card,
                                {
                                    clearProps:
                                        "opacity,x,y"
                                }
                            );

                        }
                    }
                );

            }


            /* POINTS */

            if (points.length) {

                gsap.fromTo(
                    points,
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,

                        duration: .60,

                        stagger: .09,

                        delay: .20,

                        ease:
                            "power2.out",

                        scrollTrigger: {
                            trigger: section,

                            start: "top 74%",

                            once: true
                        },

                        onComplete: function () {

                            gsap.set(
                                points,
                                {
                                    clearProps:
                                        "opacity,y"
                                }
                            );

                        }
                    }
                );

            }

        });


    /* =================================================
       CTA
    ================================================= */

    const cta =
        document.querySelector(
            ".final-cta-section"
        );


    if (cta) {

        const ctaItems =
            cta.querySelectorAll(
                ".final-cta-container > *"
            );


        if (ctaItems.length) {

            gsap.fromTo(
                ctaItems,
                {
                    opacity: 0,
                    y: 26
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: .72,

                    stagger: .10,

                    ease:
                        "power3.out",

                    scrollTrigger: {
                        trigger: cta,

                        start: "top 82%",

                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            ctaItems,
                            {
                                clearProps:
                                    "opacity,y"
                            }
                        );

                    }
                }
            );

        }

    }


    /* =================================================
       FOOTER
    ================================================= */

    const footer =
        document.querySelector(
            ".site-footer"
        );


    if (footer) {

        const footerItems =
            footer.querySelectorAll(
                ".footer-brand, " +
                ".footer-column, " +
                ".footer-bottom"
            );


        if (footerItems.length) {

            gsap.fromTo(
                footerItems,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: .62,

                    stagger: .08,

                    ease:
                        "power2.out",

                    scrollTrigger: {
                        trigger: footer,

                        start: "top 88%",

                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            footerItems,
                            {
                                clearProps:
                                    "opacity,y"
                            }
                        );

                    }
                }
            );

        }

    }


    /* =================================================
       REFRESH
    ================================================= */

    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        setTimeout(
            function () {

                ScrollTrigger.refresh();

            },
            300
        );

    }

});
/* =====================================================
   ARABIC PAGE — SMOOTH PREMIUM REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =================================================
       SMOOTH REVEAL
       Transform is applied temporarily only
    ================================================= */

    function smoothReveal(
        element,
        direction = "up",
        delay = 0,
        duration = 950
    ) {

        if (!element) return;


        if (reduceMotion) {
            element.style.opacity = "1";
            return;
        }


        let startY = 32;
        let startX = 0;


        if (direction === "left") {
            startX = -28;
            startY = 0;
        }


        if (direction === "right") {
            startX = 28;
            startY = 0;
        }


        /* Initial state */

        element.style.opacity = "0";


        const animation =
            element.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            `translate3d(${startX}px, ${startY}px, 0)`
                    },
                    {
                        opacity: 1,
                        transform:
                            "translate3d(0, 0, 0)"
                    }
                ],
                {
                    duration: duration,
                    delay: delay,
                    easing:
                        "cubic-bezier(0.16, 1, 0.3, 1)",
                    fill: "both"
                }
            );


        animation.finished.then(function () {

            /*
             * IMPORTANT:
             * Remove animation completely.
             * CSS gets transform control again.
             */

            animation.cancel();

            element.style.opacity = "1";
            element.style.transform = "";

        });

    }


    /* =================================================
       OBSERVER
    ================================================= */

    function observe(
        element,
        direction = "up",
        delay = 0,
        duration = 950
    ) {

        if (!element) return;


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (!entry.isIntersecting)
                            return;


                        smoothReveal(
                            element,
                            direction,
                            delay,
                            duration
                        );


                        observer.unobserve(element);

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -55px 0px"
                }
            );


        observer.observe(element);

    }


    /* =================================================
       HERO
       ONLY CONTENT
    ================================================= */

    const hero =
        document.querySelector(
            ".arabic-hero"
        );


    if (hero) {

        const content =
            hero.querySelector(
                ".arabic-hero-content"
            );


        const art =
            hero.querySelector(
                ".arabic-hero-art-content"
            );


        if (content) {

            /* STEP 1 */

            const stepOne =
                content.querySelectorAll(
                    ".arabic-hero-label, h1"
                );


            stepOne.forEach(function (item) {

                observe(
                    item,
                    "up",
                    0,
                    900
                );

            });


            /* STEP 2 */

            const stepTwo =
                content.querySelectorAll(
                    ":scope > p, " +
                    ":scope > .arabic-hero-buttons, " +
                    ":scope > .arabic-hero-features"
                );


            stepTwo.forEach(function (item) {

                observe(
                    item,
                    "up",
                    180,
                    900
                );

            });

        }


        /* Arabic artwork */

        if (art) {

            observe(
                art,
                "right",
                250,
                1000
            );

        }

    }


    /* =================================================
       COURSES HEADING
    ================================================= */

    const courseHeading =
        document.querySelector(
            ".arabic-courses .arabic-section-heading"
        );


    observe(
        courseHeading,
        "up",
        0,
        900
    );


    /* =================================================
       COURSE CARDS
       ONE BY ONE
    ================================================= */

    document
        .querySelectorAll(
            ".arabic-course-card"
        )
        .forEach(function (card, index) {

            observe(
                card,
                "up",
                index * 130,
                950
            );

        });


    /* =================================================
       FOUNDATION
    ================================================= */

    const foundation =
        document.querySelector(
            ".arabic-foundation"
        );


    if (foundation) {

        observe(
            foundation.querySelector(
                ".arabic-section-heading"
            ),
            "up",
            0,
            900
        );


        foundation
            .querySelectorAll(
                ".arabic-foundation-card"
            )
            .forEach(function (card, index) {

                observe(
                    card,
                    "up",
                    index * 130,
                    950
                );

            });

    }


    /* =================================================
       AUDIENCE
    ================================================= */

    const audience =
        document.querySelector(
            ".arabic-audience"
        );


    if (audience) {

        observe(
            audience.querySelector(
                ".arabic-section-heading"
            ),
            "up",
            0,
            900
        );


        audience
            .querySelectorAll(
                ".arabic-audience-card"
            )
            .forEach(function (card, index) {

                observe(
                    card,
                    "up",
                    index * 130,
                    950
                );

            });

    }


    /* =================================================
       COURSE DETAILS
    ================================================= */

    document
        .querySelectorAll(
            ".arabic-course-detail"
        )
        .forEach(function (section) {

            const content =
                section.querySelector(
                    ".arabic-course-detail-content"
                );


            const visual =
                section.querySelector(
                    ".arabic-course-detail-visual"
                );


            const points =
                section.querySelectorAll(
                    ".arabic-detail-point"
                );


            /* LEFT */

            observe(
                content,
                "left",
                0,
                950
            );


            /* RIGHT */

            observe(
                visual,
                "right",
                130,
                1000
            );


            /* POINTS */

            points.forEach(
                function (point, index) {

                    observe(
                        point,
                        "up",
                        220 + (index * 100),
                        750
                    );

                }
            );

        });


    /* =================================================
       CTA
    ================================================= */

    const cta =
        document.querySelector(
            ".final-cta-section"
        );


    if (cta) {

        cta
            .querySelectorAll(
                ".final-cta-container > *"
            )
            .forEach(function (item, index) {

                observe(
                    item,
                    "up",
                    index * 100,
                    850
                );

            });

    }


    /* =================================================
       FOOTER
    ================================================= */

    const footer =
        document.querySelector(
            ".site-footer"
        );


    if (footer) {

        footer
            .querySelectorAll(
                ".footer-brand, " +
                ".footer-column, " +
                ".footer-bottom"
            )
            .forEach(function (item, index) {

                observe(
                    item,
                    "up",
                    index * 80,
                    750
                );

            });

    }

});

    /* =================================================
       1. HERO SECTION — LOAD ANIMATION
    ================================================= */

    if (document.querySelector(".how-works-hero")) {

        const heroTl = gsap.timeline({
            defaults: { ease: "power3.out" }
        });

        heroTl
            .from(".how-works-label", {
                y: 20,
                opacity: 0,
                duration: 0.6
            })
            .from(".how-works-content h1", {
                y: 35,
                opacity: 0,
                duration: 0.8
            }, "-=0.35")
            .from(".how-works-content > p", {
                y: 25,
                opacity: 0,
                duration: 0.7
            }, "-=0.5")
            .from(".how-works-buttons a", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12
            }, "-=0.45")
            .from(".how-highlight", {
                y: 18,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12
            }, "-=0.35")
            .from(".how-works-visual", {
                scale: 0.9,
                opacity: 0,
                duration: 1
            }, "-=0.9");
    }


    /* =================================================
       2. PROCESS CARDS — SCROLL REVEAL + STAGGER
    ================================================= */

    if (document.querySelector(".process-steps")) {

        gsap.from(".process-header > *", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".process-header",
                start: "top 82%",
            }
        });

        gsap.from(".process-card", {
            y: 45,
            opacity: 0,
            duration: 0.7,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".process-steps",
                start: "top 80%",
            },
            onComplete: function () {
                // scroll-reveal khatam hone ke baad inline transform saaf kar do
                gsap.set(this.targets(), { clearProps: "transform" });
            }
        });

        gsap.from(".process-connector", {
            opacity: 0,
            scale: 0.6,
            duration: 0.5,
            stagger: 0.18,
            delay: 0.3,
            ease: "back.out(2)",
            scrollTrigger: {
                trigger: ".process-steps",
                start: "top 80%",
            }
        });

        gsap.from(".process-trust span", {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".process-trust",
                start: "top 90%",
            }
        });
    }


    /* =================================================
       PROCESS CARD — HOVER ONLY
       (single source of truth — no duplicate listeners)
    ================================================= */

    document.querySelectorAll(".process-card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            gsap.set(card, { clearProps: "transform" });   // purana residue saaf
            gsap.to(card, {
                y: -6,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => {
                    gsap.set(card, { clearProps: "transform" });
                }
            });
        });

    });


    /* =================================================
       3. TRIAL BENEFITS SECTION
    ================================================= */

    if (document.querySelector(".trial-benefits-section")) {

        gsap.from(".trial-benefits-label, .trial-benefits-content h2, .trial-benefits-content > p", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".trial-benefits-content",
                start: "top 78%",
            }
        });

        gsap.from(".trial-benefit", {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".trial-benefits-list",
                start: "top 82%",
            }
        });

        gsap.from(".trial-benefits-visual", {
            scale: 0.85,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".trial-benefits-visual",
                start: "top 78%",
            }
        });

        gsap.from(".trial-mini-badge, .trial-deco-star", {
            y: 15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".trial-benefits-visual",
                start: "top 78%",
            }
        });
    }


    /* =================================================
       4. LEARNING PLAN JOURNEY
    ================================================= */

    if (document.querySelector(".learning-plan-section")) {

        gsap.from(".learning-plan-label, .learning-plan-header h2, .learning-plan-header p", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".learning-plan-header",
                start: "top 82%",
            }
        });

        gsap.from(".learning-plan-step", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".learning-plan-journey",
                start: "top 78%",
            },
            onComplete: function () {
                gsap.set(this.targets(), { clearProps: "transform" });
            }
        });

        gsap.from(".learning-plan-line", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".learning-plan-journey",
                start: "top 78%",
            }
        });

        gsap.from(".learning-plan-note", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".learning-plan-note",
                start: "top 90%",
            }
        });
    }


    /* =================================================
       5. WHY CHOOSE US — MODERN SECTION
    ================================================= */

    if (document.querySelector(".why-modern-section")) {

        gsap.from(".why-modern-label, .why-modern-header h2, .why-modern-header > p", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".why-modern-header",
                start: "top 82%",
            }
        });

        gsap.from(".why-modern-feature", {
            y: 35,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".why-modern-panel",
                start: "top 80%",
            },
            onComplete: function () {
                gsap.set(this.targets(), { clearProps: "transform" });
            }
        });

        gsap.from(".why-modern-bottom", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".why-modern-bottom",
                start: "top 90%",
            }
        });
    }


    /* =================================================
       6. FINAL CTA
    ================================================= */

    if (document.querySelector(".final-cta-section")) {

        gsap.from(".final-cta-container > *", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".final-cta-section",
                start: "top 80%",
            }
        });
    }


    /* =================================================
       7. FOOTER
    ================================================= */

    if (document.querySelector(".site-footer")) {

        gsap.from(".footer-brand, .footer-column", {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".site-footer",
                start: "top 88%",
            }
        });
    }


    /* =================================================
       REDUCED MOTION — ACCESSIBILITY
    ================================================= */

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
    /* =================================================
       REFRESH
    ================================================= */

    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        setTimeout(
            function () {

                ScrollTrigger.refresh();

            },
            300
        );

}
/* =====================================================
   BLOG PAGE — PREMIUM ANIMATIONS
   Existing animations ko touch nahi karta
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------
       GSAP CHECK
    ----------------------------------------------- */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* -----------------------------------------------
       REDUCED MOTION
    ----------------------------------------------- */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        return;
    }


    /* =================================================
       BLOG HERO
       Soft entrance — image stays static
    ================================================= */

    const blogHero =
        document.querySelector(".blog-hero");

    if (blogHero) {

        const heroLabel =
            blogHero.querySelector(".blog-hero-label");

        const heroHeading =
            blogHero.querySelector(".blog-hero-content h1");

        const heroLine =
            blogHero.querySelector(".blog-hero-line");

        const heroText =
            blogHero.querySelector(".blog-hero-content p");

        const heroButtons =
            blogHero.querySelector(".blog-hero-buttons");

        const heroInfo =
            blogHero.querySelector(".blog-hero-info");

        const heroMessage =
            blogHero.querySelector(".blog-hero-message");


        /* Initial states */

        gsap.set(
            [
                heroLabel,
                heroHeading,
                heroLine,
                heroText,
                heroButtons,
                heroInfo
            ],
            {
                opacity: 0,
                y: 22
            }
        );


        if (heroMessage) {
            gsap.set(heroMessage, {
                opacity: 0,
                x: 18
            });
        }


        /* Timeline */

        const blogHeroTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        blogHeroTimeline

            .to(heroLabel, {
                opacity: 1,
                y: 0,
                duration: 0.55
            })

            .to(heroHeading, {
                opacity: 1,
                y: 0,
                duration: 0.75
            }, "-=0.25")

            .to(heroLine, {
                opacity: 1,
                y: 0,
                duration: 0.45
            }, "-=0.35")

            .to(heroText, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.25")

            .to(heroButtons, {
                opacity: 1,
                y: 0,
                duration: 0.55
            }, "-=0.25")

            .to(heroInfo, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.2");


        /* Right-side message */

        if (heroMessage) {

            blogHeroTimeline.to(
                heroMessage,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.75,
                    ease: "power2.out"
                },
                "-=0.65"
            );

        }

    }


    /* =================================================
       OUR ARTICLES HEADING
    ================================================= */

    const articlesSection =
        document.querySelector(".our-articles");

    if (articlesSection) {

        const articlesHeading =
            articlesSection.querySelector(
                ".our-articles-heading"
            );

        const articleCards =
            articlesSection.querySelectorAll(
                ".article-card"
            );


        /* Heading */

        if (articlesHeading) {

            gsap.fromTo(
                articlesHeading,
                {
                    opacity: 0,
                    y: 28
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.75,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: articlesHeading,

                        start: "top 84%",

                        once: true
                    }
                }
            );

        }


        /* Cards */

        if (articleCards.length) {

            gsap.fromTo(
                articleCards,
                {
                    opacity: 0,
                    y: 32
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.65,

                    stagger: 0.12,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: articlesSection,

                        start: "top 72%",

                        once: true
                    },

                    onComplete: function () {

                        /*
                         * Important:
                         * Animation ke baad GSAP transform
                         * remove kar raha hai.
                         *
                         * Isliye CSS hover transform
                         * properly kaam karega.
                         */

                        gsap.set(
                            articleCards,
                            {
                                clearProps:
                                    "opacity,transform"
                            }
                        );

                    }

                }
            );

        }

    }


    /* =================================================
       ARTICLE CARD IMAGE — VERY SUBTLE
       No permanent movement
    ================================================= */

    document
        .querySelectorAll(".article-card")
        .forEach(function (card) {

            const image =
                card.querySelector(
                    ".article-image img"
                );

            if (!image) return;


            card.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(image, {
                        scale: 1.025,
                        duration: 0.45,
                        ease: "power2.out",
                        overwrite: "auto"
                    });

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(image, {
                        scale: 1,
                        duration: 0.45,
                        ease: "power2.out",
                        overwrite: "auto"
                    });

                }
            );

        });


    /* =================================================
       FINAL CTA
       Existing global CTA ko disturb nahi karta
    ================================================= */

    const blogCta =
        document.querySelector(
            ".final-cta-section"
        );

    if (blogCta) {

        const ctaContainer =
            blogCta.querySelector(
                ".final-cta-container"
            );

        if (ctaContainer) {

            gsap.fromTo(
                ctaContainer.children,
                {
                    opacity: 0,
                    y: 24
                },
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.65,

                    stagger: 0.09,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: blogCta,

                        start: "top 82%",

                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            ctaContainer.children,
                            {
                                clearProps:
                                    "opacity,transform"
                            }
                        );

                    }

                }
            );

        }

    }


    /* =================================================
       REFRESH SCROLLTRIGGER
    ================================================= */

    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        setTimeout(function () {

            ScrollTrigger.refresh();

        }, 300);

    }

});
// =========================================================
// ARTICLE PAGE — PREMIUM ANIMATIONS
// 5 Ways to Stay Consistent
// Safe: only targets .article-page elements
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // GSAP available hai ya nahi
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Reduced motion respect
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }


    // =====================================================
    // ARTICLE HERO
    // =====================================================

    const articleHero = document.querySelector(".article-hero");

    if (articleHero) {

        const heroLabel = articleHero.querySelector(".article-label");
        const heroHeading = articleHero.querySelector(".article-hero-content h1");
        const heroLine = articleHero.querySelector(".article-title-line");
        const heroIntro = articleHero.querySelector(".article-intro");
        const heroMeta = articleHero.querySelector(".article-meta");
        const heroImage = articleHero.querySelector(".article-hero-image");

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        if (heroLabel) {
            heroTimeline.from(heroLabel, {
                opacity: 0,
                y: 18,
                duration: 0.55
            });
        }

        if (heroHeading) {
            heroTimeline.from(heroHeading, {
                opacity: 0,
                y: 25,
                duration: 0.7
            }, "-=0.32");
        }

        if (heroLine) {
            heroTimeline.from(heroLine, {
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.45
            }, "-=0.35");
        }

        if (heroIntro) {
            heroTimeline.from(heroIntro, {
                opacity: 0,
                y: 16,
                duration: 0.55
            }, "-=0.20");
        }

        if (heroMeta) {
            heroTimeline.from(heroMeta, {
                opacity: 0,
                y: 12,
                duration: 0.45
            }, "-=0.25");
        }

        if (heroImage) {
            heroTimeline.from(heroImage, {
                opacity: 0,
                x: 28,
                duration: 0.8
            }, "-=0.65");
        }
    }


    // =====================================================
    // BREADCRUMB
    // =====================================================

    const breadcrumb = document.querySelector(".article-breadcrumb");

    if (breadcrumb) {

        gsap.from(breadcrumb, {
            opacity: 0,
            y: -10,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.1
        });

    }


    // =====================================================
    // FEATURED ARTICLE IMAGE
    // =====================================================

    const featuredImage = document.querySelector(".article-featured-image");

    if (featuredImage) {

        gsap.from(featuredImage, {
            opacity: 0,
            y: 30,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
                trigger: featuredImage,
                start: "top 82%",
                once: true
            },
            onComplete: () => {
                gsap.set(featuredImage, {
                    clearProps: "opacity,transform"
                });
            }
        });

    }


    // =====================================================
    // ARTICLE STEPS
    // =====================================================

    const articleSteps = gsap.utils.toArray(".article-step");

    articleSteps.forEach((step) => {

        const icon = step.querySelector(".article-step-icon");
        const content = step.querySelector(".article-step-content");

        const elements = [];

        if (icon) elements.push(icon);
        if (content) elements.push(content);

        if (!elements.length) return;

        gsap.from(elements, {
            opacity: 0,
            y: 25,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",

            scrollTrigger: {
                trigger: step,
                start: "top 82%",
                once: true
            },

            onComplete: () => {
                gsap.set(elements, {
                    clearProps: "opacity,transform"
                });
            }
        });

    });


    // =====================================================
    // QUOTE / TIP / GOAL / REMINDER BOXES
    // =====================================================

    const articleBoxes = gsap.utils.toArray(
        ".article-quote, .article-highlight, .mini-goal-box, .article-reminder, .article-closing"
    );

    articleBoxes.forEach((box) => {

        gsap.from(box, {
            opacity: 0,
            y: 18,
            duration: 0.55,
            ease: "power2.out",

            scrollTrigger: {
                trigger: box,
                start: "top 88%",
                once: true
            },

            onComplete: () => {
                gsap.set(box, {
                    clearProps: "opacity,transform"
                });
            }
        });

    });


    // =====================================================
    // BACK TO BLOG
    // =====================================================

    const backToBlog = document.querySelector(".back-to-blog");

    if (backToBlog) {

        gsap.from(backToBlog, {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out",

            scrollTrigger: {
                trigger: backToBlog,
                start: "top 90%",
                once: true
            },

            onComplete: () => {
                gsap.set(backToBlog, {
                    clearProps: "opacity,transform"
                });
            }
        });

    }


    // =====================================================
    // SIDEBAR CARDS
    // =====================================================

    const sidebarCards = gsap.utils.toArray(
        ".article-sidebar-card, .article-sidebar-quote"
    );

    sidebarCards.forEach((card, index) => {

        gsap.from(card, {
            opacity: 0,
            x: 20,
            duration: 0.55,
            delay: index * 0.06,
            ease: "power2.out",

            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
            },

            onComplete: () => {
                gsap.set(card, {
                    clearProps: "opacity,transform"
                });
            }
        });

    });


    // =====================================================
    // BOTTOM RELATED ARTICLES
    // =====================================================

    const relatedHeading = document.querySelector(
        ".article-related-heading"
    );

    if (relatedHeading) {

        gsap.from(relatedHeading, {
            opacity: 0,
            y: 25,
            duration: 0.65,
            ease: "power3.out",

            scrollTrigger: {
                trigger: relatedHeading,
                start: "top 82%",
                once: true
            },

            onComplete: () => {
                gsap.set(relatedHeading, {
                    clearProps: "opacity,transform"
                });
            }
        });

    }


    const relatedCards = gsap.utils.toArray(
        ".related-bottom-card"
    );

    if (relatedCards.length) {

        gsap.from(relatedCards, {
            opacity: 0,
            y: 28,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".article-related-grid",
                start: "top 82%",
                once: true
            },

            onComplete: () => {
                gsap.set(relatedCards, {
                    clearProps: "opacity,transform"
                });
            }
        });

    }


    // =====================================================
    // REFRESH SCROLLTRIGGER
    // =====================================================

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 300);

});
/* =========================================================
   FAQ PAGE — CATEGORY + ACCORDION + SEARCH
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqPage = document.querySelector(".faq-page");

    if (!faqPage) return;


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    faqPage.querySelectorAll(".faq-question").forEach(function (question) {

        question.addEventListener("click", function (e) {

            e.preventDefault();

            const currentItem =
                question.closest(".faq-item");

            if (!currentItem) return;

            const currentSection =
                currentItem.closest(".faq-category-section");

            const isOpen =
                currentItem.classList.contains("active");


            /* Close other FAQs */

            if (currentSection) {

                currentSection
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        if (item !== currentItem) {

                            item.classList.remove("active");

                            const toggle =
                                item.querySelector(".faq-toggle");

                            if (toggle) {
                                toggle.textContent = "+";
                            }

                        }

                    });

            }


            /* Open / Close current FAQ */

            if (isOpen) {

                currentItem.classList.remove("active");

                const toggle =
                    currentItem.querySelector(".faq-toggle");

                if (toggle) {
                    toggle.textContent = "+";
                }

            } else {

                currentItem.classList.add("active");

                const toggle =
                    currentItem.querySelector(".faq-toggle");

                if (toggle) {
                    toggle.textContent = "−";
                }

            }

        });

    });


    /* =====================================================
       CATEGORY SWITCHING
    ===================================================== */

    const categories =
        faqPage.querySelectorAll(".faq-category");

    const sections =
        faqPage.querySelectorAll(".faq-category-section");


    categories.forEach(function (category) {

        category.addEventListener("click", function () {

            const categoryName =
                category.getAttribute("data-category");

            if (!categoryName) return;


            /* Active category */

            categories.forEach(function (cat) {
                cat.classList.remove("active");
            });

            category.classList.add("active");


            /* Show selected section */

            sections.forEach(function (section) {

                const isSelected =
                    section.getAttribute("data-section")
                    === categoryName;

                section.classList.toggle(
                    "active",
                    isSelected
                );


                /* Close FAQs */

                if (isSelected) {

                    section
                        .querySelectorAll(".faq-item")
                        .forEach(function (item) {

                            item.classList.remove("active");

                            const toggle =
                                item.querySelector(".faq-toggle");

                            if (toggle) {
                                toggle.textContent = "+";
                            }

                        });

                }

            });


            /* Open first question */

            const selectedSection =
                faqPage.querySelector(
                    '.faq-category-section[data-section="' +
                    categoryName +
                    '"]'
                );

            if (selectedSection) {

                const firstItem =
                    selectedSection.querySelector(".faq-item");

                if (firstItem) {

                    firstItem.classList.add("active");

                    const toggle =
                        firstItem.querySelector(".faq-toggle");

                    if (toggle) {
                        toggle.textContent = "−";
                    }

                }

            }

        });

    });


    /* =====================================================
       FAQ SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById("faqSearch");

    const searchButton =
        document.getElementById("faqSearchBtn");

    const noResults =
        document.getElementById("faqNoResults");


    function performSearch() {

        if (!searchInput) return;

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        /* Empty search */

        if (query === "") {

            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            const generalSection =
                faqPage.querySelector(
                    '.faq-category-section[data-section="general"]'
                );

            if (generalSection) {

                generalSection.classList.add("active");

                const firstItem =
                    generalSection.querySelector(".faq-item");

                if (firstItem) {

                    firstItem.classList.add("active");

                    const toggle =
                        firstItem.querySelector(".faq-toggle");

                    if (toggle) {
                        toggle.textContent = "−";
                    }

                }

            }

            categories.forEach(function (category) {

                category.classList.toggle(
                    "active",
                    category.dataset.category === "general"
                );

            });

            if (noResults) {
                noResults.classList.remove("active");
            }

            faqPage
                .querySelectorAll(".faq-item")
                .forEach(function (item) {
                    item.style.display = "";
                });

            return;
        }


        /* Search */

        let totalMatches = 0;


        sections.forEach(function (section) {

            let sectionMatches = 0;

            section
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    const question =
                        item.querySelector(
                            ".faq-question-text"
                        );

                    const answer =
                        item.querySelector(
                            ".faq-answer"
                        );


                    const text =
                        (
                            (question
                                ? question.textContent
                                : "") +
                            " " +
                            (answer
                                ? answer.textContent
                                : "")
                        ).toLowerCase();


                    if (text.includes(query)) {

                        item.style.display = "";

                        sectionMatches++;
                        totalMatches++;

                    } else {

                        item.style.display = "none";

                    }


                    item.classList.remove("active");

                    const toggle =
                        item.querySelector(".faq-toggle");

                    if (toggle) {
                        toggle.textContent = "+";
                    }

                });


            section.classList.toggle(
                "active",
                sectionMatches > 0
            );

        });


        categories.forEach(function (category) {
            category.classList.remove("active");
        });


        if (noResults) {

            noResults.classList.toggle(
                "active",
                totalMatches === 0
            );

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            performSearch
        );

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    performSearch();
                }

            }
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    const generalCategory =
        faqPage.querySelector(
            '.faq-category[data-category="general"]'
        );

    const generalSection =
        faqPage.querySelector(
            '.faq-category-section[data-section="general"]'
        );


    if (generalCategory) {
        generalCategory.classList.add("active");
    }


    if (generalSection) {

        generalSection.classList.add("active");

        const firstItem =
            generalSection.querySelector(".faq-item");

        if (firstItem) {

            firstItem.classList.add("active");

            const toggle =
                firstItem.querySelector(".faq-toggle");

            if (toggle) {
                toggle.textContent = "−";
            }

        }

    }

});
 /* =========================================================
    FAQ PAGE — PREMIUM ANIMATION
    Background image stays 100% STATIC
 ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqPage = document.querySelector(".faq-page");

    if (!faqPage) return;

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        return;
    }


    /* =====================================================
       FAQ HERO
       Background image is NOT touched
    ===================================================== */

    const hero =
        faqPage.querySelector(".faq-hero");

    if (hero) {

        const breadcrumb =
            hero.querySelector(".faq-breadcrumb");

        const label =
            hero.querySelector(".faq-label");

        const heading =
            hero.querySelector(".faq-hero-content h1");

        const divider =
            hero.querySelector(".faq-title-line");

        const paragraph =
            hero.querySelector(".faq-hero-content p");

        const search =
            hero.querySelector(".faq-search-box");

        const infoItems =
            hero.querySelectorAll(".faq-info-item");


        /* ---------------------------------------------
           Initial states
        --------------------------------------------- */

        gsap.set(
            [
                breadcrumb,
                label,
                heading,
                divider,
                paragraph,
                search,
                ...infoItems
            ].filter(Boolean),
            {
                opacity: 0,
                y: 22
            }
        );


        /* ---------------------------------------------
           Hero Timeline
        --------------------------------------------- */

        const heroTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        if (breadcrumb) {

            heroTimeline.to(
                breadcrumb,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }
            );

        }


        if (label) {

            heroTimeline.to(
                label,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55
                },
                "-=0.2"
            );

        }


        if (heading) {

            heroTimeline.to(
                heading,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75
                },
                "-=0.25"
            );

        }


        if (divider) {

            heroTimeline.to(
                divider,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45
                },
                "-=0.3"
            );

        }


        if (paragraph) {

            heroTimeline.to(
                paragraph,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                },
                "-=0.2"
            );

        }


        if (search) {

            heroTimeline.to(
                search,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                },
                "-=0.15"
            );

        }


        if (infoItems.length) {

            heroTimeline.to(
                infoItems,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08
                },
                "-=0.2"
            );

        }

    }


    /* =====================================================
       FAQ CONTENT SECTION
    ===================================================== */

    const contentSection =
        faqPage.querySelector(
            ".faq-content-section"
        );

    if (contentSection) {

        const categoryCard =
            contentSection.querySelector(
                ".faq-category-card"
            );

        const faqSections =
            contentSection.querySelectorAll(
                ".faq-category-section"
            );


        /* CATEGORY SIDEBAR */

        if (categoryCard) {

            gsap.fromTo(
                categoryCard,
                {
                    opacity: 0,
                    x: -25
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: categoryCard,
                        start: "top 85%",
                        once: true
                    },

                    onComplete: function () {

                        gsap.set(
                            categoryCard,
                            {
                                clearProps:
                                    "opacity,transform"
                            }
                        );

                    }
                }
            );

        }


        /* FAQ SECTIONS */

        faqSections.forEach(function (section) {

            const title =
                section.querySelector(
                    ".faq-section-title"
                );

            const items =
                section.querySelectorAll(
                    ".faq-item"
                );


            if (title) {

                gsap.fromTo(
                    title,
                    {
                        opacity: 0,
                        y: 25
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: title,
                            start: "top 85%",
                            once: true
                        }
                    }
                );

            }


            if (items.length) {

                gsap.fromTo(
                    items,
                    {
                        opacity: 0,
                        y: 18
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        stagger: 0.07,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: items[0],
                            start: "top 88%",
                            once: true
                        },

                        onComplete: function () {

                            gsap.set(
                                items,
                                {
                                    clearProps:
                                        "opacity,transform"
                                }
                            );

                        }
                    }
                );

            }

        });

    }


    /* =====================================================
       FAQ ITEM HOVER
       ONLY 2px FLOAT
    ===================================================== */

    faqPage
        .querySelectorAll(".faq-item")
        .forEach(function (item) {

            item.addEventListener(
                "mouseenter",
                function () {

                    if (
                        !item.classList.contains("active")
                    ) {

                        gsap.to(
                            item,
                            {
                                y: -2,
                                duration: 0.25,
                                ease: "power2.out",
                                overwrite: true
                            }
                        );

                    }

                }
            );


            item.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        item,
                        {
                            y: 0,
                            duration: 0.25,
                            ease: "power2.out",
                            overwrite: true
                        }
                    );

                }
            );

        });


    /* =====================================================
       CATEGORY HOVER
    ===================================================== */

    faqPage
        .querySelectorAll(".faq-category")
        .forEach(function (category) {

            category.addEventListener(
                "mouseenter",
                function () {

                    if (
                        !category.classList.contains("active")
                    ) {

                        gsap.to(
                            category,
                            {
                                x: 3,
                                duration: 0.2,
                                ease: "power2.out"
                            }
                        );

                    }

                }
            );


            category.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        category,
                        {
                            x: 0,
                            duration: 0.2,
                            ease: "power2.out"
                        }
                    );

                }
            );

        });


    /* =====================================================
       CONTACT BANNER
    ===================================================== */

    const contactBanner =
        faqPage.querySelector(
            ".faq-contact-banner"
        );

    if (contactBanner) {

        gsap.fromTo(
            contactBanner,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: contactBanner,
                    start: "top 88%",
                    once: true
                },

                onComplete: function () {

                    gsap.set(
                        contactBanner,
                        {
                            clearProps:
                                "opacity,transform"
                        }
                    );

                }
            }
        );

    }


    /* =====================================================
       REFRESH
    ===================================================== */

    setTimeout(
        function () {
            ScrollTrigger.refresh();
        },
        500
    );

});
/* =========================================================
   ABOUT PAGE — CLEAN GSAP ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       HERO
    ===================================================== */

    const hero = document.querySelector(".about-hero");

    if (hero) {

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        tl.from(".about-breadcrumb", {
            opacity: 0,
            y: 15,
            duration: 0.5
        })

        .from(".about-label", {
            opacity: 0,
            x: -15,
            duration: 0.45
        }, "-=0.25")

        .from(".about-hero-content h1", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.2")

        .from(".about-hero-text", {
            opacity: 0,
            y: 15,
            duration: 0.5
        }, "-=0.35")

        .from(".about-primary-btn", {
            opacity: 0,
            y: 12,
            duration: 0.45
        }, "-=0.25")

        .from(".about-stat", {
            opacity: 0,
            y: 12,
            duration: 0.4,
            stagger: 0.1
        }, "-=0.2")

        .from(".about-hero-visual", {
            opacity: 0,
            x: 25,
            duration: 0.7
        }, "-=0.6")

        .from(".about-quote-card", {
            opacity: 0,
            scale: 0.95,
            duration: 0.45
        }, "-=0.35");
    }


    /* =====================================================
       OUR MISSION
    ===================================================== */

    const mission = document.querySelector(".our-mission");

    if (mission) {

        gsap.from(".mission-visual", {
            scrollTrigger: {
                trigger: mission,
                start: "top 80%",
                once: true
            },

            opacity: 0,
            x: -30,

            duration: 0.75,

            ease: "power3.out"
        });


        gsap.from(".mission-content", {
            scrollTrigger: {
                trigger: mission,
                start: "top 80%",
                once: true
            },

            opacity: 0,
            x: 30,

            duration: 0.75,

            ease: "power3.out"
        });


        gsap.from(".mission-point", {
            scrollTrigger: {
                trigger: ".mission-content",
                start: "top 75%",
                once: true
            },

            opacity: 0,
            y: 15,

            duration: 0.5,

            stagger: 0.12,

            ease: "power2.out"
        });
    }

    /* =====================================================
   OUR VALUES — CARDS
===================================================== */

const valuesSection = document.querySelector(".our-values");

if (valuesSection) {

    gsap.from(".values-heading", {
        scrollTrigger: {
            trigger: valuesSection,
            start: "top 82%",
            once: true
        },

        opacity: 0,
        y: 20,

        duration: 0.65,
        ease: "power3.out",

        clearProps: "opacity,transform"
    });


    gsap.fromTo(
        ".value-card",

        {
            opacity: 0,
            y: 22
        },

        {
            opacity: 1,
            y: 0,

            duration: 0.55,
            stagger: 0.1,

            ease: "power3.out",

            clearProps: "opacity,transform",

            scrollTrigger: {
                trigger: ".values-grid",
                start: "top 85%",
                once: true
            }
        }
    );


    gsap.from(".values-closing", {
        scrollTrigger: {
            trigger: ".values-closing",
            start: "top 88%",
            once: true
        },

        opacity: 0,
        y: 15,

        duration: 0.5,
        ease: "power2.out",

        clearProps: "opacity,transform"
    });

}


    /* =====================================================
       WHY CHOOSE US
    ===================================================== */

    const why = document.querySelector(".why-choose");

    if (why) {

        /* LEFT CONTENT */

        gsap.from(".why-choose-content", {
            scrollTrigger: {
                trigger: why,
                start: "top 80%",
                once: true
            },

            opacity: 0,
            x: -30,

            duration: 0.75,

            ease: "power3.out"
        });


        /* RIGHT CARDS */

        gsap.fromTo(
            ".why-card",

            {
                opacity: 0,
                y: 22
            },

            {
                opacity: 1,
                y: 0,

                duration: 0.55,

                stagger: 0.1,

                ease: "power3.out",

                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: ".why-features",
                    start: "top 82%",
                    once: true
                }
            }
        );


        /* CTA */

        gsap.from(".why-cta", {
            scrollTrigger: {
                trigger: ".why-cta",
                start: "top 88%",
                once: true
            },

            opacity: 0,
            y: 15,

            duration: 0.5,

            ease: "power2.out"
        });


        /* BOTTOM POINTS */

        gsap.from(".why-bottom-item", {
            scrollTrigger: {
                trigger: ".why-bottom-points",
                start: "top 90%",
                once: true
            },

            opacity: 0,
            y: 10,

            duration: 0.4,

            stagger: 0.1,

            ease: "power2.out"
        });
    }


    /* =====================================================
       REFRESH SCROLLTRIGGER
    ===================================================== */

    window.addEventListener("load", function () {
        ScrollTrigger.refresh();
    });

});
/* =====================================================
   COUNTRY PRICING TABS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const pricingTabs = document.querySelectorAll(".currency-tab");
    const pricingPanels = document.querySelectorAll(".country-price-panel");

    pricingTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const country = this.getAttribute("data-country");

            pricingTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            pricingPanels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            this.classList.add("active");

            const selectedPanel = document.getElementById(country);

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }

        });

    });

});
/* =========================================================
   PRICING PAGE — COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GSAP CHECK
    ===================================================== */

    const hasGSAP = typeof gsap !== "undefined";
    const hasScrollTrigger = typeof ScrollTrigger !== "undefined";

    if (hasGSAP && hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* =====================================================
   PRICING HERO — FULL ANIMATION
===================================================== */

const pricingHero = document.querySelector(".pricing-hero");

if (pricingHero && typeof gsap !== "undefined") {

    const heroEyebrow = pricingHero.querySelector(".hero-eyebrow");
    const heroTitle = pricingHero.querySelector("h1");
    const heroText = pricingHero.querySelector("p");

    const heroButtons =
        pricingHero.querySelector(".pricing-hero-buttons");

    const heroTrusted =
        pricingHero.querySelector(".pricing-trusted");

    const heroVisual =
        pricingHero.querySelector(
            ".hero-visual, .pricing-hero-image, .pricing-hero-visual"
        );

    /* BOTTOM FEATURES */
    const featureStrip =
        pricingHero.querySelector(".pricing-feature-strip");

    const featureItems =
        pricingHero.querySelectorAll(".pricing-feature");


    /* -------------------------------------------------
       INITIAL STATES
    ------------------------------------------------- */

    gsap.set(
        [
            heroEyebrow,
            heroTitle,
            heroText,
            heroButtons,
            heroTrusted
        ].filter(Boolean),
        {
            opacity: 0,
            y: 28
        }
    );


    /* HERO IMAGE */
    if (heroVisual) {
        gsap.set(heroVisual, {
            opacity: 0,
            x: 45,
            scale: 0.94
        });
    }


    /* BOTTOM FEATURES */
    if (featureStrip) {
        gsap.set(featureStrip, {
            opacity: 0,
            y: 25
        });
    }

    if (featureItems.length) {
        gsap.set(featureItems, {
            opacity: 0,
            y: 20
        });
    }


    /* -------------------------------------------------
       MAIN HERO TIMELINE
    ------------------------------------------------- */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    heroTimeline

        /* Eyebrow */
        .to(heroEyebrow, {
            opacity: 1,
            y: 0,
            duration: 0.5
        })

        /* Hero Image */
        .to(heroVisual, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9
        }, "<")

        /* Heading */
        .to(heroTitle, {
            opacity: 1,
            y: 0,
            duration: 0.7
        }, "-=.45")

        /* Paragraph */
        .to(heroText, {
            opacity: 1,
            y: 0,
            duration: 0.55
        }, "-=.35")

        /* Buttons */
        .to(heroButtons, {
            opacity: 1,
            y: 0,
            duration: 0.55
        }, "-=.28")

        /* Trusted */
        .to(heroTrusted, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }, "-=.22")


        /* -------------------------------------------------
           BOTTOM FEATURE STRIP
        ------------------------------------------------- */

        .to(featureStrip, {
            opacity: 1,
            y: 0,
            duration: 0.45
        }, "-=.10")

        .to(featureItems, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out"
        }, "-=.25");


    /* -------------------------------------------------
       IMAGE FLOATING EFFECT
    ------------------------------------------------- */

    if (heroVisual) {

        gsap.to(heroVisual, {
            y: -6,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });

    }


    /* -------------------------------------------------
       FEATURE HOVER
    ------------------------------------------------- */

    featureItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            gsap.to(item, {
                y: -3,
                duration: 0.25,
                ease: "power2.out"
            });

        });

        item.addEventListener("mouseleave", function () {

            gsap.to(item, {
                y: 0,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    });

}


    /* =====================================================
       MAIN PRICING CARDS
    ===================================================== */

    const pricingCards =
        document.querySelectorAll(".pricing-card");

    if (hasGSAP && hasScrollTrigger && pricingCards.length) {

        gsap.fromTo(
            pricingCards,
            {
                opacity: 0,
                y: 35
            },
            {
                opacity: 1,
                y: 0,
                duration: .65,
                stagger: .12,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: ".pricing-cards",
                    start: "top 82%",
                    once: true
                }
            }
        );
    }


    /* =====================================================
       COUNTRY PRICING HEADING
       
       IMPORTANT:
       Direct children only.
       This prevents the inner heading spans from
       accidentally disappearing.
    ===================================================== */

    const countryHeading =
        document.querySelector(".country-pricing-heading");

    if (hasGSAP && hasScrollTrigger && countryHeading) {

        const label =
            countryHeading.querySelector(":scope > span");

        const title =
            countryHeading.querySelector(":scope > h2");

        const description =
            countryHeading.querySelector(":scope > p");


        const headingElements = [
            label,
            title,
            description
        ].filter(Boolean);


        gsap.set(headingElements, {
            opacity: 0,
            y: 0,
            visibility: "visible"
        });


        const headingTimeline = gsap.timeline({
            paused: true,
            defaults: {
                ease: "power3.out"
            }
        });


        if (label) {

            headingTimeline.fromTo(
                label,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .5
                }
            );

        }


        if (title) {

            headingTimeline.fromTo(
                title,
                {
                    opacity: 0,
                    y: 25
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .65
                },
                "-=.25"
            );

        }


        if (description) {

            headingTimeline.fromTo(
                description,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .5
                },
                "-=.25"
            );

        }


        ScrollTrigger.create({

            trigger: countryHeading,

            start: "top 85%",

            once: true,

            onEnter: function () {
                headingTimeline.play();
            }

        });

    }


    /* =====================================================
       CURRENCY TABS
    ===================================================== */

    const currencyTabs =
        document.querySelectorAll(".currency-tab");

    const countryPanels =
        document.querySelectorAll(".country-price-panel");


    function showCountryPanel(countryId) {

        countryPanels.forEach(function (panel) {

            panel.classList.remove("active");

        });


        currencyTabs.forEach(function (tab) {

            tab.classList.remove("active");

        });


        const selectedPanel =
            document.getElementById(countryId);

        const selectedTab =
            document.querySelector(
                '.currency-tab[data-country="' +
                countryId +
                '"]'
            );


        if (selectedPanel) {
            selectedPanel.classList.add("active");
        }

        if (selectedTab) {
            selectedTab.classList.add("active");
        }


        /* Animate newly selected panel */

        if (hasGSAP && selectedPanel) {

            gsap.fromTo(
                selectedPanel,
                {
                    opacity: 0,
                    y: 12
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .35,
                    ease: "power2.out"
                }
            );


            const selectedOptions =
                selectedPanel.querySelectorAll(
                    ".price-option"
                );


            if (selectedOptions.length) {

                gsap.fromTo(
                    selectedOptions,
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: .4,
                        stagger: .07,
                        ease: "power2.out"
                    }
                );

            }

        }

    }


    currencyTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const country =
                this.getAttribute("data-country");

            if (!country) return;

            showCountryPanel(country);

        });

    });


    /* =====================================================
       INITIAL COUNTRY PANEL
    ===================================================== */

    const initialPanel =
        document.querySelector(
            ".country-price-panel.active"
        );

    if (hasGSAP && hasScrollTrigger && initialPanel) {

        const initialOptions =
            initialPanel.querySelectorAll(".price-option");


        gsap.fromTo(
            initialPanel,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: .65,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: ".country-price-panel",
                    start: "top 85%",
                    once: true
                }
            }
        );


        if (initialOptions.length) {

            gsap.fromTo(
                initialOptions,
                {
                    opacity: 0,
                    y: 25
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .5,
                    stagger: .08,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: ".price-options",
                        start: "top 85%",
                        once: true
                    }
                }
            );

        }

    }


    /* =====================================================
       WHAT'S INCLUDED — HEADING
    ===================================================== */

    const includesHeading =
        document.querySelector(".pricing-includes-heading");

    if (hasGSAP && hasScrollTrigger && includesHeading) {

        gsap.fromTo(
            includesHeading.children,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: .6,
                stagger: .1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: includesHeading,
                    start: "top 85%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       WHAT'S INCLUDED — ITEMS
    ===================================================== */

    const includeItems =
        document.querySelectorAll(
            ".pricing-include-item"
        );

    if (hasGSAP && hasScrollTrigger && includeItems.length) {

        gsap.fromTo(
            includeItems,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: .55,
                stagger: .09,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: ".pricing-includes-grid",
                    start: "top 82%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       PRICING FAQ — HEADING
    ===================================================== */

    const pricingFaqHeading =
        document.querySelector(".pricing-faq-heading");

    if (
        hasGSAP &&
        hasScrollTrigger &&
        pricingFaqHeading
    ) {

        gsap.fromTo(
            pricingFaqHeading.children,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: .6,
                stagger: .1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: pricingFaqHeading,
                    start: "top 85%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       PRICING FAQ — ITEMS
    ===================================================== */

    const pricingFaq =
        document.querySelector(".pricing-faq");

    const pricingFaqItems =
        document.querySelectorAll(
            ".pricing-faq-item"
        );


    if (
        hasGSAP &&
        hasScrollTrigger &&
        pricingFaq &&
        pricingFaqItems.length
    ) {

        gsap.fromTo(
            pricingFaqItems,
            {
                opacity: 0,
                y: 22
            },
            {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .07,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: ".pricing-faq-list",
                    start: "top 84%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       PRICING FAQ ACCORDION
    ===================================================== */

    if (pricingFaq) {

        pricingFaq.addEventListener(
            "click",
            function (e) {

                const question =
                    e.target.closest(
                        ".pricing-faq-question"
                    );

                if (!question) return;


                const item =
                    question.closest(
                        ".pricing-faq-item"
                    );

                if (!item) return;


                const isOpen =
                    item.classList.contains("active");


                /* Close every FAQ */

                pricingFaqItems.forEach(
                    function (faqItem) {

                        faqItem.classList.remove(
                            "active"
                        );


                        const icon =
                            faqItem.querySelector(
                                ".pricing-faq-icon"
                            );


                        if (icon) {
                            icon.textContent = "+";
                        }

                    }
                );


                /* Open selected FAQ */

                if (!isOpen) {

                    item.classList.add("active");


                    const icon =
                        item.querySelector(
                            ".pricing-faq-icon"
                        );


                    if (icon) {
                        icon.textContent = "−";
                    }

                }

            }
        );

    }


    /* =====================================================
       FINAL CTA
    ===================================================== */

    const pricingCta =
        document.querySelector(".pricing-cta");


    if (
        hasGSAP &&
        hasScrollTrigger &&
        pricingCta
    ) {

        const ctaChildren =
            pricingCta.children;


        gsap.fromTo(
            ctaChildren,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: .6,
                stagger: .1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: pricingCta,
                    start: "top 85%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       SMALL HOVER ANIMATION FOR PRICING CARDS
    ===================================================== */

    if (hasGSAP) {

        const hoverCards =
            document.querySelectorAll(
                ".pricing-card, .price-option"
            );


        hoverCards.forEach(function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(card, {
                        y: -3,
                        duration: .2,
                        ease: "power2.out",
                        overwrite: true
                    });

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(card, {
                        y: 0,
                        duration: .2,
                        ease: "power2.out",
                        overwrite: true
                    });

                }
            );

        });

    }


    /* =====================================================
       REFRESH SCROLLTRIGGER AFTER PAGE LOAD
    ===================================================== */

    if (hasGSAP && hasScrollTrigger) {

        window.addEventListener(
            "load",
            function () {

                setTimeout(function () {

                    ScrollTrigger.refresh();

                }, 300);

            }
        );

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    if (
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        if (hasGSAP) {
            gsap.globalTimeline.clear();
        }

        document
            .querySelectorAll(
                ".country-pricing-heading > span, " +
                ".country-pricing-heading > h2, " +
                ".country-pricing-heading > p"
            )
            .forEach(function (element) {

                element.style.opacity = "1";
                element.style.visibility = "visible";
                element.style.transform = "none";

            });

    }

});
const pricingTrialCta = document.querySelector(".pricing-trial-cta");

if (pricingTrialCta && typeof gsap !== "undefined") {

    gsap.set(pricingTrialCta, {
        opacity: 0,
        y: 20
    });

    gsap.to(pricingTrialCta, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",

        scrollTrigger: {
            trigger: pricingTrialCta,
            start: "top 88%",
            once: true
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".premium-contact-form");
    const popup = document.getElementById("contactSuccessPopup");
    const closeBtn = document.getElementById("closeSuccessPopup");
    const okBtn = document.getElementById("successPopupOk");

    if (!form || !popup) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        popup.classList.add("show");

        form.reset();

    });

    function closePopup() {
        popup.classList.remove("show");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }

    if (okBtn) {
        okBtn.addEventListener("click", closePopup);
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const faq = document.querySelector(".contact-faq");

    if (!faq) return;

    faq.addEventListener("click", function (e) {

        const question =
            e.target.closest(".contact-faq-question");

        if (!question) return;

        const item =
            question.closest(".contact-faq-item");

        if (!item) return;

        const isOpen =
            item.classList.contains("active");


        faq.querySelectorAll(".contact-faq-item").forEach(function (faqItem) {

            faqItem.classList.remove("active");

            const icon =
                faqItem.querySelector(".contact-faq-icon");

            if (icon) {
                icon.textContent = "+";
            }

        });


        if (!isOpen) {

            item.classList.add("active");

            const icon =
                item.querySelector(".contact-faq-icon");

            if (icon) {
                icon.textContent = "−";
            }

        }

    });

});
/* =========================================================
   CONTACT PAGE — PREMIUM GSAP ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    /* =====================================================
       HERO
    ===================================================== */

    const heroContent = document.querySelector(".contact-hero-content");
    const heroVisual = document.querySelector(".contact-hero-visual");

    if (heroContent) {

        const eyebrow = heroContent.querySelector(".contact-eyebrow");
        const heading = heroContent.querySelector("h1");
        const paragraph = heroContent.querySelector(":scope > p");
        const buttons = heroContent.querySelector(".contact-hero-buttons");
        const options = heroContent.querySelector(".contact-hero-options");

        const heroItems = [
            eyebrow,
            heading,
            paragraph,
            buttons
        ].filter(Boolean);

        gsap.set(heroItems, {
            opacity: 0,
            y: 28
        });

        if (options) {
            gsap.set(options, {
                opacity: 0,
                y: 22
            });
        }

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        heroTimeline
            .to(eyebrow, {
                opacity: 1,
                y: 0,
                duration: 0.55
            })
            .to(heading, {
                opacity: 1,
                y: 0,
                duration: 0.75
            }, "-=0.30")
            .to(paragraph, {
                opacity: 1,
                y: 0,
                duration: 0.60
            }, "-=0.35")
            .to(buttons, {
                opacity: 1,
                y: 0,
                duration: 0.55
            }, "-=0.30")
            .to(options, {
                opacity: 1,
                y: 0,
                duration: 0.65
            }, "-=0.25");
    }

    /* =====================================================
       HERO IMAGE
    ===================================================== */

    if (heroVisual) {

        gsap.set(heroVisual, {
            opacity: 0,
            x: 45
        });

        gsap.to(heroVisual, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            delay: 0.25,
            ease: "power3.out"
        });

        const heroImage = heroVisual.querySelector("img");

        if (heroImage) {
            gsap.fromTo(
                heroImage,
                {
                    scale: 1.08
                },
                {
                    scale: 1.02,
                    duration: 1.6,
                    delay: 0.2,
                    ease: "power2.out"
                }
            );
        }
    }


    /* =====================================================
       HERO OPTIONS — STAGGER
    ===================================================== */

    const contactOptions = document.querySelectorAll(
        ".contact-hero-options .contact-option"
    );

    if (contactOptions.length) {

        gsap.set(contactOptions, {
            opacity: 0,
            y: 18
        });

        gsap.to(contactOptions, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12,
            delay: 1.15,
            ease: "power3.out"
        });
    }


    /* =====================================================
       FORM SECTION
    ===================================================== */

    const formSection = document.querySelector(".contact-form-section");

    if (formSection) {

        const formContainer = formSection.querySelector(
            ".contact-form-container"
        );

        const formHeader = formSection.querySelector(
            ".contact-form-header"
        );

        const fields = formSection.querySelectorAll(
            ".premium-field"
        );

        const formBottom = formSection.querySelector(
            ".premium-form-bottom"
        );

        if (formContainer) {

            gsap.from(formContainer, {
                scrollTrigger: {
                    trigger: formSection,
                    start: "top 78%",
                    once: true
                },
                opacity: 0,
                y: 55,
                duration: 0.9,
                ease: "power3.out"
            });
        }

        if (formHeader) {

            gsap.from(formHeader.children, {
                scrollTrigger: {
                    trigger: formHeader,
                    start: "top 82%",
                    once: true
                },
                opacity: 0,
                y: 25,
                duration: 0.65,
                stagger: 0.12,
                ease: "power3.out"
            });
        }

        if (fields.length) {

            gsap.from(fields, {
                scrollTrigger: {
                    trigger: ".premium-form-grid",
                    start: "top 82%",
                    once: true
                },
                opacity: 0,
                y: 24,
                duration: 0.55,
                stagger: 0.09,
                ease: "power3.out"
            });
        }

        if (formBottom) {

            gsap.from(formBottom, {
                scrollTrigger: {
                    trigger: formBottom,
                    start: "top 90%",
                    once: true
                },
                opacity: 0,
                y: 20,
                duration: 0.55,
                ease: "power3.out"
            });
        }
    }


    /* =====================================================
       FORM INPUT FOCUS EFFECT
    ===================================================== */

    const inputWrappers = document.querySelectorAll(
        ".premium-input-wrap"
    );

    inputWrappers.forEach(function (wrapper) {

        const icon = wrapper.querySelector(".field-icon");

        wrapper.addEventListener("mouseenter", function () {

            gsap.to(wrapper, {
                y: -2,
                duration: 0.2,
                ease: "power2.out"
            });

            if (icon) {
                gsap.to(icon, {
                    scale: 1.08,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });

        wrapper.addEventListener("mouseleave", function () {

            gsap.to(wrapper, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });

            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
    });


    /* =====================================================
       SUBMIT BUTTON
    ===================================================== */

    const submitButton = document.querySelector(
        ".premium-submit-btn"
    );

    if (submitButton) {

        submitButton.addEventListener("mouseenter", function () {

            gsap.to(submitButton.querySelector("span"), {
                x: 4,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        submitButton.addEventListener("mouseleave", function () {

            gsap.to(submitButton.querySelector("span"), {
                x: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    }


    /* =====================================================
       SUCCESS POPUP
    ===================================================== */

    const popup = document.querySelector(
        ".contact-success-popup"
    );

    const popupBox = document.querySelector(
        ".success-popup-box"
    );

    if (popup && popupBox) {

        const observer = new MutationObserver(function () {

            if (popup.classList.contains("show")) {

                gsap.fromTo(
                    popupBox,
                    {
                        opacity: 0,
                        y: 25,
                        scale: 0.94
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.45,
                        ease: "back.out(1.4)"
                    }
                );
            }
        });

        observer.observe(popup, {
            attributes: true,
            attributeFilter: ["class"]
        });
    }


    /* =====================================================
       CONTACT FAQ
    ===================================================== */

    const faqSection = document.querySelector(".contact-faq");

    if (faqSection) {

        const faqHeading = faqSection.querySelector(
            ".contact-faq-heading"
        );

        const faqItems = faqSection.querySelectorAll(
            ".contact-faq-item"
        );

        if (faqHeading) {

            gsap.from(faqHeading.children, {
                scrollTrigger: {
                    trigger: faqSection,
                    start: "top 78%",
                    once: true
                },
                opacity: 0,
                y: 25,
                duration: 0.65,
                stagger: 0.12,
                ease: "power3.out"
            });
        }

        if (faqItems.length) {

            gsap.from(faqItems, {
                scrollTrigger: {
                    trigger: ".contact-faq-list",
                    start: "top 82%",
                    once: true
                },
                opacity: 0,
                y: 22,
                duration: 0.55,
                stagger: 0.10,
                ease: "power3.out"
            });
        }
    }


    /* =====================================================
       FAQ ICON HOVER
    ===================================================== */

    const faqIcons = document.querySelectorAll(
        ".contact-faq-icon"
    );

    faqIcons.forEach(function (icon) {

        icon.addEventListener("mouseenter", function () {

            gsap.to(icon, {
                scale: 1.08,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        icon.addEventListener("mouseleave", function () {

            gsap.to(icon, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });


    /* =====================================================
       REFRESH SCROLLTRIGGER
    ===================================================== */

    window.addEventListener("load", function () {
        ScrollTrigger.refresh();
    });


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    if (window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {

        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(function (trigger) {
            trigger.kill();
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MODE SWITCH
    ====================================================== */

    const modeButtons = document.querySelectorAll(".payment-mode");
    const panels = document.querySelectorAll(".payment-panel");

    modeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const mode = button.dataset.mode;

            modeButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            panels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            button.classList.add("active");

            const targetPanel = document.querySelector(
                "." + mode + "-panel"
            );

            if (targetPanel) {
                targetPanel.classList.add("active");
            }

            window.scrollTo({
                top: document.querySelector(".payment-options").offsetTop - 100,
                behavior: "smooth"
            });

            if (typeof ScrollTrigger !== "undefined") {
                setTimeout(function () {
                    ScrollTrigger.refresh();
                }, 100);
            }
        });
    });


    /* =====================================================
       SELECTED PLAN FROM URL
       
       Example:
       payment.html?plan=Standard%20Plan&price=%2454
    ====================================================== */

    const params = new URLSearchParams(window.location.search);

    const plan = params.get("plan");
    const price = params.get("price");
    const details = params.get("details");

    const planName = document.getElementById("selectedPlanName");
    const planPrice = document.getElementById("selectedPlanPrice");
    const planDetails = document.getElementById("selectedPlanDetails");

    const summaryPlan = document.getElementById("summaryPlan");
    const summaryPrice = document.getElementById("summaryPrice");

    if (plan) {

        const decodedPlan = decodeURIComponent(plan);

        if (planName) {
            planName.textContent = decodedPlan;
        }

        if (summaryPlan) {
            summaryPlan.textContent = decodedPlan;
        }
    }

    if (price) {

        const decodedPrice = decodeURIComponent(price);

        if (planPrice) {
            planPrice.textContent = decodedPrice;
        }

        if (summaryPrice) {
            summaryPrice.textContent = decodedPrice;
        }
    }

    if (details && planDetails) {
        planDetails.textContent = decodeURIComponent(details);
    }


    /* =====================================================
       POPUP
    ====================================================== */

    const popup = document.getElementById(
        "paymentSuccessPopup"
    );

    const popupClose = document.getElementById(
        "paymentPopupClose"
    );

    const popupOk = document.getElementById(
        "paymentPopupOk"
    );

    const popupTitle = document.getElementById(
        "paymentPopupTitle"
    );

    const popupText = document.getElementById(
        "paymentPopupText"
    );


    function openPopup(title, text) {

        if (popupTitle) {
            popupTitle.textContent = title;
        }

        if (popupText) {
            popupText.textContent = text;
        }

        if (popup) {
            popup.classList.add("show");
        }

        if (typeof gsap !== "undefined") {

            gsap.fromTo(
                ".payment-success-box",
                {
                    opacity: 0,
                    y: 25,
                    scale: .94
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: .45,
                    ease: "back.out(1.4)"
                }
            );
        }
    }


    function closePopup() {

        if (popup) {
            popup.classList.remove("show");
        }
    }


    if (popupClose) {
        popupClose.addEventListener("click", closePopup);
    }

    if (popupOk) {
        popupOk.addEventListener("click", closePopup);
    }
    /* =====================================================
       ENROLL FORM
    ====================================================== */

    const enrollForm = document.getElementById("enrollForm");

    if (enrollForm) {

        enrollForm.addEventListener("submit", function (e) {

            e.preventDefault();

            openPopup(
                "Ready for Secure Payment",
                "Your enrollment details have been received. You can now continue to the secure payment process."
            );
        });
    }


    /* =====================================================
       GSAP ANIMATIONS
    ====================================================== */

    if (typeof gsap !== "undefined") {

        if (typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const heroItems = document.querySelectorAll(
            ".payment-hero-content > *"
        );

        gsap.from(heroItems, {
            opacity: 0,
            y: 25,
            duration: .65,
            stagger: .12,
            ease: "power3.out"
        });


        gsap.from(".payment-options", {
            opacity: 0,
            y: 25,
            duration: .65,
            delay: .35,
            ease: "power3.out"
        });


        if (typeof ScrollTrigger !== "undefined") {

            gsap.from(".payment-card", {
                scrollTrigger: {
                    trigger: ".payment-panel.active",
                    start: "top 80%",
                    once: true
                },

                opacity: 0,
                y: 40,
                duration: .8,
                ease: "power3.out"
            });


            gsap.from(".payment-trust-item", {
                scrollTrigger: {
                    trigger: ".payment-trust",
                    start: "top 85%",
                    once: true
                },

                opacity: 0,
                y: 18,
                duration: .5,
                stagger: .1,
                ease: "power3.out"
            });
        }
    }

});
/* =====================================================
   PLAN SELECTION
===================================================== */

const enrollmentPlans = document.querySelectorAll(
    ".enrollment-plan"
);

const selectedPlanName = document.getElementById(
    "selectedPlanName"
);

const selectedPlanDetails = document.getElementById(
    "selectedPlanDetails"
);

const selectedPlanPrice = document.getElementById(
    "selectedPlanPrice"
);

const summaryPlan = document.getElementById(
    "summaryPlan"
);

const summaryPrice = document.getElementById(
    "summaryPrice"
);

const selectedPlanBox = document.querySelector(
    ".selected-plan"
);


enrollmentPlans.forEach(function (plan) {

    plan.addEventListener("click", function () {

        enrollmentPlans.forEach(function (item) {
            item.classList.remove("active");
        });

        plan.classList.add("active");

        const planName = plan.dataset.plan;
        const planDetails = plan.dataset.details;
        const planPrice = plan.dataset.price;


        if (selectedPlanName) {
            selectedPlanName.textContent = planName;
        }

        if (selectedPlanDetails) {
            selectedPlanDetails.textContent = planDetails;
        }

        if (selectedPlanPrice) {
            selectedPlanPrice.textContent = planPrice;
        }

        if (summaryPlan) {
            summaryPlan.textContent = planName;
        }

        if (summaryPrice) {
            summaryPrice.textContent = planPrice;
        }


        /* Small update animation */

        if (selectedPlanBox) {

            selectedPlanBox.classList.remove("updated");

            void selectedPlanBox.offsetWidth;

            selectedPlanBox.classList.add("updated");
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ==========================================
  // HELPERS
  // ==========================================

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const safeText = (element, value) => {
    if (element) element.textContent = value;
  };

  // Respect reduced-motion accessibility setting
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // ==========================================
  // GSAP (OPTIONAL)
  // ==========================================

  const hasGSAP = typeof window.gsap !== "undefined";

  // ==========================================
  // PLAN DATA
  // ==========================================

  const enrollmentPlans = {
    basic: {
      name: "Basic Plan",
      price: "$25"
    },
    standard: {
      name: "Standard Plan",
      price: "$45"
    },
    premium: {
      name: "Premium Plan",
      price: "$65"
    }
  };

  // ==========================================
  // SELECTED PLAN
  // ==========================================

  const urlParams = new URLSearchParams(window.location.search);

  const urlPlan =
    urlParams.get("plan") ||
    urlParams.get("selectedPlan") ||
    "";

  let selectedPlan =
    enrollmentPlans[urlPlan] ? urlPlan : "";

  const planCards = $$(".plan-card");

  const summaryPlan = $("#summary-plan");
  const summaryPrice = $("#summary-price");

  function updatePlanSummary(planKey) {
    const plan = enrollmentPlans[planKey];

    if (!plan) return;

    selectedPlan = planKey;

    safeText(summaryPlan, plan.name);
    safeText(summaryPrice, plan.price);

    planCards.forEach(card => {
      const cardPlan =
        card.dataset.plan ||
        card.dataset.planId ||
        "";

      card.classList.toggle(
        "selected",
        cardPlan === planKey
      );

      card.classList.toggle(
        "active",
        cardPlan === planKey
      );

      card.setAttribute(
        "aria-pressed",
        cardPlan === planKey ? "true" : "false"
      );
    });
  }

  // Plan cards
  planCards.forEach(card => {
    card.addEventListener("click", () => {
      const planKey =
        card.dataset.plan ||
        card.dataset.planId ||
        "";

      if (enrollmentPlans[planKey]) {
        updatePlanSummary(planKey);
      }
    });
  });

  // Initialize URL-selected plan
  if (selectedPlan) {
    updatePlanSummary(selectedPlan);
  }

  // ==========================================
  // PAYMENT MODE SWITCH
  // ==========================================

  const modeButtons = $$(".payment-mode");
  const modePanels = $$(".payment-panel");

  function switchPaymentMode(mode) {
    if (!mode) return;

    const targetPanel = $(
      `.${mode}-panel`
    );

    if (!targetPanel) {
      console.warn(
        `Payment panel not found: .${mode}-panel`
      );
      return;
    }

    modeButtons.forEach(button => {
      const isActive =
        button.dataset.mode === mode;

      button.classList.toggle(
        "active",
        isActive
      );

      button.setAttribute(
        "aria-pressed",
        isActive ? "true" : "false"
      );
    });

    modePanels.forEach(panel => {
      panel.classList.toggle(
        "active",
        panel === targetPanel
      );
    });

    // Keep switching smooth without hiding content
    if (!reduceMotion) {
      targetPanel.animate(
        [
          { transform: "translateY(6px)" },
          { transform: "translateY(0)" }
        ],
        {
          duration: 280,
          easing: "ease-out"
        }
      );
    }
  }

  modeButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();

      switchPaymentMode(
        button.dataset.mode
      );
    });
  });

  // ==========================================
  // ENROLL BUTTONS
  // ==========================================

  const enrollButtons = $$(
    ".enroll-btn, [data-mode='enroll']"
  );

  enrollButtons.forEach(button => {
    button.addEventListener("click", event => {
      // Avoid interfering with mode buttons
      if (button.classList.contains("payment-mode")) {
        return;
      }

      const target = $(".enroll-panel");

      if (target) {
        switchPaymentMode("enroll");

        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  });

  // ==========================================
  // TRIAL BUTTONS
  // ==========================================

  const trialButtons = $$(
    ".trial-btn, [data-mode='trial']"
  );

  trialButtons.forEach(button => {
    button.addEventListener("click", event => {
      if (button.classList.contains("payment-mode")) {
        return;
      }

      const target = $(".trial-panel");

      if (target) {
        switchPaymentMode("trial");

        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  });

  // ==========================================
  // POPUP
  // ==========================================

  const popup = $(
    "#success-popup, .success-popup, .popup"
  );

  const popupCloseButtons = $$(
    ".popup-close, [data-popup-close]"
  );

  function openPopup() {
    if (!popup) return;

    popup.classList.add("show", "active");
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    if (!popup) return;

    popup.classList.remove("show", "active");
    popup.setAttribute("aria-hidden", "true");
  }

  popupCloseButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      closePopup();
    });
  });

  if (popup) {
    popup.addEventListener("click", event => {
      if (event.target === popup) {
        closePopup();
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  // ==========================================
  // FORM SUBMISSIONS
  // ==========================================

  const trialForm = $(
    "#trial-form, .trial-form"
  );

  const enrollForm = $(
    "#enroll-form, .enroll-form"
  );

  function handleFormSubmit(form, event) {
    if (!form) return;

    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // UI confirmation only.
    // Connect your real backend/payment gateway separately.
    openPopup();
  }

  if (trialForm) {
    trialForm.addEventListener("submit", event => {
      handleFormSubmit(trialForm, event);
    });
  }

  if (enrollForm) {
    enrollForm.addEventListener("submit", event => {
      handleFormSubmit(enrollForm, event);
    });
  }

  // ==========================================
  // SAFE ANIMATIONS
  // ==========================================

  // Important:
  // We do NOT set opacity: 0 or visibility: hidden.
  // If GSAP is unavailable, content stays visible.

  if (!reduceMotion && hasGSAP) {
    const gsap = window.gsap;

    // Animate only elements that are already visible.
    const animateIfVisible = (
      selector,
      animation = {}
    ) => {
      const elements = $$(selector).filter(element => {
        const style = window.getComputedStyle(element);

        return (
          style.display !== "none" &&
          style.visibility !== "hidden"
        );
      });

      if (!elements.length) return;

      gsap.from(elements, {
        duration: 0.65,
        y: 12,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform",
        ...animation
      });
    };

    // Small, gentle entrance animations
    animateIfVisible(
      ".payment-hero, .payment-header"
    );

    animateIfVisible(
      ".payment-option, .payment-method"
    );

    animateIfVisible(
      ".plan-card"
    );

    animateIfVisible(
      ".payment-field, .form-group"
    );

    animateIfVisible(
      ".payment-trust, .trust-badge"
    );

    // Avoid animating entire panels from hidden states.
    // Only animate the currently active panel's movement.
    const activePanel = $(".payment-panel.active");

    if (activePanel) {
      gsap.from(activePanel, {
        duration: 0.4,
        y: 8,
        ease: "power1.out",
        clearProps: "transform"
      });
    }
  }

  // ==========================================
  // BUTTON MICRO-INTERACTION
  // ==========================================

  const buttons = $$(
    "button, .btn, .payment-btn"
  );

  buttons.forEach(button => {
    button.addEventListener("pointerenter", () => {
      if (
        reduceMotion ||
        button.disabled
      ) return;

      button.style.transition =
        "transform 180ms ease";

      button.style.transform =
        "translateY(-1px)";
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });

  // ==========================================
  // INITIAL MODE
  // ==========================================

  const initiallyActiveButton = $(
    ".payment-mode.active"
  );

  if (initiallyActiveButton) {
    switchPaymentMode(
      initiallyActiveButton.dataset.mode
    );
  }

  console.log("Payment page JS initialized.");
});

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // ==========================================
  // URL PLAN DETAILS
  // ==========================================

  const params = new URLSearchParams(window.location.search);

  const urlPlan = params.get("plan");
  const urlPrice = params.get("price");
  const urlDetails = params.get("details");

  if (urlPlan && $("#selectedPlanName")) {
    $("#selectedPlanName").textContent = urlPlan;
  }

  if (urlPrice && $("#selectedPlanPrice")) {
    $("#selectedPlanPrice").textContent = urlPrice;
  }

  if (urlDetails && $("#selectedPlanDetails")) {
    $("#selectedPlanDetails").textContent = urlDetails;
  }

  if (urlPlan && $("#summaryPlan")) {
    $("#summaryPlan").textContent = urlPlan;
  }

  if (urlPrice && $("#summaryPrice")) {
    $("#summaryPrice").textContent = urlPrice;
  }

  // ==========================================
  // PLAN SELECTION
  // ==========================================

  $$(".enrollment-plan").forEach(plan => {
    plan.addEventListener("click", function () {
      $$(".enrollment-plan").forEach(item =>
        item.classList.remove("active")
      );

      plan.classList.add("active");

      const name = plan.dataset.plan || "";
      const price = plan.dataset.price || "";
      const details = plan.dataset.details || "";

      if ($("#selectedPlanName")) {
        $("#selectedPlanName").textContent = name;
      }

      if ($("#selectedPlanPrice")) {
        $("#selectedPlanPrice").textContent = price;
      }

      if ($("#selectedPlanDetails")) {
        $("#selectedPlanDetails").textContent = details;
      }

      if ($("#summaryPlan")) {
        $("#summaryPlan").textContent = name;
      }

      if ($("#summaryPrice")) {
        $("#summaryPrice").textContent = price;
      }
    });
  });

  // ==========================================
  // PAYMENT MODE TABS
  // ==========================================

  const modeButtons = $$(".payment-mode");
  const modePanels = $$(".payment-panel");

  modeButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const mode = button.dataset.mode;
      const target = $(`.${mode}-panel`);

      if (!target) return;

      modeButtons.forEach(item => {
        item.classList.toggle("active", item === button);
      });

      modePanels.forEach(panel => {
        panel.classList.toggle("active", panel === target);
      });

      if (!reduceMotion) {
        target.animate(
          [
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 350,
            easing: "ease-out"
          }
        );
      }
    });
  });

  // ==========================================
  // POPUP FUNCTIONS
  // ==========================================

  const popup = $("#paymentSuccessPopup");

  function openPopup(title, message) {
    if ($("#paymentPopupTitle")) {
      $("#paymentPopupTitle").textContent = title;
    }

    if ($("#paymentPopupText")) {
      $("#paymentPopupText").textContent = message;
    }

    if (popup) {
      popup.classList.add("show");
      popup.setAttribute("aria-hidden", "false");
    }
  }

  function closePopup() {
    if (!popup) return;

    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
  }

  $("#paymentPopupClose")?.addEventListener("click", closePopup);
  $("#paymentPopupOk")?.addEventListener("click", closePopup);
  // ==========================================
// TRIAL FORM VALIDATION
// ==========================================

const trialForm = document.getElementById("trialForm");

if (trialForm) {
  // JS khud validation handle karegi
  trialForm.noValidate = true;

  trialForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = trialForm.querySelector('input[type="text"]');
    const emailInput = trialForm.querySelector('input[type="email"]');
    const phoneInput = trialForm.querySelector('input[type="tel"]');

    // Pehle name check hoga
    if (!nameInput.value.trim()) {
      nameInput.setCustomValidity("Please enter your full name.");
      nameInput.reportValidity();
      nameInput.focus();
      nameInput.setCustomValidity("");
      return;
    }

    // Email aur phone bhi required hain
    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity("Please enter your email address.");
      emailInput.reportValidity();
      emailInput.focus();
      emailInput.setCustomValidity("");
      return;
    }

    if (!emailInput.validity.valid) {
      emailInput.reportValidity();
      emailInput.focus();
      return;
    }

    if (!phoneInput.value.trim()) {
      phoneInput.setCustomValidity("Please enter your phone number.");
      phoneInput.reportValidity();
      phoneInput.focus();
      phoneInput.setCustomValidity("");
      return;
    }

    // Baqi required fields bhi check karo
    if (!trialForm.checkValidity()) {
      trialForm.reportValidity();
      return;
    }

    // Sab fields valid hon tab popup
    openPopup(
      "Trial Request Submitted!",
      "Thank you! Our team will contact you shortly to confirm your free trial class."
    );

    trialForm.reset();
  });
}

  // ==========================================
  // CHECKOUT ELEMENTS
  // HTML MUST ALREADY EXIST
  // ==========================================

  const enrollForm = $("#enrollForm");
  const checkout = $("#academyCheckout");
  const paymentForm = $("#academyPaymentForm");

  // ==========================================
  // ENROLL FORM
  // ==========================================

  if (enrollForm && checkout) {
    enrollForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!enrollForm.checkValidity()) {
        enrollForm.reportValidity();
        return;
      }

      const activePlan = $(".enrollment-plan.active");

      const name =
        activePlan?.dataset.plan ||
        $("#selectedPlanName")?.textContent ||
        "Selected Plan";

      const details =
        activePlan?.dataset.details ||
        $("#selectedPlanDetails")?.textContent ||
        "";

      const price =
        activePlan?.dataset.price ||
        $("#selectedPlanPrice")?.textContent ||
        "";

      $("#academyPlanName").textContent = name;
      $("#academyPlanDetails").textContent = details;
      $("#academyPlanPrice").textContent = price;

      checkout.hidden = false;

      if (!reduceMotion) {
        $(".academy-checkout-card", checkout)?.animate(
          [
            {
              opacity: 0,
              transform: "translateY(30px)"
            },
            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],
          {
            duration: 550,
            easing: "ease-out"
          }
        );
      }

      checkout.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  }

  // ==========================================
  // CARD NUMBER FORMATTING
  // No fixed card number
  // ==========================================

  const cardNumber = $("#academyCardNumber");
  const expiry = $("#academyExpiry");
  const cvv = $("#academyCvv");

  if (cardNumber) {
    cardNumber.addEventListener("input", function () {
      const digits = this.value
        .replace(/\D/g, "")
        .slice(0, 19);

      this.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    });
  }

  if (expiry) {
    expiry.addEventListener("input", function () {
      let digits = this.value
        .replace(/\D/g, "")
        .slice(0, 4);

      if (digits.length > 2) {
        digits =
          digits.slice(0, 2) +
          "/" +
          digits.slice(2);
      }

      this.value = digits;
    });
  }

  if (cvv) {
    cvv.addEventListener("input", function () {
      this.value = this.value
        .replace(/\D/g, "")
        .slice(0, 4);
    });
  }

  // ==========================================
  // CHECKOUT SUBMIT
  // Preview only — no real payment
  // ==========================================

  if (paymentForm) {
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = $("#academyCardName")?.value.trim() || "";
      const number = cardNumber?.value.replace(/\D/g, "") || "";
      const exp = expiry?.value.trim() || "";
      const code = cvv?.value.trim() || "";

      if (!name) {
        $("#academyCardName")?.focus();
        return;
      }

      if (number.length < 12 || number.length > 19) {
        cardNumber.setCustomValidity(
          "Card number must be of 12 to 19 digits."
        );
        cardNumber.reportValidity();
        cardNumber.setCustomValidity("");
        return;
      }

      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) {
        expiry.setCustomValidity("Enter expiry MM/YY in this format");
        expiry.reportValidity();
        expiry.setCustomValidity("");
        return;
      }

      if (!/^\d{3,4}$/.test(code)) {
        cvv.setCustomValidity("Security code must br of 3 or 4 digits");
        cvv.reportValidity();
        cvv.setCustomValidity("");
        return;
      }

      const payButton = $("#academyPayButton");
      const payText = $("#academyPayText");

      if (payButton) payButton.disabled = true;
      if (payText) payText.textContent = "Processing…";

      // Front-end preview only.
      // No card data is sent or charged.

      setTimeout(function () {
        paymentForm.hidden = true;

        const result = $("#academyPaymentResult");

        if (result) {
          result.hidden = false;

          result.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "center"
          });
        }

        const reference = $("#academyReference");

        if (reference) {
          reference.textContent =
            "QA-" +
            Math.floor(100000 + Math.random() * 900000);
        }
      }, 1200);
    });
  }

  // ==========================================
  // FINISH BUTTON
  // ==========================================

  $("#academyFinishButton")?.addEventListener("click", function () {
    openPopup(
      "Checkout Complete",
    );
  });

  console.log("Quran Academy JS loaded.");
});
// Back to Enrollment Form
const backToEnrollment = document.getElementById("backToEnrollment");

if (backToEnrollment) {
  backToEnrollment.addEventListener("click", () => {
    const checkout = document.getElementById("academyCheckout");
    const enrollForm = document.getElementById("enrollForm");

    if (checkout) checkout.style.display = "none";
    if (enrollForm) {
      enrollForm.style.display = "block";
      enrollForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}