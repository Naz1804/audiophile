import Category from "@/components/Category";
import Image from "next/image";
import zx9 from '../public/assets/home/desktop/image-speaker-zx9.png'
import earphones from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import earTab from '@/public/assets/home/tablet/image-earphones-yx1.jpg'
import earMob from '@/public/assets/home/mobile/image-earphones-yx1.jpg'
import Link from "next/link";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <main className="w-full">
      <div className="max-w-[1110px] h-full mx-auto flex items-center justify-center md:justify-start padding">
        
        <div className="flex flex-col gap-4 max-w-[398px] center">
          <h6 className="text-white/50">NEW PRODUCT</h6>
          <h1>
            XX99 MARK II <br/>
            HEADPHONES
          </h1>

          <p className="text-white/75 text-[15px] font-medium leading-6">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>

          <Link href='/product/xx99-mark-two-headphones' className="link-btn btn-1">SEE PRODUCT</Link>
        </div>
      </div>
    </main>

    <Category />


    <section className="w-full max-w-[1110px] mx-auto mt-32 padding">

      {/* ZX9 Headphones */}
      <div className="flex flex-col md:flex-row items-center justify-end gap-16 circle">
        <Image src={zx9} alt="zx9 speaker" className="md:absolute left-[10%] -bottom-2 
        w-[172px] h-[207px] sm:w-[197px] sm:h-[237px] md:w-[390px] md:h-[493px]" />

        <div className="max-w-[349px] flex flex-col gap-6 center">
          <h1>
            ZX9 <br/>
            SPEAKER
          </h1>

          <p className="font-medium text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>

          <Link href='/product/zx9-speaker' className="link-btn btn-b">see product</Link>
        </div>
      </div>
      

      {/* ZX7 Speaker */}
      <div className="speaker-table flex flex-col items-start justify-center pl-20 gap-8">
          <h3>zx7 speaker</h3>
          <Link href='/product/zx7-speaker' className="link-btn btn-2">see product</Link>
      </div>
      

      {/* YX1 Earphones */}
      <div className="flex flex-col sm:flex-row gap-8 h-[320px] mt-12">
        
        <picture className="h-full w-full">
          <source media="(max-width: 640px)" srcSet={earMob.src} />
          <source media="(max-width: 789px)" srcSet={earTab.src} className="w-[339px]" />
          <Image src={earphones} alt="yx1 earphones" className="rounded-lg h-full w-full"  />
        </picture>

        <div className="bg-[#F1F1F1] rounded-lg w-full gap-8 pl-6 sm:pl-10 md:pl-24 py-10 sm:py-0
        flex flex-col items-start justify-center">
          <h3>yx1 earphones</h3>
          <Link href='/product/yx1-earphones' className="link-btn btn-2">see product</Link>
        </div>
      </div>
    </section>

    <About />
    </>
  );
}