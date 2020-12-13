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

        {/* <ul className="list-none">
          {allPostsData.map(({ id, date, title, image }) => (
            <div className="inline-flex mr-5 max-w-180">
              <li
                className="mb-5 rounded-lg overflow-hidden shadow-xl p-3 w-44 h-96 bg-green-100"
                key={id}
              >
                <Image
                  src="/images/no_image.png"
                  width='200'
                  height='200'
                  className='w-24 h-24'
                  alt="no-image"
                />
                <br/>
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
        </ul> */}
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
