import Image from 'next/image'
import { Hero, Browsecategories, Aboutinscription, Featuredcategories, Homerecentblogs, Homesupport, Popularservice } from './partials/Landingpage'

function Home() {

  return (
    <>
      <main className="section-hero  pt-[var(--headerHeight)] min-h-[90vh] flex items-center relative">
        <nav className='absolute z-0 inset-0 bg-black/10'>

        </nav>
        <section className=' w-full max-w-7xl mx-auto h-full   '>
          <Hero />
        </section>
      </main>
      <Featuredcategories />
      <Browsecategories />
      <Homerecentblogs />
      <Homesupport />
      <Popularservice />
    </>
  )
}


export default Home
