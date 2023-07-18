import React from 'react';
import { MainLayout } from '../../layouts';

const swiper = [
  {
    id: 1,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/ae91fc3fe3014303a0abd009451179c2e0a0e12b_1687154013.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 2,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/e2b871a916e11239f6b4831e9f2a5e3a569b5323_1687156919.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 3,
    title: 'پارتنرشیپ-داریاهمراه',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/16c3399e64ba55cde359576c8eabd4b1d0d4159d_1687157611.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
];

function PromotionCenterPage() {
  return (
    <div>
      <MainLayout
        swiper={swiper}
        amazingPhoto={
          'https://www.digikala.com/statics/img/png/specialCarousel/Fashion.png'
        }
        amazingColor={{ color1: '#00b4b0', color2: '#009db0' }}
      />
    </div>
  );
}

export default PromotionCenterPage;
