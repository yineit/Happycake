import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <>
            <Navbar bg="danger" variant="danger">
                <Container>
                    <Navbar.Brand className="text-white" href="#home">Happy Cake</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                            Home</Link>
                        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                            Contacto</Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Menu;