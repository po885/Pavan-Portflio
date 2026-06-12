// ===============================
// Smooth Scrolling Navigation
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});

// ===============================
// Active Navigation on Scroll
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Fade-in Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}