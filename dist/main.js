(()=>{"use strict";const n=document.body;var i="Home";function e(){const c=document.createElement("div");c.id="banner",c.innerHTML='\n            <h1>\n                Pizzeria dai Muscas\n            </h1>\n            <div id="other-sites">\n                <div>Home</div>\n                <div>Menu</div>\n                <div>Contact</div>\n            </div>\n        ',n.appendChild(c);const r=document.querySelectorAll("#banner > div");for(const c of r)c.addEventListener("click",(c=>{var r;(r=c.target.innerText)!==i&&function(c){switch(n.innerHTML="",i=c,c){case"Home":t();break;case"Menu":e(),a(d),o();break;case"Contact":e(),a(s),o()}}(r)}))}function t(){e(),a(c),o()}function a(i){const e=document.createElement("div");e.id="more-content",e.innerHTML=i,n.appendChild(e)}function o(){const i=document.createElement("div");i.classList.add("footer"),i.innerText=" This is a Fake website ok",n.appendChild(i)}const c="<div> <span> Hello and welcome to the best Pizzeria in Strasswalchen!</span>\n           <br> <br> You are basically an idiot if you prefer to waste your precious money at Amici's instead of trying our delicious pizza!</div>";let d='<div class="menu-container">';for(let n=0;n<12;n++)d+='\n    <div class="menu-item"> \n      <div>Pizza 1 </div>\n      <img src="icon-pizza.png" alt="pizza-icon">\n      <div>9.99€</div>\n    </div>\n';d+="</div>";const s='\n    <div class="contact">\n      <h1>Contact us!</h1>\n      <div><img src="icon-call.png" alt="phone-icon">\n        <div>0664 000 333 0303</div>\n      </div>\n      <div>\n        <img src="icon-home.png" alt="home-icon">\n        <div>Fake adress 492</div>\n      </div>\n      <div><img src="icon-mail.png" alt="mail-icon">\n        <div>totally.real@email.com</div>\n      </div>\n      <img src="maps.jpg" alt="map">\n    </div>';t()})();