import Head from 'next/head';

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
        dangerouslySetInnerHTML={{
          __html: `(function(h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function() {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 1594364, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')`
        }}
      />
    </Head>
  );
};

export default WithHead;
