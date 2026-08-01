const WHATSAPP_NUMBER = "5547999790185";

const products = [
  {
    id: "3abc879b-e792-4892-a2c9-c2d300967287",
    title: "Mini escavadeira hidráulica diesel 1.8 toneladas",
    shortTitle: "HNB 1.8 toneladas",
    category: "Máquinas",
    price: 89990,
    stock: 4,
    specs: ["1,8 tonelada", "Motor diesel", "Hidráulica"],
    description:
      "Potência e precisão para obras compactas. Um equipamento robusto e eficiente, ideal para trabalhos em espaços reduzidos que exigem desempenho profissional e baixo consumo. Possui controle hidráulico preciso, estrutura de fácil manutenção e projeto ergonômico para o operador.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_22b4e101-8d39-4e04-9c15-f3fdcfdf13fb.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_c657bf9f-d2a4-4dbd-b7a8-ee31eb2371f5.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_3e616a5e-d894-4cbe-aa76-e11b6ff76575.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_222f2254-08b5-48dd-9dc1-c0234d5bba6e.jpg"
    ]
  },
  {
    id: "cf437b31-0cb2-4390-be3f-db6ee55f948c",
    title: "Mini escavadeira hidráulica diesel 1.6 toneladas",
    shortTitle: "HNB 1.6 toneladas",
    category: "Máquinas",
    price: 69990,
    stock: 15,
    specs: ["1,6 tonelada", "Motor diesel", "Compacta"],
    description:
      "Uma escolha eficiente e versátil para operações de escavação. O design compacto facilita manobras em espaços apertados, enquanto a construção reforçada, a operação hidráulica e a ergonomia ajudam a manter produtividade e segurança no trabalho.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_5c62d534-c869-4e95-b0d7-376de72c1561.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_7681ac9c-a53d-4b2f-8066-b537ef26b73a.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_bb3796b2-d0e2-4ba9-9d4a-e1f08e06db7a.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_fdfdf57f-d7c3-4ca4-b9f1-9f450197f893.jpg"
    ]
  },
  {
    id: "9a57599a-bf7b-4a17-9e7d-94e80c4292bb",
    title: "Mini escavadeira hidráulica diesel 1 tonelada",
    shortTitle: "HNB 1 tonelada",
    category: "Máquinas",
    price: 49990,
    stock: 14,
    specs: ["1 tonelada", "Motor KOOP 12 HP", "Ágil"],
    description:
      "Máquina compacta e potente para projetos de construção e escavação em locais de difícil acesso. Equipada com motor KOOP de 12 HP, operação hidráulica precisa, chassi reforçado e tubos hidráulicos revestidos. Consulte a equipe sobre itens inclusos e condições de pagamento.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_28b7ce3c-18cc-4438-8d66-625e68bcffa7.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_74b12225-05aa-42d1-a486-484609e81719.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_5f1b773e-bcfe-4432-a263-ea8ee2b57ae1.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_9077d927-9640-45ad-aefe-a1542699eedc.jpg"
    ]
  },
  {
    id: "643d075e-9130-4d49-b654-8d5e07338674",
    title: "Perfuratriz hidráulica",
    category: "Implementos",
    price: 5990,
    stock: 6,
    description:
      "Perfuratriz completa, robusta e pronta para uso. Oferece força e precisão para perfurações de até 2 metros de profundidade em obras, cercamentos, estacas, postes, plantio e fundações leves.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_fc26b7cc-21c6-4b0f-b19e-3bc81815e4d9.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_177f6c1c-e684-4845-98c5-cc5552addeed.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_744778fa-058e-4c93-9ba4-a2cd15104aa3.jpg"
    ]
  },
  {
    id: "3e40a812-84a3-486e-8d23-39238d02199a",
    title: "Pá rompedora ripper para mini escavadeira",
    category: "Implementos",
    price: 1850,
    stock: 1,
    description:
      "Acessório resistente para otimizar escavação, rompimento e trabalhos em terrenos compactos. Possui instalação prática e compatibilidade com diferentes modelos de mini escavadeiras.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_484d34e2-2087-406f-a81b-994da6175610.jpg"
    ]
  },
  {
    id: "9fa2ae31-5a06-4b5c-a4f6-36f13b3e860c",
    title: "Garfo para mini escavadeira",
    category: "Implementos",
    price: 1750,
    stock: 1,
    description:
      "Garfo desenvolvido para ampliar a versatilidade da mini escavadeira no transporte e movimentação de materiais.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_d9c76a19-3e0b-4b23-8d5d-0b8d6e813223.jpg"
    ]
  },
  {
    id: "afa6f574-2675-48a2-a6ca-14e2e780a050",
    title: "Garfo agarrador garra",
    category: "Implementos",
    price: 4900,
    stock: 1,
    description:
      "Implemento tipo garra para mini escavadeira, indicado para agarrar e movimentar diferentes materiais com mais controle.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_a7543c07-1ddb-470a-bf4e-1b5f06771acf.jpg"
    ]
  },
  {
    id: "c1b6e238-f40a-474b-90ac-1a3d02b656ea",
    title: "Engate de troca rápida",
    category: "Implementos",
    price: 1750,
    stock: 15,
    description:
      "Engate de troca rápida para mini escavadeira. Mais agilidade na substituição de implementos durante a operação.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_2f1701f4-03e0-4ce3-95ad-62ea0dca5b62.jpg"
    ]
  },
  {
    id: "6eab7dc6-020d-490f-9578-b0ddb23ed3f5",
    title: "Concha dentada de 20 cm",
    category: "Implementos",
    price: 1650,
    stock: 10,
    description:
      "Concha dentada de 20 cm resistente e eficiente para escavações precisas, remoção de materiais e trabalhos em espaços reduzidos.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_90510100-fa4f-4f43-9144-159c6d31fa98.jpg"
    ]
  },
  {
    id: "6f268775-370b-4f91-8c24-b535d008fa6c",
    title: "Concha carregadeira de 80 cm",
    category: "Implementos",
    price: 2100,
    stock: 15,
    description:
      "Concha carregadeira de 80 cm com borda lisa para nivelamento de acabamento, carregamento, limpeza de valas e aterro.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_f3e3b141-2a7d-48e2-8f29-40497693c842.jpg"
    ]
  },
  {
    id: "d1e2c82a-1e5f-4052-b0d3-8fdc46c9df83",
    title: "Kit de esteira de borracha 1.6 e 1.8 t",
    category: "Peças",
    price: 4990,
    stock: 10,
    description:
      "Kit de esteiras de borracha para mini escavadeiras de 1,6 e 1,8 toneladas.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_2ea7b7ba-ae0a-4991-90f4-e618c932f742.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_0cbd6b56-21ea-41b8-8a1c-3025c0889c28.jpg"
    ]
  },
  {
    id: "831dd059-fdd7-43c1-a280-f7579254032a",
    title: "Kit de esteira de borracha 1 tonelada",
    category: "Peças",
    price: 3900,
    stock: 10,
    description:
      "Kit de esteiras de borracha para mini escavadeira de 1 tonelada.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_2ca17c13-6447-4cef-b64f-d635bbf2446a.jpg",
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_f22f1f47-a4e5-47d5-9bba-ea798453c275.jpg"
    ]
  },
  {
    id: "eb845079-2baa-4399-8af0-bbd0169fb8a8",
    title: "Bomba hidráulica para mini escavadeira",
    category: "Peças",
    price: 4100,
    stock: 10,
    description:
      "Bomba hidráulica compacta e eficiente, desenvolvida para proporcionar operação suave e precisa em mini escavadeiras.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_2010a68e-e850-4b7d-bcdd-eff33ebb42b5.jpg"
    ]
  },
  {
    id: "d0d0b08e-7f3c-48db-ab73-54c5a7036bd9",
    title: "Bomba hidráulica dupla",
    category: "Peças",
    price: 4800,
    stock: 5,
    description:
      "Bomba hidráulica dupla de alta performance para mini escavadeiras, fabricada para oferecer eficiência, durabilidade e instalação prática.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_19f10d5a-09cf-4b70-b96f-cd9ed79bcdbb.jpg"
    ]
  },
  {
    id: "0e5b7a9c-9142-4162-aabc-5aed2525cf1f",
    title: "Motor de partida para mini escavadeira",
    category: "Peças",
    price: 2490,
    stock: 5,
    description:
      "Motor de partida desenvolvido para mini escavadeiras, com foco em desempenho e confiabilidade.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_82d18b36-5330-45f7-affa-9d2a12fea398.jpg"
    ]
  },
  {
    id: "2752ce7a-5bae-45d4-98db-a7726bc151c7",
    title: "Pino de fixação",
    category: "Peças",
    price: 120,
    stock: 1,
    description:
      "Pino de fixação fabricado com material resistente para garantir encaixe firme, segurança e durabilidade.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_aaef4ac2-5746-43cc-8758-2300c1ea2718.jpg"
    ]
  },
  {
    id: "25e7507a-ea89-4d75-a399-54647bd928cc",
    title: "Cabo de acelerador para mini escavadeira",
    category: "Peças",
    price: 190,
    stock: 10,
    description:
      "Cabo de acelerador projetado especialmente para mini escavadeiras.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_0d460077-4511-40b3-bee7-c4020bcef9db.jpg"
    ]
  },
  {
    id: "bf81e275-7601-40af-89a5-81915569ad6a",
    title: "Interruptor de energia",
    category: "Peças",
    price: 90,
    stock: 10,
    description: "Interruptor de energia para mini escavadeira.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_9e462022-3018-4985-92b6-cc74ceddb942.jpg"
    ]
  },
  {
    id: "80d6f9d7-a1cd-4d41-a1c9-4b410d743209",
    title: "Interruptor chave geral",
    category: "Peças",
    price: 95,
    stock: 1,
    description: "Interruptor chave geral para mini escavadeira.",
    images: [
      "https://assets.rediredi.com/items/images/01157087-3e55-48f0-a9ee-2804d10e6aea_bfca5172-1edb-4997-9c87-36aefb99a381.jpg"
    ]
  }
];

