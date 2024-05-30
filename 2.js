//multiple action and multiple action Creaters
const { createStore } = require('redux')

const initialState = {
    numberOfBooks: 100,
    numberOfPens: 50,
}

//action
function BuyBook() {
    return {
        //action pass karte hai 2 chiz hoti hai type or payload
        type: 'Buy_Book',
        info: 'My first redux',
    };
}

function BuyPen() {
    return {
        //action pass karte hai 2 chiz hoti hai type or payload
        type: 'Buy Pen',
        info: 'My first redux',
    };
}

//reducer previous State,action
//reducer hamesh 2 parameter leta hai 

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'Buy_Book':
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - 1,
            };
            case 'Buy Pen':
                return {
                    ...state,
                    numberOfPens: state.numberOfPens - 2,
                }
        default:
            return state;
    }
}
// cd redux
//1.js

//create store 

const Store = createStore(Reducer)  // Reducer function pas hota hai
//console.log(Store)
console.log('initial State', Store.getState());

Store.subscribe(() => {
    console.log('update state value', Store.getState())
});

Store.dispatch(BuyBook()); //sync hai
Store.dispatch(BuyPen());

// Store.dispatch(BuyBook())

// Store.dispatch(BuyBook())
// Store.dispatch(BuyBook())