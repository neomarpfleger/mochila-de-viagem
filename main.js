const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = []

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nome = (evento.target.elements["nome"].value)
    const quantidade = (evento.target.elements["quantidade"].value)

    criaElemento(nome.value, quantidade.value);

    nome.value = ""
    quantidade.value= ""
})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem =document.createElement("strong");
    numeroItem.innerHTML= quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem);

    const atual{
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringity(itens))


}





















/*const form=document.getElementById("novoItem");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    criaElemento(evento.target.elements["nome"].value, evento.target.elements["quantidade"].value);
})

function criaElemento(nome, quantidade){

    const novoItem =document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = quantidade;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;
    
    const lista = document.getElementById("lista")
    lista.appendChild(novoItem)
}*/