const money = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);

const machineGrid = document.querySelector("#machine-grid");
const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#catalog-search");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "Todos";

function machineCard(product, index) {
  return `
    <article class="machine-card reveal">
      <div class="machine-card__top" data-index="0${index + 1}">
        <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
        <span class="machine-card__badge">${index === 1 ? "Mais procurada" : "Pronta entrega"}</span>
      </div>
      <div class="machine-card__body">
        <span class="machine-card__category">Mini escavadeira HNB</span>
        <h3>${product.shortTitle}</h3>
        <div class="machine-card__specs">
          ${product.specs.map((spec) => `<span>${spec}</span>`).join("")}
        </div>
        <div class="machine-card__bottom">
          <div class="machine-card__price">
            <small>A partir de</small>
            <strong>${money(product.price)}</strong>
          </div>
          <button class="round-button" type="button" data-product-id="${product.id}" aria-label="Ver ${product.title}">↗</button>
        </div>
      </div>
    </article>
  `;
}

function productCard(product) {
  return `
    <article class="product-card" tabindex="0" data-product-id="${product.id}">
      <div class="product-card__image">
        <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
        <span class="product-card__tag">Disponível</span>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.category}</span>
        <h3>${product.title}</h3>
        <div class="product-card__bottom">
          <strong>${money(product.price)}</strong>
          <span>Ver detalhes →</span>
        </div>
      </div>
    </article>
  `;
}

