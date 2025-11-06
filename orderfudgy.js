document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("showPopup");
  const okBtn = document.getElementById("okBtn");
  const form = document.getElementById("orderform");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "flex"; 
  });

  okBtn.addEventListener("click", () => {
    popup.style.display = "none";
    form.reset(); // 🔹 
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});