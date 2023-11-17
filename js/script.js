let nome = prompt("Qual'è il tuo nome?");
console.log(nome)

let cognome = prompt("Qual'è il tuo cognome?");
console.log(cognome)

let favcol = prompt("Qual'è il tuo colore preferito?");
console.log(favcol)

let user = nome + cognome + favcol + '23';
console.log(user)

document.getElementById('userpass').innerHTML = user;
console.log(document.getElementById('userpass').innerHTML)