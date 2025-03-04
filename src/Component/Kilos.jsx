import { Container } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

// image import

import Kiloes from "../image/Kilos.png"
import Mobiles from "../image/Mobiles.png"
import Fashion from "../image/Fashion.png"
import Electronics from "../image/Electronics.png"
import HomeFurniture from "../image/HomeFurniture.jpg"
import Appliances from "../image/Appliances.jpg"
import FlightBookings from "../image/FlightBookings.png"
import BeautyToysMore from "../image/BeautyToysMore.png"
import TwoWheelers from "../image/Two Wheelers.png"

const Kilos = () => {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between align-items-center text-center mb-3">
                    <div className="kilos-img1">
                        <img src={Kiloes} width={70} alt="" />
                        <div>
                            <span>Kilos</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={Mobiles} width={70} alt="" />
                        <div>
                            <span>Mobiles</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={Fashion} width={70} alt="" />
                        <div>
                            <span>Fashion</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={Electronics} width={70} alt="" />
                        <div>
                            <span>Electronics</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={HomeFurniture} width={70} alt="" />
                        <div>
                            <span>Home & Furniture</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={Appliances} width={70} alt="" />
                        <div>
                            <span>Appliances</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={FlightBookings} width={70} alt="" />
                        <div>
                            <span>Flight Bookings</span>
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={BeautyToysMore} width={70} alt="" />
                        <div>
                            <span>Beauty, Toys & More</span><FaAngleDown />
                        </div>
                    </div>
                    <div className="kilos-img1">
                        <img src={TwoWheelers} width={70} alt="" />
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