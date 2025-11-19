import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid="xl">
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="w-100 justify-content-between">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}