console.log("Zodiac loaded");

const zodiac = [
{ name:"Aries", type:"Fire Sign", image:"https://placehold.co/300x300", rulingPlanet:"Mars", element:"fire", funFact:"Aries is the first sign of the zodiac and represents new beginnings." },
{ name:"Taurus", type:"Earth Sign", image:"https://placehold.co/300x300", rulingPlanet:"Venus", element:"earth", funFact:"Taurus is ruled by Venus, the planet of love and beauty." },
{ name:"Gemini", type:"Air Sign", image:"https://placehold.co/300x300", rulingPlanet:"Mercury", element:"air", funFact:"Gemini is represented by twins, symbolizing dual personality traits." },
{ name:"Cancer", type:"Water Sign", image:"https://placehold.co/300x300", rulingPlanet:"Moon", element:"water", funFact:"Cancer is ruled by the Moon, which influences emotions." },
{ name:"Leo", type:"Fire Sign", image:"https://placehold.co/300x300", rulingPlanet:"Sun", element:"fire", funFact:"Leo represents leadership and strength." },
{ name:"Virgo", type:"Earth Sign", image:"https://placehold.co/300x300", rulingPlanet:"Mercury", element:"earth", funFact:"Virgo is detail-oriented and analytical." },
{ name:"Libra", type:"Air Sign", image:"https://placehold.co/300x300", rulingPlanet:"Venus", element:"air", funFact:"Libra represents balance and fairness." },
{ name:"Scorpio", type:"Water Sign", image:"https://placehold.co/300x300", rulingPlanet:"Pluto", element:"water", funFact:"Scorpio is intense and mysterious." },
{ name:"Sagittarius", type:"Fire Sign", image:"https://placehold.co/300x300", rulingPlanet:"Jupiter", element:"fire", funFact:"Sagittarius loves adventure." },
{ name:"Capricorn", type:"Earth Sign", image:"https://placehold.co/300x300", rulingPlanet:"Saturn", element:"earth", funFact:"Capricorn is disciplined and ambitious." },
{ name:"Aquarius", type:"Air Sign", image:"https://placehold.co/300x300", rulingPlanet:"Uranus", element:"air", funFact:"Aquarius is innovative and independent." },
{ name:"Pisces", type:"Water Sign", image:"https://placehold.co/300x300", rulingPlanet:"Neptune", element:"water", funFact:"Pisces is imaginative and dreamy." }
];

const container = document.getElementById("card-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalType = document.getElementById("modalType");
const modalPlanet = document.getElementById("modalPlanet");
const modalDetail = document.getElementById("modalDetail");
const closeModal = document.getElementById("closeModal");

function render(list) {
container.innerHTML = "";

list.forEach(item => {
let card = document.createElement("div");
card.classList.add("col-md-3");

card.innerHTML = `
<div class="card-box ${item.element}">
<h4>${item.name}</h4>
<img src="${item.image}">
<p>${item.type}</p>
<button class="btn filter-btn more-btn">More Info</button>
</div>
`;

container.appendChild(card);

card.querySelector(".more-btn").addEventListener("click", () => {
modalTitle.textContent = item.name;
modalImage.src = item.image;
modalType.textContent = item.type;
modalPlanet.textContent = "Ruling Planet: " + item.rulingPlanet;
modalDetail.textContent = item.funFact;
modal.classList.remove("hidden");
});
});
}

closeModal.addEventListener("click", () => {
modal.classList.add("hidden");
});

document.querySelectorAll(".filter-btn").forEach(btn => {
btn.addEventListener("click", () => {
let selected = btn.dataset.type;

if (selected === "all") {
render(zodiac);
} else {
render(zodiac.filter(item => item.rulingPlanet === selected));
}
});
});

render(zodiac);