import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Oi, meu nome é Nicholas Alves. Eu sou aspirante a Desenvolvedor Fullstack Web e Mobile com as tecnologias React, React Native, Node.js e, agora, Next.js :P.</p>
        <p> Atualmente eu estou no 4º semestre do curso de Análise e Desenvolvimento de Sistemas na FATEC Ferraz de Vasconcelos.</p>
        <a href="https://github.com/Nicholas-Alves" target="_blank">GitHub</a>
        <br/>
        <a href="https://www.linkedin.com/in/nicholas-alves/" target="_blank">LinkedIn</a>
        <br/>
        E-mail: nicholas.alves@fatec.sp.gov.br
        <br/>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}