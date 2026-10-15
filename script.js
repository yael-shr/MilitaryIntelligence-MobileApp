const toast = document.querySelector(".toast");
let toastTimeout;

function showMessage(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

document.querySelectorAll(".action-button, .help-button").forEach((button) => {
  button.addEventListener("click", () => {
    showMessage(button.dataset.message);
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("aria-current");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-current", "page");
    showMessage(`${button.dataset.view} view selected`);
  });
});
