import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <h1>Slide 1</h1>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Slide 2</h1>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Slide 3</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider; 
