import Image from 'next/image'
import picture from '../public/assets/shared/desktop/image-best-gear.jpg'
import pictureTab from '@/public/assets/shared/tablet/image-best-gear.jpg'
import pictureMob from '@/public/assets/shared/mobile/image-best-gear.jpg'

const About = () => {
  return (
    <section className="w-full py-[120px] md:py-52 padding">
      <div className="max-w-[1110px] h-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 xl:gap-8">

        <div className="w-full max-w-[573px] md:max-w-[445px] flex flex-col gap-8 center">
          <h2>
            BRINGING YOU THE 
            <span className="text-[#D87D4A]"> BEST </span> 
            AUDIO GEAR
          </h2>

          <p className="text-black/50 font-medium">
            Located at the heart of New York City, 
            Audiophile is the premier store for high end headphones, earphones, speakers, 
            and audio accessories. We have a large showroom and luxury demonstration rooms available for you 
            to browse and experience a wide range of our products. Stop by our store to meet some of the 
            fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <picture className='w-fit h-full'>
          <source media='(max-width: 640px)' srcSet={pictureMob.src}  />
          <source media='(max-width: 780px)' srcSet={pictureTab.src}  />
          <Image src={picture} alt='picture' width={540} height={588} className='rounded-md w-full md:w-[540px] ' />
        </picture>
      </div>
    </section>
  )
}

export default About