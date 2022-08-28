import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Follower } from "../follow/follower";
import { Following } from "../follow/following";

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
          {/* ここに、userのfollowingとfollowerを作成したい */}
          <Follower />
          <Following />
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};
