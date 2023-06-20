import InfoContainer from '../InfoContainer/InfoContainer'
import TitleContainer from '../TitleContainer/TitleContainer'
import Fancy from "../Fancy/Fancy"
import Button from "../Button/Button"
import ServicesListContainer from "../ServicesListContainer/ServicesListContainer"


const About = () => {

    return (
       
        <div>
           <Fancy />
            <TitleContainer>
                <h2 className="text-primary">About Us</h2>
            </TitleContainer> 
            <InfoContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores eveniet incidunt possimus ut veritatis officiis, facilis libero sunt nulla dicta sequi quo quaerat eius accusantium quam. Esse, saepe iure!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores eveniet incidunt possimus ut veritatis officiis, facilis libero sunt nulla dicta sequi quo quaerat eius accusantium quam. Esse, saepe iure!
                
            </InfoContainer>  

            <Button/>
                
            <ServicesListContainer />
        </div>
    )
}

export default About