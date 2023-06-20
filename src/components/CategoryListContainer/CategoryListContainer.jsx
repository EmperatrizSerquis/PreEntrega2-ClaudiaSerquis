import CategoryList from '../CategoryList/CategoryList'
import { useState } from 'react'

const CategoryListContainer = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <div className="container">
            {
                loading
                    ? <h2>Loading...</h2>
                    : <CategoryList/>
            }
        </div>
    )
}

export default CategoryListContainer

