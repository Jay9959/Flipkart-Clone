import { Container, Row, Col } from "react-bootstrap";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <Container>
            <footer className="p-4">
                <Row className="g-4 border-top">
                    <Col xs={12} sm={6} md={3}>
                        <h5>Flipkart Clone</h5>
                        <p>
                            The best place to shop for amazing deals on your favorite products.
                        </p>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled ">
                            <li className="text-decoration-none">About Us</li>
                            <li className="text-decoration-none">Careers</li>
                            <li className="text-decoration-none">Privacy Policy</li>
                            <li className="text-decoration-none">Terms & Conditions</li>
                        </ul>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <h5>Customer Support</h5>
                        <ul className="list-unstyled ">
                            <li className="text-decoration-none">Help Center</li>
                            <li className="text-decoration-none">Shipping & Delivery</li>
                            <li className="text-decoration-none">Returns & Refunds</li>
                            <li className="text-decoration-none">Contact Us</li>
                        </ul>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <h5>Follow Us</h5>
                        <div className="d-flex gap-3 mt-2">
                            <FiFacebook size={40} className="bg-danger text-white p-2 rounded-circle" />
                            <FiTwitter size={40} className="bg-danger text-white p-2 rounded-circle" />
                            <FiInstagram size={40} className="bg-danger text-white p-2 rounded-circle" />
                            <FiLinkedin size={40} className="bg-danger text-white p-2 rounded-circle" />
                        </div>
                    </Col>
                </Row>

                <div className="text-center mt-4 border-top pt-3">
                    © {new Date().getDate()} Flipkart Clone.
                </div>
            </footer>
        </Container>
    );
};

export default Footer;