import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  const user = "takumi akasaka";
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">fullstack app</Navbar.Brand>
        <Navbar.Toggle />
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">Following</Nav.Link>
        <Nav.Link href="#pricing">MyPage</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
