const name = localStorage.getItem('name')//localStorage.getItem --> Pega o elemento salvo com a chave específica
const email = localStorage.getItem('email')
const number = localStorage.getItem('number')
const mensage = localStorage.getItem('mensage')

let spanName = document.getElementById("name")
let spanEmail = document.getElementById("email")
let spanNumber = document.getElementById("number")
let spanMsg = document.getElementById("mensage")

spanName.textContent = name
spanEmail.textContent = email
spanNumber.textContent = number
spanMsg.textContent = mensage

