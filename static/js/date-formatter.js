//let dates = Array.from(document.geElementsBy("date"));
let dateElem = document.getElementById("date");
if (dateElem) {
    let date = new Date(dateElem.textContent);
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElem.textContent = "Last Updated " + date.toLocaleDateString("en-US", options);
}