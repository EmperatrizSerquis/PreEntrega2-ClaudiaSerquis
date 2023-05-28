import './styles/styles.scss'
import NavBar from "./components/NavBar/NavBar"
import Fancy from "./components/Fancy/Fancy"
import Button from "./components/Button/Button"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"



function App() {

  return (
        
      <div>        
        <NavBar />        
        <Fancy />
        <Button />    
        <ItemListContainer producto="Led" />  
        <Footer /> 
      </div>   
  )
}

export default App
