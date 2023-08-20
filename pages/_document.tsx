import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Láďa is a developer focused on web backend and cloud development and this is his personal website."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ladislavprix.cz" />
          <meta property="og:title" content="Láďa" />
          <meta
            property="og:description"
            content="Láďa is a software developer focused on web backend and cloud development and this is his personal website."
          />
          <meta property="og:image" content="https://www.ladislavprix.cz/site.webp" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
