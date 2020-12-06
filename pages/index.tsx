import Head from 'next/head'
import Link from 'next/link'
import { Date } from '../components/date'
import { Layout, siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { FaRegCalendarAlt } from 'react-icons/fa'

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
      <section className='text-xl pt-1'>
        <h2 className='text-2xl mt-4 mb-4'>Blog</h2>
        <ul className='list-none'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mb-5' key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className='text-gray-400'>
                <span className='mr-1'>
                <FaRegCalendarAlt />
                </span>
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
