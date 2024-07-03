

//assincrona = pede para primeiro executar o await que é o 'fecth' e depois sim retornar o resultado da requisição
async function listVideos() { 
  const connection = await fetch("http://localhost:3000/videos"); //fetch = retorna uma promise, prometendo que algo vai acontecer
  const connectionConverted = await connection.json(); // aqui, pegamos todos os valores que estavam em formato de bites, e transforma num json
  // e ai transforma e um objeto que temos todos os valores da API lá dentro
  
  return connectionConverted;
}

async function createVideo(titulo, descricao, url, imagem) {
  // Para declarar outros tipos de requisições, nós precisamos declarar ela
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    // O headers, serve para indentificar que tipo de arquivo que está sendo enviado
    headers: {
      "Content-type": "application/json"
    },

    // e aqui estamos enviando um objeto de valores formatado como uma string, para assim realizar uma requisição POST
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} visualizações`,
      url: url,
      imagem: imagem
    })
  })

  const connectionConverted = await connection.json()

  return connectionConverted;
}

export const connectApi = {
  listVideos,
  createVideo
}