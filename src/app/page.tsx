import {AppNavigation} from '@/components/app-navigation'
import {AppFooter} from '@/components/app-footer'
import {HeroSection}  from '@/components/hero-section'

export default function Home() {
  return (
    <main className=''>
        <AppNavigation/>
      <div className='flex flex-col gap-3 items-center h-full min-h-screen mt-4'>
        <HeroSection/>
      </div>
        <AppFooter/>
    </main>
  )
}
