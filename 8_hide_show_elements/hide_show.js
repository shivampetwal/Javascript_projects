const button = document.getElementById("btn");
const image = document.getElementById("myImg");
const audio = document.getElementById("aud");

button.addEventListener("click", function () {
    if (image.style.visibility === "hidden") {

        image.style.visibility = "visible";
        btn.textContent = "Hide";

        audio.play();
    } 
    else {
        // Hide the image
        image.style.visibility = "hidden";
        btn.textContent = "Show";

        audio.pause();
    }
});
