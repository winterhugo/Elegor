
// Nav-Bar:

function menuBurger() {
    let element = document.getElementById("nav-burger");
    let navCollapsable = document.getElementById("nav-collapsible")

    if (!element.classList.contains("nav-icon-active")) {
        // toggles the menu burger
        element.classList.add("nav-icon-active");
        // Remover and adder are different classes because then there is an animation for each
        navCollapsable.classList.remove("nav_coll-remover");
        navCollapsable.classList.add("nav_coll-adder");
    }
    else {
        // untoggles the menu burger
        element.classList.remove("nav-icon-active");
        navCollapsable.classList.remove("nav_coll-adder");
        navCollapsable.classList.add("nav_coll-remover");
    }
}

function searchBar() {
    let btnIcon = document.getElementById("btn-search");
    let input = document.getElementById("input-search");

    if (!btnIcon.classList.contains("nav-icon-active")) {

        btnIcon.classList.add("nav-icon-active");

        input.classList.add("input-search-active");
        input.classList.remove("input-search-inactive");
    }
    else {
        btnIcon.classList.remove("nav-icon-active");
        input.classList.add("input-search-inactive");
        input.classList.remove("input-search-active");
    }
}
