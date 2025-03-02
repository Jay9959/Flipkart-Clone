import { Carousel } from "react-bootstrap";

const Sliders = () => {
    return (
        <Carousel interval={2000} controls={false} indicators={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src="../src/image/7f3cde58a30f6024.jpg"
                    alt="Banner 1"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src="../src/image/1ef81f497320ac22.jpeg"
                    alt="Banner 2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 rounded shadow-lg"
                    src="../src/image/912c93218db5310a.jpeg"
                    alt="Banner 3"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;