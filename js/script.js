// Pegando todos os IDs que vou usar
let titulo = document.querySelector('#titulo')
let descricao = document.querySelector('#descricao')
let url = document.querySelector('#url')
let btn = document.querySelector('#btn')

// Adicionando um evento
btn.addEventListener('click', confirmar)

// Criando a função principal do evento
function confirmar(event) {
  event.preventDefault()

  // Criando a primeira lista (Título)
  let titu = document.createElement('li')
  titu.innerText = titulo.value
  document.querySelector('ul').appendChild(titu)

  // Criando a Segunda lista (Descrição)
  let descri = document.createElement('li')
  descri.innerText = descricao.value
  document.querySelector('ul').appendChild(descri)

  // Criando a terceira lista (Imagem)
  let img = document.createElement('img')
  img.setAttribute('src', url.value)
  document.querySelector('ul').appendChild(img)

  // Criando a validação do "li e aceito"
  let lerAceitar = document.getElementById('condicoes')
  if (lerAceitar.checked) {
    return true
  } else {
    alert('Você precisa aceitar os termos !!')
  }
}
