document.querySelectorAll('.option input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".option").forEach((opt) => 
        opt.classList.remove("selected"));
        radio.closest(".option").classList.add("selected");
  });
});
