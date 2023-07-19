"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { userInfo } from "os";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "@/redux/slices/users-app-slice";
import { logout } from "@/redux/slices/auth-slice";

export default function Header() {
  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { push } = useRouter();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      const data = await logoutApiCall("{}").unwrap();
      console.log(data);
      dispatch(logout("{}"));
      push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <Link href="/profile">
                      <NavDropdown.Item as="span">Profile</NavDropdown.Item>
                    </Link>

                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Nav.Link
                      className="flex items-center justify-between"
                      as="span"
                    >
                      <FaSignInAlt className="mr-3" /> Sign In
                    </Nav.Link>
                  </Link>

                  <Link href="/register">
                    <Nav.Link
                      className="flex items-center justify-between"
                      as="span"
                    >
                      <FaSignOutAlt className="mr-3" /> Sign Up
                    </Nav.Link>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
