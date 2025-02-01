# 🚩 Alura Challenge - Amigo Secreto

ℹ Este é um projeto simples que permite <strong>adicionar amigos a uma lista e realizar um sorteio entre eles</strong>.<br> 
ℹ <strong>Foi fornecido</strong> pela <strong>Alura</strong> os arquivos HTML, CSS e Pasta Assets.<br> 
ℹ A lógica em <strong>JavaScript</strong> foi feita por mim.<br><br>
**Repositório no Pages: https://roberto-lourenco.github.io/alura-challenge/**

## Funcionalidades

- **Adicionar amigos** à lista.
- **Tratamento de erros** para garantir que não seja adicionado números ou nomes vazios.
- **Verificar duplicação** para garantir que o nome do amigo não seja repetido.
- **Sortear amigos** de forma aleatória e exibir o resultado na tela.

## Como Usar

### 1️⃣ **Adicionar Amigo**

Digite o nome do amigo e clique em "Adicionar" para incluir na lista.

### 2️⃣ **Sortear Amigo**

Clique em "Sortear" para escolher um amigo aleatoriamente.

## Exemplo de Código

```javascript
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
