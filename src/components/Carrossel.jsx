import Carousel from 'react-bootstrap/Carousel';
import carrossel1 from '../img/carrossel1.jpg'
import carrossel2 from '../img/carrossel2.jpg'
import carrossel3 from '../img/carrossel3.jpg'

function Carrossel() {
  return (
    <>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Carrossel;