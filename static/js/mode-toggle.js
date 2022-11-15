window.onload = function() {
    const lightBtn = document.querySelector("#light-mode");
    const darkBtn = document.querySelector("#dark-mode");
    const sheetLink = document.querySelector("#sheet-link");

    lightBtn.addEventListener("click", function() {
        sheetLink.href = "/light.css"

        lightBtn.classList.remove("mode-off");
        lightBtn.classList.add("mode-on");

        darkBtn.classList.remove("mode-on");
        darkBtn.classList.add("mode-off");
    });

    darkBtn.addEventListener("click", function() {
      console.log("DARK!");
        sheetLink.href = "/dark.css"

        darkBtn.classList.remove("mode-off");
        darkBtn.classList.add("mode-on");

        lightBtn.classList.remove("mode-on");
        lightBtn.classList.add("mode-off");
    });
};