import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"



const ItemDetail = ({id, name, code, description, brand, price, img, category, stock, power, tone }) => {

    const [quantity, setQuantity] = useState(0)

    const navigate = useNavigate()

    const handleAdd = () => {
        const item = {
            id, 
            name,
            code, 
            description, 
            brand, 
            price, 
            img, 
            category,
            stock, 
            power,
            tone
            
        }
        console.log(item)
    }

    
    const handleBack = () => {
        navigate(-1)
    }


    return (
        <div className="container product">
            <button onClick={handleBack} className="btn btn-primary">GO Back</button>
            
            <div className="product__details">
                <div className="product__detail__img">
                    <figure className="product__display">
                        <img src={img} width="700" height="700" loading="lazy"
                        alt={name} className="w-100" />
                    </figure>
                </div>
                <div className="product__detail__content">
                    <h3 className="product__title">{name}</h3>
                    <h4> CATEGORY: <span> {category} </span> </h4>
                    <h4> IN STOCK: <span> {stock} </span> </h4>
                    <h3 className="product__price">Price: ${price}</h3>
                    <p className="product__text">{description}</p>
                    

                    <ItemCount 
                        stock={stock}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        handleAdd={handleAdd}
                    />

           
                <h4 className="description__title">Additional Information :</h4>
                    <table className="description__table" border="1px">
                        <tr className="table-row">
                            <th className="table-heading" scope="row">Brand</th>
                            <td className="table-data">{brand}</td>
                        </tr>

                        <tr class="table-row">
                            <th class="table-heading" scope="row">Power</th>
                            <td class="table-data">{power}</td>
                        </tr>
                        <tr class="table-row">
                            <th class="table-heading" scope="row">Tone</th>
                            <td class="table-data">{tone}</td>
                        </tr>
                    </table>

                </div>

            </div>
           
        </div>
    )
}

export default ItemDetail