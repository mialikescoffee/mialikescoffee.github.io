// Toggles dark mode and stuff.
// css-tricks.com/a-complete-guide-to-dark-mode-on-the-web
// thx to ongyx https://github.com/ongyx/reverie/blob/2329dbd3cd67c0390d9479a8fa0435953ed0f2fe/assets/style.js

function getTheme() {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    return currentTheme;
  } else {
    return "light";  // light by default
  }
}

function toggleTheme() {
  const currentTheme = getTheme();
  document.documentElement.classList.toggle("dark-mode");

  // The theme starts as light.
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
  } else if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
  }
}

function setTheme(theme) {
  if (theme == getTheme()) {
    return;
  }
  toggleTheme();
}

var preferredTheme = getTheme();

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  preferredTheme = "dark";
}

setTheme(preferredTheme);
