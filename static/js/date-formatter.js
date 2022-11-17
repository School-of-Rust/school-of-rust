//let dates = Array.from(document.geElementsBy("date"));
//let dateElem = document.getElementById("date");
let dates = document.getElementsByClassName("date");
for (const dateElem of dates) {
    let date = new Date(dateElem.textContent);
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElem.textContent = date.toLocaleDateString("en-US", options);
}