let quotes = Array.from(document.getElementsByTagName("blockquote"));

for (let i = 0; i < quotes.length; ++i) {
    const quote = quotes[i];
    const ps = Array.from(quote.getElementsByTagName("p"));
    for (let j = 0; j < ps.length; ++j) {
        const p = ps[j];
        let text = p.innerHTML;
        if (text.startsWith('"') && text.endsWith('"')) {
            const left = document.createElement("i");
            left.setAttribute("class", "ri-double-quotes-l quote");
            const right = document.createElement("i");
            right.setAttribute("class", "right ri-double-quotes-r quote");
            p.innerHTML = "";
            p.appendChild(left);
            p.innerHTML += text.substring(1, text.length - 1);
            p.appendChild(right);
        }
    }
}