import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'
import { category } from '..'
import Image from 'next/image'
import Link from 'next/link'

const Category = () => {
  return (
    <section className='max-w-[1110px] mx-auto mt-28 sm:mt-36 md:mt-48 flex flex-col sm:flex-row items-center justify-between 
    gap-20 sm:gap-8 padding'>
      {category.map(item => (
        <div key={item.id} className="bg-[#F1F1F1] max-w-[350px] w-full h-52
        flex flex-col items-center justify-end pb-6 rounded-lg relative gap-2">

          <Image src={item.image} alt={item.title} 
          className={`absolute ${item.title} object-contain w-[200px] h-[200px]`}/>

          <h5 className='text-black'>{item.title}</h5>

          <Link href={`/category/${item.slug}`} className='link-btn btn-3 flex items-center justify-between gap-3'>
            SHOP
            <Image src={arrow} alt='arrow' width={7} height={10}/>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Category