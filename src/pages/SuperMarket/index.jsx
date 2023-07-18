import React from 'react';
import { MainLayout } from '../../layouts';

const swiper = [
  {
    id: 1,
    title: 'پارتنرشیپ-غنچه',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/cc99bfb51b3f5ccd5dfd23984a0a6fb8e12690b5_1689504993.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 2,
    title: 'خرمای تنظیم بازار',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/38634a6e7a68e9deeef3b08911ed342cabf9ac16_1681907771.jpg?x-oss-process=image/quality,q_95',
  },
  {
    id: 3,
    title: 'پلاس پروموشن - ',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/9912727ae01ff0820f81627481c703e2791f4665_1683040432.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
];

function SuperMarketPage() {
  return (
    <div>
      <MainLayout
        swiper={swiper}
        amazingColor={{ color1: '#9dc44d', color2: '#6bb927' }}
        amazingPhoto={
          'https://www.digikala.com/statics/img/png/specialCarousel/Supermarket2.png'
        }
      />
    </div>
  );
}

export default SuperMarketPage;
