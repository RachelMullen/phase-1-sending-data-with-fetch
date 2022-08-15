function submitData(name, email) {
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
     body: JSON.stringify({name, email})
    /*data goes here should be a string*/
})
    .then(function(response) {
        return response.json()
    })
    .then(function (object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}