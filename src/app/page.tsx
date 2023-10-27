import {AppNavigation} from '@/components/app-navigation'
import {AppFooter} from '@/components/app-footer'
import {HeroSection}  from '@/components/hero-section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='absolute'>
      <div className='relative flex flex-column gap-6 items-center content-center'>
        <AppNavigation/>
        <HeroSection/>
        <AppFooter/>
      </div>
    </main>
  )
}
