import { Carousel } from "react-bootstrap";
import Slider1 from '../image/Slider1.jpg'
import Slider2 from '../image/Slider2.jpeg'
import Slider3 from '../image/Slider3.jpeg'

const Sliders = () => {
    return (
        <Carousel interval={2000} controls={false} indicators={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={Slider1}
                    alt="Banner 1"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={Slider2}
                    alt="Banner 2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src={Slider3}
                    alt="Banner 3"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;