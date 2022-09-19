function pageLayout({ content }) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Synchronous</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
      <link href="/css/main.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    </head>

    <body class="xxx">

    
    <header>
      <h1 class="title is-vcentered">SYNCHRONOUS</h1>
      <button class="button is-primary">Start SYNCHRO</button>
      <button class="button is-danger">Stop SYNCHRO</button>
    </header>

  <p>--Injected Content Start--</p>
  ${content}
  <footer>--Injected Content End--</footer>
  </body>
  </html>
    `;
}

module.exports = pageLayout;
