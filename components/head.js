import Head from "next/head";

const WithHead = () => {
  return (
    <Head>
      <title> B. Vernouillet</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/bootstrap.min.css" />
    </Head>
  );
};

export default WithHead;
