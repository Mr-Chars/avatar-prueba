import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../../public/css/forMe.css';
import '../../public/css/volt.css';
import '../../public/css/font-awesome.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
