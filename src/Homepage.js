const content = document.body;
var currentPage = "Home";

function loadHeader() {
    const header = document.createElement('div');
    header.id = 'banner';
    header.innerHTML = `
            <h1>
                Pizzeria dai Muscas
            </h1>
            <div id="other-sites">
                <div>Home</div>
                <div>Menu</div>
                <div>Contact</div>
            </div>
        `;
    content.appendChild(header);
    const tabs = document.querySelectorAll('#banner > div');
    for (const tab of tabs) {
        tab.addEventListener("click", (e) => switchTab(e.target.innerText))

    }
 }

function switchTab(Site) {
    if (Site === currentPage) {
        return
    }
    loadSites(Site);
}


function loadSites(Site) {
    content.innerHTML = "";
    currentPage = Site;
    switch (Site) {
        case "Home":
            loadHomePage();
            break;
        case "Menu":
            loadMenuPage ()
            break;
        case "Contact":
            loadContactPage ()
            break;
    }
}

function loadHomePage () {
    loadHeader();
    loadAbout(welcomingPage);
    loadFooter();

}

function loadMenuPage () {
    loadHeader();
    loadAbout(menuItems);
    loadFooter();
}

function loadContactPage () {
    loadHeader();
    loadAbout(contactForm);
    loadFooter();
}

function loadAbout(contentInside) {

    const about = document.createElement('div');
    about.id = "more-content";
    about.innerHTML = contentInside;
    content.appendChild(about);
}


function loadFooter() {

    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.innerText = " This is a Fake website ok"
    content.appendChild(footer);
}

const welcomingPage =
    `<div> <span> Hello and welcome to the best Pizzeria in Strasswalchen!</span>
           <br> <br> You are basically an idiot if you prefer to waste your precious money at Amici's instead of trying our delicious pizza!</div>`;

const menuItem = `
    <div class="menu-item"> 
      <div>Pizza 1 </div>
      <img src="icon-pizza.png" alt="pizza-icon">
      <div>9.99€</div>
    </div>
`

let menuItems = '<div class="menu-container">';
for (let i = 0; i < 12; i++) {
    menuItems += menuItem;
}

menuItems += '</div>'

const contactForm = `
    <div class="contact">
      <h1>Contact us!</h1>
      <div><img src="icon-call.png" alt="phone-icon">
        <div>0664 000 333 0303</div>
      </div>
      <div>
        <img src="icon-home.png" alt="home-icon">
        <div>Fake adress 492</div>
      </div>
      <div><img src="icon-mail.png" alt="mail-icon">
        <div>totally.real@email.com</div>
      </div>
      <img src="maps.jpg" alt="map">
    </div>`


export default loadHomePage;