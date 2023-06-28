// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const showSwiper = ({sliders}) => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {  sliders.map(swiperItem=> 
          <SwiperSlide key={swiperItem.id}>
            <img src={swiperItem.image} alt={swiperItem.title} title={swiperItem.title} />
          </SwiperSlide>)
        }
      </Swiper>
    );
}

export default showSwiper;
