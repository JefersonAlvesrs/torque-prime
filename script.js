// PERSONALIZE ANTES DE PUBLICAR PARA UMA EMPRESA REAL.
// Use 55 + DDD + número, sem espaços, parênteses ou traços.
// Exemplo fictício abaixo: substitua pelo número real para testar.
const WHATSAPP_NUMBER = "5554999999999";

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }),
);

document.querySelectorAll("[data-service]").forEach((link) =>
  link.addEventListener("click", () => {
    document.getElementById("service").value = link.dataset.service;
  }),
);

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const notice = document.getElementById("form-message");
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(number) || number === "5554999999999") {
    notice.textContent =
      "Configure seu número de WhatsApp na variável WHATSAPP_NUMBER do script.js para testar.";
    return;
  }
  const name = document.getElementById("client-name").value.trim();
  const vehicle = document.getElementById("vehicle").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();
  if (!name || !vehicle || !service) {
    notice.textContent = "Preencha nome, veículo e serviço.";
    return;
  }
  const message = `Olá! Gostaria de solicitar um orçamento na Torque Prime.\n\nNome: ${name}\nVeículo: ${vehicle}\nServiço: ${service}${details ? `\nDetalhes: ${details}` : ""}`;
  notice.textContent = "";
  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
});
