import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../services/Action/ProductAction";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <Container fluid className="py-4">
            <Container>
                <Slider />

                <Row className="mt-4 g-4">
                    {products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card className="bg-dark-subtle border-0 text-dark text-light w-100 h-100">
                                <Card.Img variant="top" src={product.image} width={100} height={350} alt={product.title} className="p-3" />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="primary" onClick={() => navigate(`/ViewProduct/${product.id}`)}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Pagination className="justify-content-center mt-4">
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <FiChevronLeft />
                    </Pagination.Prev>
                    <Pagination.Item active>{currentPage}</Pagination.Item>
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <FiChevronRight />
                    </Pagination.Next>
                </Pagination>
            </Container>
        </Container>
    );
};

export default Home