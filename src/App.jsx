import './styles/styles.scss'
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import TestimonialsContainer from "./components/TestimonialsContainer/TestimonialsContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import CartPage from './components/CartPage/CartPage'
import CartModal from './components/CartModal/CartModal'

function App() {


  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }


  return (

    <BrowserRouter>

      <NavBar show={show} handleShow={handleShow}/> 

      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={ <Navigate to={"/"}/>}/>
      </Routes>
      
      <TestimonialsContainer />
      <Footer />

      <CartModal
        show={show} 
        handleShow={handleShow}
      />



</BrowserRouter>
        
      
  )
}

export default App
