document.addEventListener("DOMContentLoaded", function () {

    fetch("../pages/navbar.html")
        .then(res => res.text())
        .then(data => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                navbar.innerHTML = data;
            }
        });

    fetch("../pages/footer.html")
        .then(res => res.text())
        .then(data => {
            const footer = document.getElementById("footer");
            if (footer) {
                footer.innerHTML = data;
            }
        });

    const search = document.getElementById("searchService");

    if (search) {

        search.addEventListener("keyup", function () {

            let filter = search.value.toLowerCase();
            let services = document.querySelectorAll(".service-card");

            services.forEach(function (card) {

                if (card.innerText.toLowerCase().includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if (status === "success") {

        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been successfully sent.",
            confirmButtonColor: "#39a7dc"
        });

    }

    if (status === "error") {

        Swal.fire({
            icon: "error",
            title: "Message Failed",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#39a7dc"
        });

    }

    if (status) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    const swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        }
    });

});