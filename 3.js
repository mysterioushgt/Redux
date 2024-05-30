//Multiple Reducers | Combine Reducers 
const { createStore,combineReducers } = require("redux");

const initialStateBooks = {
  numberOfBooks: 100,
  
};
const initialStatePens = {
    
    numberOfPens: 50,
};

//action creators
function BuyBook() {
  return {
    //action  pass karate hai to 2 chiz hoti hai type or payload
    type: "Buy_Book",
    payload: "My first redux",
  };
}
function BuyPen() {
  return {
    //action  pass karate hai to 2 chiz hoti hai type or payload
    type: "Buy_Pen",
    payload: "My first redux",
  };
}

//reducer previous State,action (Mutipal )

const BookReducer = (state = initialStateBooks, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    
    default:
      return state;
  }
};
const PenReducer = (state = initialStatePens, action) => {
    switch (action.type) {
      
      case "Buy_Pen":
        return {
          ...state,
          numberOfPens: state.numberOfPens - 2,
        };
      default:
        return state;
    }
};

const reducer = combineReducers({
    book:BookReducer,
    pen:PenReducer
})

//create store

const Store = createStore(reducer);
//console.log(Store)
console.log("initial State", Store.getState());

Store.subscribe(() => {
  console.log("update state value", Store.getState());
});

Store.dispatch(BuyBook());
Store.dispatch(BuyPen());