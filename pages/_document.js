import Document, { Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head></Head>
        <body class="dark-mode">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
