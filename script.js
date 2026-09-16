const lightbox = document.getElementById("image-lightbox");

if (lightbox) {
    const lightboxImage = lightbox.querySelector(".image-lightbox-image");
    const lightboxCaption = lightbox.querySelector(".image-lightbox-caption");
    const lightboxClose = lightbox.querySelector(".image-lightbox-close");

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lightbox-open");
    };

    document.querySelectorAll("img").forEach((image) => {
        if (image.closest(".image-lightbox")) {
            return;
        }

        image.classList.add("image-expandable");

        image.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt;

            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("lightbox-open");
            lightboxClose.focus();
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });
}
