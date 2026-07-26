// ==========================
// PORTFOLIO SCRIPT
// ==========================

// Current Year (if you later add <span id="year"></span>)
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Navbar Background on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.background = "#07111f";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    }
});

// Reveal Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Smooth Active Nav Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Project Card Hover Animation
document.querySelectorAll(".project").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Typing Effect
const typingElement = document.querySelector(".hero-left h2");

if(typingElement){

const words=[

"Aspiring Data Analyst",

"Power BI Developer",

"SQL Enthusiast",

"Python Learner"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typingElement.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingElement.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

charIndex=0;

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

}

// Fade-in CSS Classes
const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(50px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#38bdf8 !important;

}

`;

document.head.appendChild(style);