import About from '@/components/About';
import Category from '@/components/Category';
import Goback from '@/components/Goback';
import ProductClient from '@/components/ProductClient';
import products from '@/lib/data.json'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}


const page = async ({ params }) => {
  
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();


  return (
    <>
      {/* product detail */}
      <section className="max-w-[1110px] mx-auto mt-10 pb-20 sm:mb-0 md:mt-20 padding">
        
        <Goback />

        <div  className='h-[480px] md:h-[590px] flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-20 xl:gap-32'>
      
          {/* Main Product Image */}
          <Image src={product.image.desktop} alt={product.name} width={540} height={560} className='rounded-lg desktop' />
          <Image src={product.image.tablet} alt={product.name} width={281} height={480} className='rounded-lg tablet' />
          <Image src={product.image.mobile} alt={product.name} width={375} height={352} className='rounded-lg block mobile' />

          <div className="flex flex-col gap-6 sm:gap-10">
            {product.new && <h6 className="text-[#D87D4A]">new product</h6>}

            <h2>{product.name}</h2>
            <p className="text-black/50">{product.description}</p>

            <h5>${product.price}</h5>

            <ProductClient product={product}/>
          </div>
        </div>
      </section>


      {/* Feature & in the box */}
      <section className='max-w-[1110px] mx-auto mt-70 sm:mt-28 md:mt-40 flex flex-col md:flex-row items-start justify-between padding gap-28 md:gap-0'>
        <div className="flex flex-col gap-6 items-start max-w-[635px]">
          <h4>Features</h4>

          <p className='text-black/50'>{product.features}</p>
          <p className='text-black/50'>{product.features_two}</p>
        </div>

        {/* IN THE BOX */}
        <div className="w-full md:w-fit flex flex-col sm:flex-row md:flex-col gap-6 sm:gap-40 md:gap-2">
          <h3 className='mb-6'>in the box</h3>

          
          <div className="flex flex-col gap-2">
            {product.includes.map((items, index) => (
              <div key={index} className="flex items-center gap-6">
                <p className='text-[#D87D4A] font-bold'>{items.quantity}x</p>
                <p className='text-black/50 font-medium'>{items.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className='max-w-[1110px] mx-auto mt-40 flex flex-col sm:flex-row gap-8 padding'>

        <div className="flex flex-col gap-8">
          {/* First Image */}
          <Image src={product.gallery.first.desktop} alt='product picture' width={445} height={280}  className='rounded-xl object-cover desktop'/>
          <Image src={product.gallery.first.tablet} alt='product picture' width={277} height={174}  className='rounded-xl object-cover tablet'/>
          <Image src={product.gallery.first.mobile} alt='product picture' width={375} height={174}  className='rounded-xl object-cover mobile'/>

          {/* Second Image */}
          <Image src={product.gallery.second.desktop} alt='product picture' width={445} height={280}  className='rounded-xl object-cover desktop'/>
          <Image src={product.gallery.second.tablet} alt='product picture' width={277} height={174}  className='rounded-xl object-cover tablet'/>
          <Image src={product.gallery.second.mobile} alt='product picture' width={375} height={174}  className='rounded-xl object-cover mobile'/>
        </div>

        <Image src={product.gallery.third.desktop} alt='product picture' width={635} height={592}  className='rounded-xl lg:w-1/2 xl:w-fit object-cover desktop'/>
        <Image src={product.gallery.third.tablet} alt='product picture' width={395} height={368}  className='rounded-xl tablet'/>
        <Image src={product.gallery.third.mobile} alt='product picture' width={395} height={368}  className='rounded-xl mobile'/>
      </section>


      {/* recommendation */}
      <section className='max-w-[1110px] mx-auto mt-28 md:mt-40 pb-20 sm:pb-0 padding'>
        <h4 className='text-center mb-16'>you may also like</h4>

        <div className="flex flex-col sm:flex-row items-center gap-14 sm:gap-8">
          {product.others.map((item, index) => (
            <div key={index} className=" flex flex-col items-center gap-8">
              <Image src={item.image.desktop} alt={item.name} width={350} height={318} className='object-contain rounded-lg desktop'/>
              <Image src={item.image.tablet} alt={item.name} width={223} height={318} className='object-contain rounded-lg tablet'/>
              <Image src={item.image.mobile} alt={item.name} width={395} height={120} className='object-contain rounded-lg mobile'/>

              <span className='text-2xl font-bold tracking-[1.71px]'>{item.name}</span>

              <Link href={`/product/${item.slug}`} className='link-btn btn-1'>see product</Link>
            </div>
          ))}
        </div>
      </section>

      <Category />

      <About />
    </>
  )
}

export default page