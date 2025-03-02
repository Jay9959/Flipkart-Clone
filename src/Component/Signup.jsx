import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupAsync } from "../services/Action/Auth";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSignup } = useSelector(state => state.authReducer);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            setError("Password and Confirm Password do not match");
            return;
        }
        const otpCode = Math.floor(100000 + Math.random() * 900000); 
        setGeneratedOtp(otpCode);
        setShowOtp(true);
        alert(`Your OTP is: ${otpCode}`);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp === generatedOtp.toString()) {
            alert("Signup successful!");
            dispatch(signupAsync(email, password));
            navigate("/login");
        } else {
            setError("Invalid OTP. Please try again.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <Card className="p-4 shadow rounded w-100" style={{ maxWidth: "400px" }}>
                <Card.Body>
                    {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                    <h2 className="text-center mb-4 fw-bold">{showOtp ? "Enter OTP" : "Sign Up"}</h2>

                    {!showOtp ? (
                        <Form onSubmit={handleSignupSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={cpassword}
                                    onChange={(e) => setcPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100">
                                Sign Up
                            </Button>
                        </Form>
                    ) : (
                        <Form onSubmit={handleOtpSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button variant="success" type="submit" className="w-100">
                                Verify OTP
                            </Button>
                        </Form>
                    )}

                    {!showOtp && (
                        <p className="text-center text-muted mt-3">
                            Already have an account? <Link to="/login" className="text-primary">Login</Link>
                        </p>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}
