import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imageOne from './images/4.jpg';
import imageTwo from './images/5.jpg';
import imageThree from './images/6.jpg';


const Carousel = () => {
    return (

        <div >
          
            <Swiper  navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} spaceBetween={50} >

                <SwiperSlide>
                    <img src={imageOne} height={600} width={1400} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={imageTwo} height={600} width={1400} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={imageThree} height={600} width={1400} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Carousel
