import { Icons } from '@/constant/icons'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';

const About = () => {
   return (
      <section className='padding'>
         <div className="container">
            <div className="grid grid-cols-12">
               <div className="col-span-6 relative">
                  <PlayIcon className='absolute inset-0 w-[31rem]' />
                  <div className='relative h-44 w-[21rem] rotate-[39deg] mt-28 ml-20'>
                     <Image src='/AIR+JORDAN+1+MID+SE-r.png' className='object-cover' fill alt='nike' />
                  </div>
               </div>
               <div className="col-span-6 space-y-5">
                  <h2 className='h1-semibold'>This the About Section</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis sit dolore ratione harum nobis eligendi quia veniam doloribus, quibusdam deserunt blanditiis labore deleniti facilis magnam maxime facere vel in!</p>
                  <Button>Ler Mais</Button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
