import{Col, Button,  Card} from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
const Drink = ({drink}) => {
const {strDrink, strDrinkThumb, idDrink}=drink
const {handleModalClick,handleDrinkIdClick} = useDrinks()

  return (
    <Col sm={6} md={4} lg={3}>
        <Card className="mb-4 ">
            <Card.Img
                variant="top"
                src={strDrinkThumb}
                alt ={`${strDrink} image`}/>
            <Card.Body>
                <Card.Title className="text-center">{strDrink}</Card.Title>
                <Card.Text>Algo mas</Card.Text>
                <Button 
                className="form-control text-uppercase mt-2"
                variant={'warning'}
                onClick={()=>{
                    handleModalClick()
                    handleDrinkIdClick(idDrink)
                    
                }}
                >Drink Recipe</Button>
            </Card.Body>
        </Card>
       
    </Col>
  )
}

export default Drink
