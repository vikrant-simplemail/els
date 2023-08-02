import Image from 'next/image'
import Header from '../components/Header'
import Landing from '@/components/Landing'
import '../styles/globals.css';


export default function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <Landing />
    </div>
    
  )
}
