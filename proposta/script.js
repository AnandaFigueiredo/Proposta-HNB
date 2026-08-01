const plans = {
  catalogo: {
    name: "Site catálogo",
    total: "R$ 850",
    installment: "R$ 425",
    approval: "O pagamento da primeira parcela de R$ 425 representa a aprovação da opção Site catálogo e autoriza o início do serviço."
  },
  ecommerce: {
    name: "Loja virtual",
    total: "R$ 1.700",
    installment: "R$ 850",
    approval: "O pagamento da primeira parcela de R$ 850 representa a aprovação da opção Loja virtual e autoriza o início do serviço."
  }
};

function selectPlan(planKey) {
  const plan = plans[planKey];
  if (!plan) return;

  document.querySelectorAll("[data-plan-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.planCard === planKey);
  });

  document.querySelectorAll("[data-select-plan]").forEach((button) => {
    const selected = button.dataset.selectPlan === planKey;
    button.classList.toggle("is-selected", selected);
    button.innerHTML = selected ? "Opção selecionada <span>✓</span>" : "Selecionar esta opção <span>→</span>";
  });

  document.querySelector("#selected-plan-name").textContent = plan.name;
  document.querySelector("#selected-plan-total").textContent = plan.total;
  document.querySelector("#first-installment").textContent = plan.installment;
  document.querySelector("#second-installment").textContent = plan.installment;
  document.querySelector("#approval-copy").textContent = plan.approval;
}

document.querySelectorAll("[data-select-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    selectPlan(button.dataset.selectPlan);
    document.querySelector(".payment-box").scrollIntoView({ behavior: "smooth", block: "center" });
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
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
selectPlan("catalogo");
