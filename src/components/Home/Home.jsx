import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getData } from '../../helpers/getData'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Fancy from "../Fancy/Fancy"
import Banner from "../Banner/Banner"
import ServicesListContainer from "../ServicesListContainer/ServicesListContainer"

const Home = () => {

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
    const limit = 4
    const title = "Featured Products"

    return (
        <div>
            <Fancy />
            <Banner />    
            <ServicesListContainer />
                       
            {
                loading
                    ? <h2>Loading...</h2>
                    : <ItemList items={list} limit={limit} title={title} />
            }
        </div>
    )
}

export default Home

