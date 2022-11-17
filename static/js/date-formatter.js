const dates = document.getElementsByClassName("date");
for (const dateElem of dates) {
    const date = new Date(dateElem.textContent + "T12:00:00Z");
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElem.textContent = date.toLocaleDateString("en-US", options);
}