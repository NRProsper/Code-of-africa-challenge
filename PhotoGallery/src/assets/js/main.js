import images from "./store.js"
/*
I tried to create a custom  store.json, but it failed me due to CORS browser issues. And I was not going to use express or django,
that would be making this small project complex 🤣😌😌
 */


document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".cards");
    images.forEach(image => {
        cardsContainer.innerHTML += `
            <div class="card">
            <img src="${image.url}" alt="Fox Image">
            <div class="text-content">
                <div class="top">
                    <h1>${image.title}</h1>
                    <p class="location">${image.location}</p>
                </div>
                <div class="bottom">
                    <a href="#" class="read-more flex">
                        <span>Read More</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })

    //Remove actions on all anchor tags to omit unnecessary page navigations are reload
    document.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
        })
    })

    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const close = document.getElementById("close-modal");
    const modalImage = document.getElementById("modal-img");
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            modalImage.src = images[index].url;
            modalImage.alt = images[index].title;
            modal.classList.add("show")
            modal.classList.remove('hidden');
        })

        close.addEventListener("click", () => {
            modal.classList.remove("show")
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("show")
                modal.classList.add("hidden");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modal.classList.remove("show")
                modal.classList.add("hidden");
            }
        })

    })



})


