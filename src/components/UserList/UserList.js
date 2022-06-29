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
    const {users, removeUser} = useContext(GlobalContext);
    console.log(users);
  return (
    <ListGroup className='mt-4'>
        {users.map(user=>(
            <ListGroupItem className='d-flex'>
                <strong>{user.name}</strong>
                <div className='ml-auto'>
                    <Button className={style.buttonEdit} variant="warning"><Link to={`/edit/${user.id}`}>Editar</Link></Button>
                    <Button onClick={()=>removeUser(user.id)} variant='danger'>Deletar</Button>
                </div>
            </ListGroupItem>
        ))}

    </ListGroup>
  )
}
