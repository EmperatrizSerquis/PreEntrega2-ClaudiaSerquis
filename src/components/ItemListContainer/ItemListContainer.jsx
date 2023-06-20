import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getData } from '../../helpers/getData'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const ItemListContainer = (limit) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                if (!categoryId) {
                    setProducts(res)
                } else {
                    setProducts( res.filter((item) => item.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const list = search
                        ? products.filter(prod => prod.name.includes(search))
                        : products

    return (
        <div className="container">
            {
                loading
                    ? <h2 className="capitalize">Loading...</h2>
                    : <ItemList items={list} title={categoryId} />
            }
        </div>
    )
}

export default ItemListContainer

