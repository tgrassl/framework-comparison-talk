import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <div className="container">
            <main className="centerOnScreen">
              <Main />
            </main>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
