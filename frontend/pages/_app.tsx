import '@styles/reset.css'
import '@styles/globals.css'
import '@styles/variables.css'

import type { AppProps } from 'next/app'
import {
  ActionTableContextProvider,
  ActionCRUDContextProvider,
} from '@hooks'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActionTableContextProvider>
      <ActionCRUDContextProvider>
        <Component {...pageProps} />
      </ActionCRUDContextProvider>
    </ActionTableContextProvider>
  )
}
