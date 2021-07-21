//This injects content into the header
//should change to build a header and class all the one time

const headerContent = `
    <nav class="navbar">
        <a href="./index.html" class="nav-logo">Ben Hamel Portfolio</a>               
        <!-- ul.nav-menu>.nav-item*3>a.nav-link shorcut for html below-->
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="./about.html" class="nav-link">About</a>   
            </li>
            <li class="nav-item">
                <a href="./project-one.html" class="nav-link">Project 1</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Project 2</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Project 3</a>
            </li>
        </ul>
        
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>   
    </nav>
`;

//inject header element
const newHeader = document.createElement("header");
newHeader.classList.add("siteHeader");
newHeader.innerHTML = headerContent;
document.body.prepend(newHeader);

// header hambuger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Footer
const footerContent = `
Ben Hamel 2021
`;

//footer Injector
const newFooter = document.createElement("footer");
newFooter.classList.add("siteFooter");
newFooter.innerHTML = footerContent;
document.body.append(newFooter);
