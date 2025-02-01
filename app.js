let arrayAmigos = [];

function adicionarAmigo() {

// **Adicionar amigo a Lista**
  let nomeAmigo = document.getElementById("amigo").value;
  let inputAmigo = document.getElementById("amigo");
  if (nomeAmigo == "") {
    alert("Erro: Digite o nome antes de adicionar");
  } else if (/\d/.test(nomeAmigo)) {
    alert("Erro: O nome não pode conter números.");
  }else if (arrayAmigos.includes(nomeAmigo)){
    alert("Erro: Esse amigo já foi adicionado a sua lista.")
  }else {
    arrayAmigos.push(nomeAmigo);
    inputAmigo.value = "";
    alert("Amigo adicionado com sucesso.");
  }

//   **Listar amigos no HTML**
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML="";
 
//   Adicionar quebra de linha para cada amigo adicionado
  for(let i =0; i<arrayAmigos.length; i++){
    let formatarLista = document.createElement("li");
    formatarLista.textContent = arrayAmigos[i];
    listaAmigos.appendChild(formatarLista);
  }
}

function sortearAmigo(){
    let resultadoSorteio = document.getElementById("resultado");
    let sorteio = Math.floor(Math.random() * arrayAmigos.length);
    
    if(arrayAmigos.length<2){
        alert("Adicione ao menos 2 amigos antes de sortear!")
    }else{
         resultadoSorteio.innerHTML = `Parabéns, ${arrayAmigos[sorteio]} foi o sorteado!!`
    }
   

}