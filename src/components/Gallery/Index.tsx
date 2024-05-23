import { Container, ContainerImage, ImageGallery } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation} from 'swiper/modules';

export function Gallery() {
  return (
    <Container>
         <Swiper loop style={{padding: "0 47px"}} 
          navigation={true} className="mySwiper" 
          modules={[Navigation]} 
          slidesPerView={3} 
          spaceBetween={300}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}>
                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-1.jpg' />
                    </ContainerImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-2.jpg' />
                    </ContainerImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-3.jpg' />
                    </ContainerImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-1.jpg' />
                    </ContainerImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-2.jpg' />
                    </ContainerImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ContainerImage>
                      <ImageGallery width={400} height={400}  src='/images/gallery-3.jpg' />
                    </ContainerImage>
                  </SwiperSlide>
                  
                </Swiper>
    </Container>
  )
}
