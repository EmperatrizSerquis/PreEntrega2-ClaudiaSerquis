
import { useState, useEffect } from 'react'
import { getData } from '../../helpers/getData'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import CategoryList from "../CategoryList/CategoryList"
import ServicesListContainer from "../ServicesListContainer/ServicesListContainer"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className="container my-5">
            <CategoryList />
           {
            loading 
                ? <h2>Loading...</h2>
                : <ItemDetail {...item}/>
           }
            <ServicesListContainer />
        </div>
    )
}

export default ItemDetailContainer
