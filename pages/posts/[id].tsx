// [ で始まり ] で終わるページは、Next.js では動的なページになります。

import { Layout } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { Date } from '../../components/date'
import { FaRegCalendarAlt } from 'react-icons/fa'

// getStaticProps、getStaticPaths、getServerSideProps 用の型
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    image?: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='text-3xl font-extrabold mt-4 mb-4 tracking-tighter'>{postData.title}</h1>
        <div className='text-gray-400 mb-2'>
          <span className='mr-1'>
            <FaRegCalendarAlt />
          </span>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

// idがとりうる値のリストを返す
// fallbackがfalseであれば、getStaticPaths から return されていないあらゆるパスはアクセスすると 404 ページ になります。
// fallback が true であれば、getStaticProps の挙動は異なります詳しくはドキュメントhttps://nextjs.org/docs/basic-features/data-fetching#fallback-pages
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
