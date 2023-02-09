import { defaultTheme } from '@/styles/theme/default'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="My portfolio project with Typescript, ReactJS, NextJs and Styled Components."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
