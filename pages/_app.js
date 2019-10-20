import React from 'react';
import App from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <NextNprogress color="#54b689" startPosition={0.2} stopDelayMs={200} height="5" />
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
