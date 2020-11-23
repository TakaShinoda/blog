// pages/404.js
import { Layout } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>404 - Sorry, Page Not Found</h1>
    </Layout>
  )
}
