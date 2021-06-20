import '../styles/globals.css'
import type { AppProps } from 'next/app'

import globalStyles from "../assets/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Helps prevent a flash if dark mode is the default */}
      <script async src="./../scripts/noflash.js" />
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
