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
        <Container className='d-flex'>
            <NavbarBrand href='/' className={style.navbarBrand}>Meu time</NavbarBrand>
            <Nav className='ml-5'>
                <NavItem>
                    <Link className='btn btn-primary' to="/add">Add usuário</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

