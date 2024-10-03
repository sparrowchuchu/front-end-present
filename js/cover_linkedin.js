
document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});