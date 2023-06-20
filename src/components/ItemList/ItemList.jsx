import ItemCard from "../ItemCard/ItemCard"
import CategoryList from "../CategoryList/CategoryList"
import ServicesListContainer from "../ServicesListContainer/ServicesListContainer"


const ItemList = ({items, limit, title}) => {
    const limitedItems = limit ? items.slice(0,limit) : items

    return (
        <div>
            <CategoryList />
            <div className="products">
                <h2 className="products__title">{title}</h2>
                <div className="products__container">
                    <ul className='grid__list'>
                        {
                            limitedItems.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                        }
                    </ul>
                </div>
            </div>
            <ServicesListContainer />

        </div>
    )
}

export default ItemList