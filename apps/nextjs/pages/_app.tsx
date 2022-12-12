import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      This is some string
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
