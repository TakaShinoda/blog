// この App コンポーネントは、すべてのページに共通するトップレベルのコンポーネントです。
// たとえば、ページ間を移動するときに状態（state）を保持するために App コンポーネントを使用することができます。

import { AppProps } from 'next/app'

// グローバルなCSSファイルを読み込む
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
