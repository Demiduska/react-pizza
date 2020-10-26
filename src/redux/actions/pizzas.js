import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

//получение и сохранение
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy}&_order=desc`).then(({data}) => {
        dispatch(setPizzas(data));
    })
}
//сохранение
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
