import { useState } from 'react'
import {Button, Form, Row, Col, Alert} from 'react-bootstrap'
import useCategories from '../hooks/useCategories'
import useDrinks from '../hooks/useDrinks'
const Formulario = () => {
    const [alert, setAlert] = useState('')
    const [search, setSearch] =useState({
        name:'',
        category:''
    })
    const {categories} = useCategories()
    const {getDrinks} = useDrinks()
    const handleSubmit = e=>{
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('All fields are required')
            return
        }
        setAlert('')
        getDrinks(search)
    }
    //console.log(getDrinks)
     
  return (
    <Form  
        onSubmit={handleSubmit}>
            {alert && <Alert className='text-center ' variant='danger'>{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Drink names</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Tequila, Vodka...'
                            name='name'
                            id='name'
                            value={search.name}
                            onChange={e=>setSearch({
                                ...search,
                                [e.target.name]:e.target.value
                            })}
                            />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className='mb-3'>
                        <Form.Label htmlFor='category'>Drink Category</Form.Label>
                        <Form.Select 
                            name='category'
                            id='category'
                            value={search.category}
                            onChange={e=>setSearch({
                                ...search,
                                [e.target.name]:e.target.value
                            })}>
                            <option >-- Select a Category--</option>
                            
                            {categories.map(category=>(
                                <option 
                                value={category.strCategory}
                                key={category.strCategory}
                                >{ category.strCategory}</option>
                                
                            
                                
                            ))}
                        </Form.Select>
                        
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >Find recipe</Button>
                </Col>
            </Row>
      
    </Form>
  )
}

export default Formulario