function renderMachines() {
  const machines = products.filter((product) => product.category === "Máquinas");
  machineGrid.innerHTML = machines.map(machineCard).join("");
}

function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = products.filter((product) => {
    if (product.category === "Máquinas") return false;
    const matchesFilter = activeFilter === "Todos" || product.category === activeFilter;
    const matchesSearch =
      !term ||
      product.title.toLocaleLowerCase("pt-BR").includes(term) ||
      product.description.toLocaleLowerCase("pt-BR").includes(term);
    return matchesFilter && matchesSearch;
  });

  productGrid.innerHTML = filtered.map(productCard).join("");
  emptyState.style.display = filtered.length ? "none" : "block";
}

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappLink(link.dataset.whatsapp);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active")?.classList.remove("is-active");
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalThumbs = document.querySelector("#modal-thumbs");

function setModalImage(src, title, activeButton) {
  modalImage.src = src;
  modalImage.alt = title;
  modalThumbs.querySelector(".is-active")?.classList.remove("is-active");
  activeButton?.classList.add("is-active");
}

function openModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  document.querySelector("#modal-category").textContent = product.category;
  document.querySelector("#modal-title").textContent = product.title;
  document.querySelector("#modal-price").textContent = money(product.price);
  document.querySelector("#modal-description").textContent = product.description;
  document.querySelector("#modal-whatsapp").href = whatsappLink(
    `Olá! Tenho interesse em ${product.title}, anunciado por ${money(product.price)}. Pode me passar mais informações?`
  );

  modalThumbs.innerHTML = product.images
    .map(
      (image, index) => `
        <button class="${index === 0 ? "is-active" : ""}" type="button" data-modal-image="${image}" aria-label="Ver foto ${index + 1}">
          <img src="${image}" alt="">
        </button>
      `
    )
    .join("");

  setModalImage(product.images[0], product.title, modalThumbs.querySelector("button"));
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const productTrigger = event.target.closest("[data-product-id]");
  if (productTrigger) openModal(productTrigger.dataset.productId);

  if (event.target.closest("[data-close-modal]")) closeModal();

  const thumb = event.target.closest("[data-modal-image]");
  if (thumb) {
    setModalImage(thumb.dataset.modalImage, document.querySelector("#modal-title").textContent, thumb);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) {
    event.preventDefault();
    openModal(event.target.dataset.productId);
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => observer.observe(element));
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll("a")];

window.addEventListener(
  "scroll",
  () => {
    const current = sections
      .filter((section) => window.scrollY >= section.offsetTop - 160)
      .at(-1);
    if (!current) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
    });
  },
  { passive: true }
);

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderMachines();
renderProducts();
observeReveals();
