/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = new Array(
    document.getElementById("section1"),
    document.getElementById("section2"),
    document.getElementById("section3"),
    document.getElementById("section4"));
const navBar = document.getElementById("navbar__list");
var currentActive = sections[0];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addSectionToNavBar()

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function(event) {
    event.preventDefault()
    for (const section of sections) {
        if (currentActive == section) continue;
        if (isInViewport(section)) {
            currentActive.classList.remove("your-active-class");
            section.classList.add("your-active-class");
            currentActive = section;
        }
    }
})

// Scroll to anchor ID using scrollTO event
const addSectionToNavBar = () => {
    let fragment = document.createDocumentFragment();
    for (const section of sections) {
        let li = document.createElement("li");
        li.innerText = section.dataset.nav;
        fragment.appendChild(li);
        li.addEventListener('click', function() {section.scrollIntoView({ behavior: "smooth" })})
    }
    navBar.appendChild(fragment);
}
