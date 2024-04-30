import Image from 'next/image'
import Header from './components/Header/Header'
import Github from '@/app/components/Github'
import About from '@/app/components/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className='py-5 w-screen flex flex-col justify-center items-center gap-12'>
        <Image src='/profile.jpeg' alt='Profile Picture' width={200} height={200} className='rounded-full' />
        <div className='grid gap-12'>
          <h1 className='text-center text-3xl'>Nicholas Hellmers Davalos</h1>
          <h3 className='text-center text-2xl'>Software Engineer</h3>
        </div>
      </div>

      <About />

      {/* <Resume /> */}

      <Projects />

      {/* @ts-expect-error Server Component */}
      <Github />

      <Footer />
      
    </>
  )
}