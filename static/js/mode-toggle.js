localStorage.clear();
const theme = localStorage.getItem("theme");
const sheetLink = document.querySelector("#sheet-link");

if (theme == "light") {
    sheetLink.href = "/light.css";
} else if (theme == "dark") {
    sheetLink.href = "/dark.css";
} else {
    sheetLink.href = "/dark.css";

    // TODO: detect preferred OS mode?
    /*const pref = window.matchMedia('(prefers-color-scheme: light)');
    if (pref.matches) {
        sheetLink.href = "/light.css";
    } else {
        sheetLink.href = "/dark.css";
    }*/
}

window.onload = function() {
    const lightBtn = document.querySelector("#light-mode");
    const darkBtn = document.querySelector("#dark-mode");

    if (theme == "light") {
        lightBtn.classList.remove("mode-off");
        lightBtn.classList.add("mode-on");

        darkBtn.classList.remove("mode-on");
        darkBtn.classList.add("mode-off");
    }

    lightBtn.addEventListener("click", function() {
        sheetLink.href = "/light.css"

        lightBtn.classList.remove("mode-off");
        lightBtn.classList.add("mode-on");

        darkBtn.classList.remove("mode-on");
        darkBtn.classList.add("mode-off");

        localStorage.setItem("theme", "light");
    });

    darkBtn.addEventListener("click", function() {
      console.log("DARK!");
        sheetLink.href = "/dark.css"

        darkBtn.classList.remove("mode-off");
        darkBtn.classList.add("mode-on");

        lightBtn.classList.remove("mode-on");
        lightBtn.classList.add("mode-off");

        localStorage.setItem("theme", "dark");
    });
};