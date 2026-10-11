// Show all events
fetch("http://localhost:5000/events")
.then(response => response.json())
.then(events => {
    events.forEach(renderEvent);
});

// Javascript POST method for adding a new event
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;

    fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title})
    })
    .then(response => response.json())
    .then(renderEvent)
});

// Function to render the event as a list object on the page.
function renderEvent(event) {
    const li = document.createElement("li");
    li.textContent = event.title;
    document.querySelector("#event-list").appendChild(li);
}