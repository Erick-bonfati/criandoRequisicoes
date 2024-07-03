import { connectApi } from './connectApi.js';


// Individualiza os elementos e podemos manipular eles através do DOM
const list = document.querySelector("[data-lista]")

function constructCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");

  video.className = "videos__item"
  video.innerHTML = `
  <iframe width="100%" height="72%" src="${url}"
  title="${titulo}" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  <div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
  </div>
  `

  return video;
}


//funcao assincrona para listar video por video, com base em todos os video da ConnectApi
async function listVideos() {
  const listApi = await connectApi.listVideos();
  // para cada item da api, vamos adicionar o elemento na lista = data-lista, como filhos dela, com os valores da API
  listApi.forEach(element => list.appendChild(
    constructCard(element.titulo, element.descricao, element.url, element.imagem))); 
}

listVideos();