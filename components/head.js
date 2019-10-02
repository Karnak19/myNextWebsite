import Head from "next/head";

const WithHead = () => {
  return (
    <Head>
      <title> B. Vernouillet</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/static/theme-1.css" />
      <script
        src="https://kit.fontawesome.com/a53d6da310.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
};

export default WithHead;
