import './styles/styles.scss'
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import ServicesListContainer from "./components/ServicesListContainer/ServicesListContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import TestimonialsContainer from "./components/TestimonialsContainer/TestimonialsContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { CartProvider } from "./context/CartContext"
import { ModalProvider } from "./context/ModalContext"
import CartPage from './components/CartPage/CartPage'
import CartModal from './components/CartModal/CartModal'



function App() {
 
  return (
    <ModalProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar /> 
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
          <ServicesListContainer />
          <TestimonialsContainer />
          <Footer />
          {/* <Modal open={showModal} modalClose={ () => setShowModal(false) }  /> */}

          <CartModal
           /*  show={show} */ 
            /* handleShow={handleShow} */
          />



        </BrowserRouter>
      </CartProvider>     
      </ModalProvider>  
  )
}

export default App
