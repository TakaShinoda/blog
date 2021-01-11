---
title: 'Next.js + TypeScript + Tailwind CSS でブログサイトを作成'
date: '2021-01-11'
image: ''
---


**はじめに**

Next.js + TypeScript + Tailwind CSS を用いて、本ブログサイトを作成した時のメモ的な感じでここに記させていただきます。

下記のバージョンで操作確認しております。

<br/>

```
  "dependencies": {
    "next": "^10.0.0",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.0.1"
  },
```
[GitHub](https://github.com/TakaShinoda/blog)



<br/>


**Next.jsでブログサイトを作成**

ブログのベースはNext.jsの公式ドキュメントにあるチュートリアル通りに作成しました。

- [https://nextjs.org/learn/basics/create-nextjs-app](https://nextjs.org/learn/basics/create-nextjs-app)

<br/>

Qiitaに日本語訳の記事もあり参考になりました。

- [https://qiita.com/thesugar/items/01896c1faa8241e6b1bc](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc)


<br/>


**TypeScript化**

TS化を行いました。

- tsconfig.jsonを作成
```
touch tsconfig.json
```

- typescriptをインストール
```
npm install --save-dev typescript @types/react @types/node
```

.jsファイルを.tsxに変更して、型をつけていきました。
GetStaticProps、GetStaticPaths、GetServerSidePropsといった
Next.js固有の型もあります。

各API (getStaticProps、getStaticPaths、getServerSideProps) については下記記事を参考にさせていただきました。

- [https://qiita.com/matamatanot/items/1735984f40540b8bdf91](https://qiita.com/matamatanot/items/1735984f40540b8bdf91)



<br/>


**Tailwind CSSに置き換える**

Tailwind CSSの導入の方法は下記の記事を参考にさせていただきました。

- [https://panda-program.com/posts/nextjs-tailwind-css](https://panda-program.com/posts/nextjs-tailwind-css)


また、tailwind.config.js をカスタマイズしてクラス名を追加しました。

```javascript
module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        auto: 'auto'
      },
      maxWidth: {
        180: '180px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```


<br/>


**つまづいた点**

- Tailwind CSSを導入した際に下記エラーが出ました。
```
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

こちらはTailwind CSSのサイトにて下記のように記載がありました。

[https://tailwindcss.com/docs/installation#post-css-7-compatibility-build](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)



> If you run into the error mentioned above, uninstall Tailwind and re-install using the compatibility build instead:

> 上記のエラーが発生した場合は、Tailwindをアンインストールし、互換性のあるビルドを使用して再インストールしてください。

```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Tailwind CSS v2.0以降PostCSS8に依存しており、PostCSS8はまだ数か月しか経っていないため、エコシステム内の他の多くのツールはまだ更新されていません。
よって、Tailwind CSSのインストール後にターミナルでこのようなエラーが表示される場合があるそうです。

<br/>


**編集・追加**

ブログ記事をカードのように表示できるようにコンポーネントを追加しました。また、カードに表示する画像をmarkdownファイル(/posts)に設定している場合はその画像を表示し、それ以外はデフォルトの画像を表示します。



```
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Date } from '../components/date'

export const CardList = ({ allPostsData }) => {
  return (
    <>
      <ul className="list-none">
        {allPostsData.map(({ id, date, title, image }) => (
          <div className="inline-flex mr-5 max-w-180" key={id}>
            <li className="mb-5 rounded-lg overflow-hidden shadow-xl p-3 w-44 bg-white">
              {image ? (
                <Image
                  src={image}
                  width="200"
                  height="200"
                  className="w-24 h-24"
                  alt="thumbnail"
                />
              ) : (
                <Image
                  src="/images/no_image.png"
                  width="200"
                  height="200"
                  className="w-24 h-24"
                  alt="no-image"
                />
              )}
              <br />
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />

              <small className="text-gray-400">
                <span className="mr-1">
                  <FaRegCalendarAlt />
                </span>
                <Date dateString={date} />
              </small>
            </li>
          </div>
        ))}
      </ul>
    </>
  )
}

```

<img width="662" alt="スクリーンショット 2021-01-11 15 08 35" src="https://user-images.githubusercontent.com/45593212/104190273-343d7000-545f-11eb-8c06-52d0385bff72.png">



参考: 
[https://panda-program.com/posts/recommend-developers-use-tailwind-css](https://panda-program.com/posts/recommend-developers-use-tailwind-css)


<br/>

**おわりに**

今回は、Next.jsのチュートリアルで作成したブログサイトに、TypeScriptとTailWind CSSを導入しました。
今後はogpを設定したり、記事を投稿してさらに改善していきたいです。



