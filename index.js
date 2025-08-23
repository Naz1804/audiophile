import headphones_thumbnail from './public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers_thumbnail from './public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones_thumbnail from './public/assets/shared/desktop/image-category-thumbnail-earphones.png'

//HEADPHONES
import xx99ii from './public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99 from './public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59 from './public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import xx99iiTab from './public/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import xx99Tab from './public/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx59Tab from './public/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx99iiMob from './public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import xx99Mob from './public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import xx59Mob from './public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'


//SPEAKERS
import zx9 from './public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx7 from './public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx9Tab from './public/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx7Tab from './public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx9Mob from './public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import zx7Mob from './public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'

//EARPHONES
import yx1 from './public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import yx1Tab from './public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1Mob from './public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'

const category = [
    {
        id: 1,
        image: headphones_thumbnail,
        title: 'headphones',
        slug: 'headphones'
    },
    {
        id: 2,
        image: speakers_thumbnail,
        title: 'speakers',
        slug: 'speakers'
    },
    {
        id: 3,
        image: earphones_thumbnail,
        title: 'earphones',
        slug: 'earphones'
    }
]

const data = {
    headphones: [
        {
            id: 1,
            image: xx99ii,
            tablet: xx99iiTab,
            mobile: xx99iiMob,
            name: 'xx99 mark ii headphones',
            detail: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            new_product: true,
            slug: 'xx99-mark-two-headphones'
        },
        {
            id: 2,
            image: xx99,
            tablet: xx99Tab,
            mobile: xx99Mob,
            name: 'xx99 mark i headphones',
            detail: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            slug: 'xx99-mark-one-headphones'
        },
        {
            id: 3,
            image: xx59,
            tablet: xx59Tab,
            mobile: xx59Mob,
            name: 'xx59 headphones',
            detail: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            slug: 'xx59-headphones'
        }
    ],
    speakers: [
        {
            id: 1,
            image: zx9,
            tablet: zx9Tab,
            mobile: zx9Mob,
            name: 'zx9 speaker',
            detail: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            new_product: true,
            slug: 'zx9-speaker'
        },
        {
            id: 2,
            image: zx7,
            tablet: zx7Tab,
            mobile: zx7Mob,
            name: 'zx7 speaker',
            detail: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
            slug: 'zx7-speaker'
        }
    ],
    earphones: [
        {
            id: 1,
            image: yx1,
            tablet: yx1Tab,
            mobile: yx1Mob,
            name: 'yx1 wireless earphones',
            detail: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            new_product: true,
            slug: 'yx1-earphones'
        }
    ]
}

export { category, data };