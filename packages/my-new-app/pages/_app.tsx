import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header';
import ArHeader from '../components/arHeader';
import '../styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-new-app!</title>
      </Head>
      <main className="app">
        <Header />
        <ArHeader />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
