import './styles/styles.scss'
import Header from "./components/Header/Header"
import Fancy from "./components/Fancy/Fancy"
import Button from "./components/Button/Button"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"



function App() {

  return (
        
      <div>        
        <Header />
        <Fancy />
        <Button />    
        <ItemListContainer producto="Led" />  
        <Footer /> 
      </div>   
  )
}

export default App
