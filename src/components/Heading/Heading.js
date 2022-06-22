import React from 'react';
import {Link} from 'react-router-dom';
import style from "./style.module.scss";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';
export const Heading = () => {
  return (
    <Navbar color="dark" dark>
        <Container className={style.container1}>
            <NavbarBrand href='/' className={style.navbarBrand}>Meu time</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className='btn btn-primary' to="/add">Add usuário</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

