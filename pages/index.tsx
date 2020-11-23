import Head from 'next/head'
import Link from 'next/link'
import { Date } from '../components/date'
import { Layout, siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello World!</p>
        <ul>
          <li>
            <a
              href="https://github.com/TakaShinoda"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tttttt_621_s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
