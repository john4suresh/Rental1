
const initstate = {
    cartdata: [],
    searchvalue:'',
    token:'',
    SellerProductName:[],
    price:0,
    sellercart:[],
}

const cartreducer = (state=initstate,action) => {

    switch(action.type){

        case "SHOW_CART_ITEMS":
            
          const cartdata = [...state.cartdata,action.payload.item];
            return {
                ...state,
                cartdata
            }

        case "REMOVE_FROM_CART": 
          console.log(action.payload.item.name);
         // console.log(state.cartdata.alt_description);
          return{
              ...state,
              cartdata:[...state.cartdata.filter(item => item.name !== action.payload.item.name)]
              
          }
          

        case "SEARCH_VALUE":
            //difference between action.payload and action.payload.value?
            console.log(action.payload);
            const searchvalue = action.payload ;
            console.log(searchvalue);
            return{
                ...state,
                searchvalue
            }

        case "GOT_TOKEN":

        const token = action.payload ;
 //       console.log(token);
          return{
              ...state,
              token
          }

        case "GET_SELLER_PRODUCT":

        const SellerProductName = action.payload ;
        console.log(SellerProductName);
          return {
              ...state ,
              SellerProductName ,
          }

        case "TOTAL_COST" : 
       const price = state.price +  action.payload ;
       console.log(price);
        return{
            ...state ,
            price
        }

        case "SUBTRACT_PRICE" : 
        
        return {
            ...state , 
            price : state.price - action.payload
        }

        

        default :
        {
            return state;
        }
    }

}

export default cartreducer;
