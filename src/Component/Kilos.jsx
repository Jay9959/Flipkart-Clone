import { Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

const Kilos = () => {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between align-items-center text-center mb-3">
                    <div className="kilos-img1">
                        <img src="../src/image/29327f40e9c4d26b.png" width={70} alt="" />
                        <div>
                            <span>Kilos</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/22fddf3c7da4c4f4.png" width={70} alt="" />
                        <div>
                            <span>Mobiles</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/0d75b34f7d8fbcb3.png" width={70} alt="" />
                        <div>
                            <span>Fashion</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/69c6589653afdb9a.png" width={70} alt="" />
                        <div>
                            <span>Electronics</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/ab7e2b022a4587dd.jpg" width={70} alt="" />
                        <div>
                            <span>Home & Furniture</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/0139228b2f7eb413.jpg" width={70} alt="" />
                        <div>
                            <span>Appliances</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/71050627a56b4693.png" width={70} alt="" />
                        <div>
                            <span>Flight Bookings</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/dff3f7adcf3a90c6.png" width={70} alt="" />
                        <div>
                            <span>Beauty, Toys & More</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src="../src/image/05d708653beff580.png" width={70} alt="" />
                        <div>
                            <span>Two Wheelers</span><FaAngleDown />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Kilos;