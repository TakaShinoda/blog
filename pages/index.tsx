import Head from 'next/head'
import { Layout, siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { CardList } from '../components/cardList'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    image?: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl pt-1">
        <h2 className="text-2xl mt-4 mb-4">Blog</h2>

        <CardList allPostsData={allPostsData} />
      </section>
    </Layout>
  )
}

//getServerSideProps -> SSR getStaticProps -> SSG
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  // 関数を呼び出した結果は props キーの内部で返す必要があります。
  // このように設定すれば、allPostsData prop は Home コンポーネントに渡されます
  return {
    props: {
      allPostsData,
    },
  }
}
