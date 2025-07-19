const themeToggle = document.getElementById("theme-toggle");
console.log(themeToggle);

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches; //Window means it is an object which has all the content in it that browser holds. Matchmedia here means it runs the css query that has been provided by the window.

  if (preferDarkMode) {
    themeToggle.checked = true;
    setTheme("dark");
  } else {
    themeToggle.checked = false;
    setTheme("light");
  }
}

function showInitialTheme() {
  setInitialTheme();

  themeToggle.addEventListener("change", toggleTheme);
}

document.addEventListener("DOMContentLoaded", showInitialTheme);
