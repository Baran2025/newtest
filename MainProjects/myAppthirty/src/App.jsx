import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imageOne from './components/images/1.jpg';
import imageTwo from './components/images/2.jpg';
import imageThree from './components/images/3.jpg';
  




function App() {


  return (
    <>

    <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}  spaceBetween={50} >
    
        <SwiperSlide>
          <img src={imageOne} height={600} width={1400} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imageTwo } height={600} width={1400}  />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imageThree } height={600} width={1400}  />
        </SwiperSlide>
      </Swiper>
   
    
    </>
  )
}

export default App