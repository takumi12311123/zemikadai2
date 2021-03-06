import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export const Header = () => {
  const user = "takumi akasaka";

  return (
    <BrowserRouter>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">fullstack app</Navbar.Brand>
          <Navbar.Toggle />
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={`/following`}>Following</Nav.Link>
          <Nav.Link href={`/user`}>MyPage</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};
