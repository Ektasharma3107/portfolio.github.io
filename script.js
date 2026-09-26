// ========================================
// DOM Loaded
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // HAMBURGER MENU
    // ========================================

    const navbar = document.querySelector(".dropdown");

    window.hamburg = function () {
        if (navbar) {
            navbar.style.transform = "translateY(0)";
        }
    };

    window.cancel = function () {
        if (navbar) {
            navbar.style.transform = "translateY(-500px)";
        }
    };


    // ========================================
    // TYPEWRITER EFFECT
    // ========================================

    const texts = [
        "FRONTEND DEVELOPER",
        "PROFESSIONAL CODER",
        "UI DESIGNER"
    ];

    const textElement = document.querySelector(".typewriter-text");

    let textIndex = 0;
    let characterIndex = 0;

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const waitTime = 1000;


    function typeWriter() {

        if (!textElement) {
            console.log("typewriter-text class nahi mili");
            return;
        }

        if (characterIndex < texts[textIndex].length) {

            textElement.textContent +=
                texts[textIndex].charAt(characterIndex);

            characterIndex++;

            setTimeout(typeWriter, typingSpeed);

        } else {

            setTimeout(eraseText, waitTime);
        }
    }


    function eraseText() {

        if (!textElement) return;

        if (textElement.textContent.length > 0) {

            textElement.textContent =
                textElement.textContent.slice(0, -1);

            setTimeout(eraseText, deletingSpeed);

        } else {

            textIndex =
                (textIndex + 1) % texts.length;

            characterIndex = 0;

            setTimeout(typeWriter, 500);
        }
    }


    // Start Typewriter
    typeWriter();


    // ========================================
    // SCROLL BUTTON
    // ========================================

    const scrollBtn = document.querySelector(".scroll-btn");

    if (scrollBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                scrollBtn.classList.add("active");
            } else {
                scrollBtn.classList.remove("active");
            }

        });

    }


    // ========================================
    // HEADER
    // ========================================

    const header = document.getElementById("header");

    if (header) {

        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                header.innerHTML = data;
            })
            .catch(error => {
                console.log("Header Error:", error);
            });
    }


    // ========================================
    // FOOTER
    // ========================================

    const footer = document.getElementById("footer");

    if (footer) {

        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            })
            .catch(error => {
                console.log("Footer Error:", error);
            });
    }

});