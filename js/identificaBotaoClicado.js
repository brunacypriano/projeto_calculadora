//Identifica o botão clicado, pega o que tá no valor do mesmo
//Adiciona o valor do botão ao input display
const $input = document.querySelector("input");

document.querySelectorAll(".num__key").forEach(
  elemento => {
    elemento.onclick = () => $input.value = $input.value !== "0" ? $input.value + elemento.innerText : elemento.innerText;
  }
);