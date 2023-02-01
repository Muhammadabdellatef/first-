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
const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// lope over sections
sections.forEach(section => {
    //section id and section data-nav attribute
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    //add href, title, and class attributes for links .
    listLink.href = listLink,setAttribute(id, sectionId);
    listLink.textContent = sectionTitle;
    listLink.classList.add("menu__link");
    // add smooth scroll to anchor
    listLink.addEventListener("click", event => {
        event.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);
});

list.appendChild(fragment);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
const links = document.querySelectorAll("a.menu__link");
const callback = (entries) => {
    let section = entries[0];
    section.target.classList.remove("your-active-class");
    if (section.isIntersecting) {
        section.target.classList.add("your-active-class");
        links.forEach(link => {
            if (link.textContent === section.target.dataset.nav) {
                link.classList.add("active-link")

            } else {
                link.classList.remove("active-link")

            }
        })
    } else {
        section.target.classList.remove("your-active-class");
    }
}
const Options = {
    root: null,
    rootMargin: '0px',
    threshold: .3

};
const observe = new IntersectionObserver(callback, Options);

// Build menu 

// Scroll to section on link click
window.addEventListener("scroll", event => {

    sections.forEach(section => {
        observer.observe(section);
    })
})

// Set sections as active


