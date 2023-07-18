import React from 'react';
import { MainLayout } from '../../layouts';

const swiper = [
  {
    id: 1,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/ab7a194eb65c3c85854c82a9096c1aeb1d7420d5_1667982004.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 2,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/88e7d7d654e6e5111e5d6098d84414c4a7fa341f_1667981540.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 3,
    title: 'پارتنرشیپ-داریاهمراه',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/d5d601e88b55950b4df781ca96c5722ad48480c6_1667981033.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
];

function BestSellingPage() {
  return (
    <div>
      <MainLayout
        swiper={swiper}
        amazingPhoto={
          'https://www.digikala.com/statics/img/png/specialCarousel/General.png'
        }
        amazingColor={{ color1: '#392d69', color2: '#b57bee' }}
      />
    </div>
  );
}

export default BestSellingPage;
