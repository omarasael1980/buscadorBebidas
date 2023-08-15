import { Modal,Image, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"


const DrinkModal = () => {
    const {modal,handleModalClick, recipe, loading} = useDrinks()
    const {strDrinkThumb, strDrink, strInstructions} =recipe

    const showIngredients =()=>{
      let ingredients =[]
      for(let i=1; i<16; i++){
       if(recipe[`strIngredient${i}`] != null){
        ingredients.push(
         <li> {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
          )
       }
      }
      return ingredients
    }
  return (
    !loading && (
    <Modal 
        show={modal} 
        onHide={()=>handleModalClick()}>
            <Image src={strDrinkThumb} alt={`${strDrink} image`}/>
            <ModalHeader>
              <ModalTitle className="text-center">{strDrink}</ModalTitle>

            </ModalHeader>
            <ModalBody>
               <div className="p-3">
                <h2>Instructions:</h2>
                {strInstructions}
                <h2>Ingredients:</h2>
                {showIngredients()}
               </div>
            </ModalBody>
    </Modal>)
  )
}

export default DrinkModal
