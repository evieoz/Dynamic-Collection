console.log("Zodiac loaded");

const zodiac = [
  {
    name: "Aries",
    type: "Fire Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Mars",
    element: "fire",
    funFact:
      "Aries is the first sign of the zodiac and represents new beginnings.",
  },

  {
    name: "Taurus",
    type: "Earth Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Venus",
    element: "earth",
    funFact: "Taurus is ruled by Venus, the planet of love and beauty.",
  },

  {
    name: "Gemini",
    type: "Air Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Mercury",
    element: "air",
    funFact:
      "Gemini is represented by twins, symbolizing dual personality traits.",
  },

  {
    name: "Cancer",
    type: "Water Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Moon",
    element: "water",
    funFact:
      "Cancer is ruled by the Moon, which influences emotions and moods.",
  },

  {
    name: "Leo",
    type: "Fire Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Sun",
    element: "fire",
    funFact:
      "Leo is symbolized by the lion and represents leadership and strength.",
  },

  {
    name: "Virgo",
    type: "Earth Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Mercury",
    element: "earth",
    funFact:
      "Virgo is associated with detail, organization, and analytical thinking.",
  },

  {
    name: "Libra",
    type: "Air Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Venus",
    element: "air",
    funFact:
      "Libra is symbolized by scales and represents balance and fairness.",
  },

  {
    name: "Scorpio",
    type: "Water Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Pluto",
    element: "water",
    funFact: "Scorpio is known for intensity and mystery.",
  },

  {
    name: "Sagittarius",
    type: "Fire Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Jupiter",
    element: "fire",
    funFact: "Sagittarius represents adventure and exploration.",
  },

  {
    name: "Capricorn",
    type: "Earth Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Saturn",
    element: "earth",
    funFact: "Capricorn represents ambition and discipline.",
  },

  {
    name: "Aquarius",
    type: "Air Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Uranus",
    element: "air",
    funFact: "Aquarius is innovative and independent.",
  },

  {
    name: "Pisces",
    type: "Water Sign",
    image: "https://placehold.co/300x300",
    rulingPlanet: "Neptune",
    element: "water",
    funFact: "Pisces is imaginative and emotional.",
  },
];

console.log(zodiac);

const container = document.getElementById("card-container");
const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalType = document.getElementById("modalType");
const modalPlanet = document.getElementById("modalPlanet");
const modalDetail = document.getElementById("modalDetail");

function render(list) {
  container.innerHTML = "";

  list.forEach((item) => {
    let card = document.createElement("div");

    card.className = "col-lg-3 col-md-4 col-sm-6";

    card.innerHTML = `

<div class="card-box ${item.element}">

<img src="${item.image}">

<h4>${item.name}</h4>

<p>${item.type}</p>

<button class="more-btn">
✦ More Info
</button>

</div>

`;

    container.appendChild(card);

    const btn = card.querySelector(".more-btn");

    btn.addEventListener("click", () => {
      modalTitle.textContent = item.name;
      modalImage.src = item.image;
      modalType.textContent = item.type;
      modalPlanet.textContent = "Ruling Planet: " + item.rulingPlanet;
      modalDetail.textContent = item.funFact;

      modal.classList.remove("hidden");
    });
  });
}

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.type;

    console.log(selected);

    if (selected === "all") {
      render(zodiac);
    } else {
      const filteredList = zodiac.filter(
        (item) => item.rulingPlanet === selected,
      );

      console.log(filteredList);

      render(filteredList);
    }
  });
});

render(zodiac);
