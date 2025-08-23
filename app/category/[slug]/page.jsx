import { notFound } from "next/navigation";
import { data } from "@/index"
import Image from "next/image";
import Category from "@/components/Category";
import Link from "next/link";
import About from "@/components/About";

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({slug}))
}

const page = async ({ params }) => {
  const categoryData = data[params.slug];
  if (!categoryData) return notFound();

  return (
    <>
      <div className="h-[239px] bg-[#191919] flex items-center justify-center">
        <h2 className="text-white">{params.slug}</h2>
      </div>

      <div className="max-w-[1110px] mx-auto flex flex-col gap-[120px] mt-16 sm:mt-[120px] md:mt-40 padding pb-[100px] md:pb-0">
        {categoryData.map((products) => (
          <div key={products.id} className={`min-h-[590px] flex flex-col md:flex-row items-center justify-between 
          gap-8 sm:gap-12 md:gap-20 xl:gap-32 ${products.id == 2 ? 'md:flex-row-reverse' : ''}`}>

            <picture className="w-full">
              <source media="(max-width: 640px)" srcSet={products.mobile.src} />
              <source media="(max-width: 780px)" srcSet={products.tablet.src} />
              <Image src={products.image} alt={products.name} width={540} height={560} className='rounded-lg w-full' />
            </picture>

            <div className="flex flex-col gap-6 sm:gap-10 center max-w-[572px]">
              {products.new_product && <h6 className="text-[#D87D4A]">new product</h6>}

              <h2>{products.name}</h2>
              <p className="text-black/50">{products.detail}</p>

              <Link href={`/product/${products.slug}`} className="link-btn btn-1">see product</Link>
            </div>
          </div>
        ))}
      </div>

      <Category />

      <About />
    </>
  )
}

export default page