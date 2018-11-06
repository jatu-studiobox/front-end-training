const initialState = [
    {
        id: 1,
        title: 'apple',
        price: 50,
        img: 'img-apple1.jpg'
    },
    {
        id: 2,
        title: 'kiwi',
        price: 70,
        img: 'Kiwi.jpg'
    },
    {
        id: 3,
        title: 'mango',
        price: 25,
        img: 'mango-nutrition-facts.jpg'
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;