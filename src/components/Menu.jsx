import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >      
            
              <Nav.Link href="/home">Accueil</Nav.Link>

              <Nav.Link href="/dashboard/index">Dashboard</Nav.Link>

              <NavDropdown title="Articles" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard/articles/add">
                  Créer un nouvel article
                </NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/articles">
                  Liste des articles
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Type de lieu" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard/placeTypes/add">
                  Créer un nouveau type de lieu
                </NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/placeTypes">
                  Liste des type de lieu
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Lieu" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard/places/add">
                  Créer un nouveau lieu
                </NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/places">
                  Liste des lieux
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Menu;
