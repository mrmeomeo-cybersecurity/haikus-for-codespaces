import haikus from './haikus.json';

function renderHaikus() {
  return haikus
    .map(
      (entry) => `
        <img class="mona-images" src="/images/${entry.image}" alt="Photo of Mona" />
        <div class="haiku-containers">
          <p class="haikus">${entry.text}</p>
        </div>
      `,
    )
    .join('');
}

function renderPage() {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Haikus for Mona</title>
    <link href="/css/main.css" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:title" content="Haikus for Mona">
    <meta property="og:description" content="Some of the best haikus you'll ever read about our rescue dog June">
    <meta property="og:image" content="/images/sunlight.jpg">
  </head>
  <body>
    <h1>Haikus for Mona</h1>
    <div>
      ${renderHaikus()}
    </div>
  </body>
</html>`;
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/' || pathname === '/index.html') {
      return new Response(renderPage(), {
        headers: {
          'content-type': 'text/html; charset=UTF-8',
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
