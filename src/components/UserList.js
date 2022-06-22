import React from 'react';
import {Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const UserList = () => {
  return (
    <ListGroup className='mt-4'>
        <ListGroupItem className='d-flex'>
            <strong>Usuário um</strong>
            <div className='ml-auto'>
                <Link className='btn btn-warning mr-1' to='/edit/1'>Editar</Link>
                <Button color='danger'>Deletar</Button>
            </div>
        </ListGroupItem>

        <ListGroupItem className='d-flex'>
            <strong>Usuário dois</strong>
            <div className='ml-auto'>
                <Link className='btn btn-warning mr-1' to='/edit/2'>Editar</Link>
                <Button color='danger'>Deletar</Button>
            </div>
        </ListGroupItem>
    </ListGroup>
  )
}
