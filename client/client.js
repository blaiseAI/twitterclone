const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const SERVER_API_URL = 'http://localhost:5000/mews';
loadingElement.style.display = "none";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    const mew = {
        name: name,
        content: content
    };
    form.style.display = "none";
    loadingElement.style.display = "";

    // POST Data to the server
    fetch(SERVER_API_URL, {
            method: "POST",
            body: JSON.stringify(mew),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(createdMew => {
            console.log(createdMew);
            form.reset();
            form.style.display = "";
            loadingElement.style.display = "none";
        })
})