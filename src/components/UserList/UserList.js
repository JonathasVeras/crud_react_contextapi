import React from 'react';
import {Link} from 'react-router-dom';
import style from './style.module.scss'
import Button from 'react-bootstrap/Button';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export const UserList = () => {
  return (
    <ListGroup className='mt-4'>
        <ListGroupItem className='d-flex'>
            <strong>Usuário um</strong>
            <div className='ml-auto'>
                <Button className={style.buttonEdit} variant="warning"><Link to='/edit/1'>Editar</Link></Button>
                <Button variant='danger'>Deletar</Button>
            </div>
        </ListGroupItem>

        <ListGroupItem className='d-flex'>
            <strong>Usuário dois</strong>
            <div className='ml-auto'>
                <Button variant="warning" className={style.buttonEdit}><Link to='/edit/2'>Editar</Link></Button>
                <Button variant='danger'>Deletar</Button>
            </div>
        </ListGroupItem>
    </ListGroup>
  )
}
