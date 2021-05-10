class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
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
        </header>
        `
    }
}

customElements.define('page-header', MyHeader) 

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer> Ben Hamel 2021 </footer>`
    }
}

customElements.define('page-footer', MyFooter) 