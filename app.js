const mainImage = document.querySelector(".frame img");

const images = [
    "images/Nimetu1.png",
    "images/pexels-peter-olexa-2214257-3875821.jpg"
];

let currentImage = 0;

mainImage.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    mainImage.src = images[currentImage];

});
