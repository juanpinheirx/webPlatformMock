import { Carousel } from 'react-bootstrap';
import { CarouselImg } from './subComponentsCarousel/CarouselImg.jsx';
import { CarouselImg2 } from './subComponentsCarousel/CarouselImg2.jsx';
import { CarouselImg3 } from './subComponentsCarousel/CarouselImg3.jsx';
import './CarouselDiv.css';

export const CarouselDiv = () => {
  return (
    <div id='carousel-div'>
      <Carousel>
        <Carousel.Item interval={1000} text='First slide'>
          <CarouselImg />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>First slide text</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} text='Second slide'>
          <CarouselImg2 />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Second slide text</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} text='Third slide'>
          <CarouselImg3 />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Third slide text</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
