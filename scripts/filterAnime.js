document.addEventListener("DOMContentLoaded", function () {
    // Your code accessing localStorage
});

function filterAnime() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let animeItems = document.getElementsByClassName('anime-type');
    
    for (let i = 0; i < animeItems.length; i++) {
        let animeTitle = animeItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (animeTitle.includes(input)) {
            animeItems[i].style.display = "";
        } else {
            animeItems[i].style.display = "none";
        }
    }
}