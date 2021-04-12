import { Button, Col, Container, Input, Row } from "reactstrap"

const Footer = () => {
    return (
        <Container fluid className="FooterCon">
            <Row>
                <Col className="FooterCol">
                    <Row>
                        <Col md="12" className="mb-2"><strong>Social Media</strong></Col>
                        <Col md="" className="mb-3">
                            <Row>
                                <Col md="1" className="mr-1"><i className="fab fa-instagram"></i></Col>
                                <Col md="1" className="mr-1"><i className="fab fa-facebook-f"></i></Col>
                                <Col md="1" className="mr-1"><i className="fab fa-linkedin-in"></i></Col>
                                <Col md="1" className="mr-1"><i className="fab fa-twitter"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="mb-2">
                            Ⓒ CyberXplore Private Limited 2020
                        </Col>   
                    </Row>
                </Col>
                <Col className="FooterCol">
                    <Col className="mb-2"><strong>Contact Us</strong></Col>
                    <Col className="mb-1">Adress : Punjabi Colony Bilaspur Rampur UP 244921</Col>
                    <Col className="mb-1">Email : support@cyberxplore.com</Col>
                </Col>
                <Col className="FooterCol">
                    <Col className="mb-2"><strong>Our Products and Services</strong></Col>
                    <Col className="mb-1">X-Product</Col>
                    <Col className="mb-1">E-CyberXplore</Col>
                    <Col className="mb-1">CX-Blog</Col>
                    <Col className="mb-1">FreeLancing Services</Col>
                </Col>
                <Col className="FooterCol">
                    <Col className="mb-3">
                        <strong>Subscribe to our newsletter</strong>
                    </Col>
                    <Col className="mb-3">
                        <Input placeholder="Enter email" className="p-4"/>
                    </Col>
                    <Col>
                        <Button className="w-100 p-2" color="light"><strong>Subscribe</strong></Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;