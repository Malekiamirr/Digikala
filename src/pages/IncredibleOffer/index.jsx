import React from 'react';
import { MainLayout } from '../../layouts';

const swiper = [
  {
    id: 1,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/a15f93934a05ccb2e1d3adad1ba66c627469f633_1689622443.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 2,
    title: 'کمپین Big Prize - تیرماه 1402',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/e16e2c505702a95ba33bee0bbcac7a4a036ab008_1689621278.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: 3,
    title: 'پارتنرشیپ-داریاهمراه',
    image:
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/59284b92243c4144eeaf1cb752d51a0a3b8b24f3_1689519656.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
];

function IncredibleOfferPage() {
  return (
    <div>
      <MainLayout
        swiper={swiper}
        amazingPhoto={
          'https://www.digikala.com/statics/img/png/specialCarousel/General.png'
        }
      />
    </div>
  );
}

export default IncredibleOfferPage;
