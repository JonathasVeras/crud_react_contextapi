import React from 'react';
import {Link} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

export const EditUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Nome</Label>
        <Input type='text' placeholder='Colocar nome'></Input>
      </FormGroup>
      <Button type='submit'>Editar nome</Button>
      <Link to="/" className='btn btn-danger ml-2'>Cancelar</Link>
    </Form>
  )
}
