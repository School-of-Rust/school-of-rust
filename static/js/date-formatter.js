//let dates = Array.from(document.geElementsBy("date"));
let elem = document.getElementById("date");
if (elem) {
    let date = new Date(elem.textContent);
    const options = { year: "numeric", month: "short", day: "numeric" };
    elem.textContent = date.toLocaleDateString("en-US", options);
}