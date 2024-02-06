let home = document.getElementById("home");
let shop = document.getElementById("shop");
let blog = document.getElementById("blog");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

let homeP = document.getElementById("home-page");
let shopP = document.getElementById("shop-page");
let women = document.getElementById("shop-women");
let blogP = document.getElementById("blog-page");
let aboutP = document.getElementById("about-page");
let contactP = document.getElementById("contact-page");

// ------------show-card-id-and-class-----------
let card = document.querySelector(".show-card");
let wsw = document.getElementById("buy");
let back = document.getElementById("back");

// -----------menu-btn-------------------
let menuBtn = document.getElementById("menu-btn");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle");
});

function Home() {
  home.style.color = "#2fa399";
  shop.style.color = "#222";
  blog.style.color = "#222";
  about.style.color = "#222";
  contact.style.color = "#222";
  aboutP.style.display = "block";
  homeP.style.display = "block";
  shopP.style.display = "block";
  women.style.display = "block";
  blogP.style.display = "block";
  contactP.style.display = "block";
}

function Shop() {
  home.style.color = "#222";
  shop.style.color = "#2fa399";
  blog.style.color = "#222";
  about.style.color = "#222";
  homeP.style.display = "block";
  shopP.style.display = "block";
  women.style.display = "block";
  blogP.style.display = "block";
  aboutP.style.display = "none";
  contactP.style.display = "none";
}

function Blog() {
  home.style.color = "#222";
  shop.style.color = "#222";
  blog.style.color = "#2fa399";
  about.style.color = "#222";
  contact.style.color = "#222";
  aboutP.style.display = "none";
  aboutP.style.display = "none";
  homeP.style.display = "block";
  shopP.style.display = "block";
  women.style.display = "block";
  blogP.style.display = "block";
  contactP.style.display = "none";
}

function About() {
  home.style.color = "#222";
  shop.style.color = "#222";
  blog.style.color = "#222";
  about.style.color = "#2ea399";
  contact.style.color = "#222";
  homeP.style.display = "none";
  shopP.style.display = "none";
  blogP.style.display = "none";
  contactP.style.display = "none";
  aboutP.style.display = "block";
  women.style.display = "none";
}

function Contact() {
  home.style.color = "#222";
  shop.style.color = "#222";
  blog.style.color = "#222";
  about.style.color = "#222";
  contact.style.color = "#2fa399";
  aboutP.style.display = "none";
  contactP.style.display = "block";
  homeP.style.display = "none";
  shopP.style.display = "none";
  women.style.display = "none";
  blogP.style.display = "none";
  contactP.style.display = "block";
}

function show(img) {
  let newimg = document.getElementById("newimg");
  console.log(newimg);
  newimg.src = img.src;
  card.style.display = "flex";
  homeP.style.display = "none";
  shopP.style.display = "none";
  women.style.display = "none";
  blogP.style.display = "none";
  aboutP.style.display = "none";
  contactP.style.display = "none";
}

function add() {
  alert("Add To Cart");
  location.reload();
}
