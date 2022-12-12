import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
