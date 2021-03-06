import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const name = 'Takahiro Shinoda'
export const siteTitle = 'blog.takashinoda'

export const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) => {
  return (
    <div className="max-w-xl pl-4 pr-4 mt-12 ml-auto mr-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is the personal blog site of takashinoda."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              width="200"
              height="200"
              className="w-24 h-24 rounded-full"
              alt={name}
            />
            <h1 className="text-4xl font-extrabold tracking-tight mt-4 mb-4">
              {siteTitle}
            </h1>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
