import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import { RootProvider } from '../contexts/RootContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </RootProvider>
  )
}
