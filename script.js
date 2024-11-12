document.addEventListener("DOMContentLoaded", function() {
 
  const backgroundColorSelect = document.getElementById("backgroundColor");
  backgroundColorSelect.addEventListener("change", function() {
      document.body.style.backgroundColor = this.value;
  });

 
  const fontSizeInput = document.getElementById("fontSize");
  const fontSizeValue = document.getElementById("fontSizeValue");
  fontSizeInput.addEventListener("input", function() {
      document.body.style.fontSize = this.value + "px";
      fontSizeValue.textContent = this.value + "px";
  });

  const toggleDarkModeButton = document.getElementById("toggleDarkMode");
  toggleDarkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
  });

  const fontStyleSelect = document.getElementById("fontStyle");
  fontStyleSelect.addEventListener("change", function() {
      document.body.style.fontFamily = this.value;
  });
});
