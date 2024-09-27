import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navegacion({tit, enlaces}) {
    //console.log(enlaces);
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">{tit}</Navbar.Brand>
                <Nav className="me-auto">
                    {enlaces.map((e) =>
                        <Nav.Link key={e} href={'#'+e}>{e}</Nav.Link>
                    )}
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navegacion;