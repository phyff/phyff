import React from 'react';
import type { AppProps } from 'next/app';

import '../scss/main.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
