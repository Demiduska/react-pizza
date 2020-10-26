import {Categories, PizzaBlock, SortPopup, PizzaLoadingBlock} from "../components";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {
    name: 'алфавиту',
    type: 'alphabet'
}];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

console.log(category,sortBy);
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category]);


    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopup
                    activeSortType={sortBy}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) =>
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />)
                    : Array(10)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>
    )
}

export default Home;
