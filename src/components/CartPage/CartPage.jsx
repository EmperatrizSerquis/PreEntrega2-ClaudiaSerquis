import InfoContainer from '../InfoContainer/InfoContainer'
import TitleContainer from '../TitleContainer/TitleContainer'
import Fancy from "../Fancy/Fancy"
import Button from "../Button/Button"
import ServicesListContainer from "../ServicesListContainer/ServicesListContainer"


const CartPage = () => {

    return (
       
        <div>
           <Fancy />
            <TitleContainer>
                <h2 className="text-primary">Cart Detail</h2>
                
            </TitleContainer> 
            <InfoContainer>
                Keep in Touch
                <p>mail@mail.com</p>
            </InfoContainer> 
            
            <Button/>
            
            <ServicesListContainer />
        </div>
    )
}

export default CartPage