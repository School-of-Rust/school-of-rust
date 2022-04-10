let codes = Array.from(document.getElementsByTagName("pre"));

for (let i = 0; i < codes.length; ++i) {
    const code = codes[i];
    code.setAttribute("class", code.getAttribute("class") + " code");

    const stripped = code.innerHTML.replace(/(<([^>]+)>)/gi, "");

    // Create the playground link
    const linkIcon = document.createElement("i");
    linkIcon.setAttribute("class", "fas fa-play");

    const link = document.createElement("a");
    const uri = encodeURI("https://play.integer32.com/?code=" + stripped);
    link.setAttribute("class", "code-link");
    link.setAttribute("href", uri);
    link.setAttribute("target", "_blank");
    link.setAttribute("title", "Open with Rust Playground.");
    link.appendChild(linkIcon);
    link.innerHTML += "RUN";

    // Create the clipboard link
    const copyIcon = document.createElement("i");
    copyIcon.setAttribute("class", "fa fa-scissors");

    const copy = document.createElement("a");
    copy.setAttribute("class", "code-link");
    copy.setAttribute("title", "Copy to clipboard.");
    copy.appendChild(copyIcon);
    copy.innerHTML += "COPY";

    copy.onclick = () => {
        navigator.clipboard.writeText(stripped);
    };

    // Create the buttons container
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "code-buttons");
    buttons.appendChild(copy);
    buttons.appendChild(link);
    code.before(buttons);
}