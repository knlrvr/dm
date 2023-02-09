import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>DM Resources</title>
        <meta name="description" content="ee err" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 h-full">
        <Hero />
        <Resources />
        <div className="bg-white dark:bg-gray-900 p-10 max-w-5xl mx-auto">
          <p className="mt-2 py-4 mb-8 text-gray-500 dark:text-gray-400 p-10 text-sm font-thin border-2 border-gray-400 dark:border-gray-400">
            <em><strong>
              These resources contain more than a few links to D&D Beyond. 
              I am currently working to replace these links with reputable and consistent alternatives.
              Links will update as new resources are found. Thanks!
            </strong></em>
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
