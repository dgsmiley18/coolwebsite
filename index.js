addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Verifique se é uma solicitação POST do webhook do Contentful
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  // Obtenha os dados do corpo da solicitação
  const requestBody = await request.json()

  // Verifique se a solicitação é realmente do webhook do Contentful
  const contentfulTopic = request.headers.get('X-Contentful-Topic')
  if (contentfulTopic !== 'ContentManagement.Entry.publish') {
    return new Response('Bad Request', { status: 400 })
  }

  // Obtenha os detalhes do novo artigo do corpo da solicitação
  const articleTitle = requestBody.fields.title
  const articleContent = requestBody.fields.content

  // Crie um nome único para o arquivo do artigo (pode ser baseado no título ou em algum identificador único)
  const fileName = generateUniqueFileName(articleTitle)

  // Salve o conteúdo do artigo em um arquivo no GitHub
  const githubResponse = await fetch(`https://api.github.com/repos/JohnTitor998/coolwebsite/artigos/${fileName}.html`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Adicionando nova página: ${fileName}.html`,
      content: btoa(generateHTMLPage(articleTitle, articleContent)),
    }),
  })

  if (!githubResponse.ok) {
    return new Response('Erro ao atualizar os arquivos do site no GitHub', { status: 500 })
  }

  // Retorne uma resposta indicando que a página foi criada com sucesso
  return new Response('Página criada com sucesso', { status: 200 })
}

function generateHTMLPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <header>
        <div id="bannerimage"></div>
    </header>
    <nav id="crt">
        <div id="sidebar">
            <a href="sobre.html">About</a>
            <a href="livraria.html">Library</a>
            <a href="museu.html">Museum</a>
        </div>
    </nav>
    <article>
        <div id="box">
            <div id="contentful-data">
                <h2>${title}</h2>
                ${content}
            </div>
        </div>
    </article>

    <footer>
        <div id="footer">
            <p>© 1998 - John</p>
            <a href="https://www.amd.com/en.html"><img src="https://rampancy.neocities.org/buttons/amd.gif" alt="AMD"></a>
            <!-- Adicione mais links do rodapé conforme necessário -->
        </div>
    </footer>

      <script src="./post.js"></script>

</body>
</html>`;
}

function generateUniqueFileName(title) {
  const sanitizedTitle = title.replace(/\s+/g, '-').toLowerCase()
  const timestamp = Date.now()
  return `${sanitizedTitle}-${timestamp}`
}
