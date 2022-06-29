import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import style from './style.module.scss'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export const UserList = () => {
    const {users} = useContext(GlobalContext);
    console.log(users);
  return (
    <ListGroup className='mt-4'>
        {users.map(user=>(
            <ListGroupItem className='d-flex'>
                <strong>{user.name}</strong>
                <div className='ml-auto'>
                    <Button className={style.buttonEdit} variant="warning"><Link to='/edit/1'>Editar</Link></Button>
                    <Button variant='danger'>Deletar</Button>
                </div>
            </ListGroupItem>
        ))}

    </ListGroup>
  )
}
