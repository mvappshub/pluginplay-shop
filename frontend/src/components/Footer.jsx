import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                            <p>Copyright &copy; {currentYear} PluginPlay</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
