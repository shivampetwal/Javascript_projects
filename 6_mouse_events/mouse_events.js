const div = document.getElementById("a");

div.addEventListener('mouseover', function () {
    div.textContent = "🤨";
});
div.addEventListener('mouseout', function () {
    div.textContent = "😴";
});
