
// RECEBENDO DADOS E MOSTRANDO NA TELA
const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}


function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}


function getUser2() {
    fetch(`${url}/2`)
        .then(response => response.json())
        .then(data => {
            userName2.textContent = data.name
            userCity2.textContent = data.city
            userAvatar2.src = data.avatar
        })
        .catch(error => console.error(error))
}
getUser2();

getUsers();

getUser();
// FIM RECEBENDO DADOS E MOSTRANDO NA TELA




// enviar dados para a api 

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}

const newUser = {
    name: "luiz Henrique",
    avatar: "https://picsum.photos/300",
    city: "San Francisco",
}

//addUser(newUser)

//fim do enviar dados





// METODO PUT MUDAR OS DADOS

function updateUser(updatedUser) {
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

const updatedUser = {
    name: "henrique",
    avatar: "https://picsum.photos/500",
    city: "recife",
}

updateUser(updatedUser);
