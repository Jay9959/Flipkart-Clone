import { Carousel } from "react-bootstrap";
import image1 from '../image/7f3cde58a30f6024.jpg'
import image2 from '../image/1ef81f497320ac22.jpeg'
import image3 from '../image/912c93218db5310a.jpeg'

const Sliders = () => {
    return (
        <Carousel interval={2000} controls={false} indicators={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={image1}
                    alt="Banner 1"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={image2}
                    alt="Banner 2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={image3}
                    alt="Banner 3"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;