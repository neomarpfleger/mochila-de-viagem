

/*const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements["quantidade"]

    const itemAtual ={
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value= ""
})

function criaElemento(item){
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML= item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);

}*/


const form=document.getElementById("novoItem");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    criaElemento(evento.target.elements["nome"].value, evento.target.elements["quantidade"].value);
    console.log(nome)
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
}