# 🚩 Alura Challenge - Amigo Secreto

ℹ Este é um projeto simples que permite <strong>adicionar amigos a uma lista e realizar um sorteio entre eles</strong>.<br> 
ℹ <strong>Foi fornecido</strong> pela <strong>Alura</strong> os arquivos HTML, CSS e Pasta Assets.<br> 
ℹ A lógica em <strong>JavaScript</strong> foi feita por mim.

## Funcionalidades

- **Adicionar amigos** à lista.
- **Verificar duplicação** para garantir que o nome do amigo não seja repetido.
- **Sortear amigos** de forma aleatória.

## Como Usar

### 1️⃣ **Adicionar Amigo**

Digite o nome do amigo e clique em "Adicionar" para incluir na lista.

### 2️⃣ **Sortear Amigo**

Clique em "Sortear" para escolher um amigo aleatoriamente.

## Exemplo de Código

```javascript
function sortearAmigo() {
  let sorteio = Math.floor(Math.random() * arrayAmigos.length);
  if (arrayAmigos.length < 2) {
    alert("Adicione ao menos 2 amigos antes de sortear!");
  } else {
    resultadoSorteio.innerHTML = `Parabéns, ${arrayAmigos[sorteio]} foi o sorteado!!`;
  }
}
