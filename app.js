//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function exibirLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i = 0; i <amigos.length; i++) {
        let nome = document.createElement("li");
        nome.textContent = amigos[i];
        lista.appendChild(nome);
        
    } 
        
    
}

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo').value;
    if (nomeInput) {
        amigos.push(nomeInput);
        document.getElementById('amigo').value = '';
        exibirLista();
    } else {
        alert("Por favor, digite um nome")
    }
}

