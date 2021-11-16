export const initialState={
    basket: [],
};

//selector( For sum of all item's price in basket )
export const getbaskettotal = (basket)=>
basket?.reduce((amount,item) => item.price + amount ,0);

const reducer =(state,action) =>{
  console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET': 
            return{
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //only find 1st match  
            const index= state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            //copy the basket into newbasket
            let newBasket= [...state.basket]; 
            
            
            if(index>=0){
                //cut only one item  and return new array
                newBasket.splice(index,1);

            }
            else{
                console.warn(
                    'can not remove product(id: ${action.id}) as its not in basket'
                    )
            }
            return{
                ...state,
                basket: newBasket
            }

 
        
        default:
            return state;
    }
};
export default reducer;