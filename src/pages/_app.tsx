import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/globals'
import { RootProvider } from '../contexts/RootContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wine</title>
      </Head>
      <RootProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </RootProvider>
    </>
  )
}
