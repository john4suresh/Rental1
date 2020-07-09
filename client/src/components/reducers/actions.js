export const display = (item) => ({

      type:"SHOW_CART_ITEMS",
      payload:item,


})

export const Remove = (item) => ({

      type:"REMOVE_FROM_CART",
      payload:item,
})

export const searchitem = (values) => ({

      type:"SEARCH_VALUE",
      payload:values,
})

export const Passtoken = token => ({
      type:"GOT_TOKEN",
      payload:token
})

export const Passsellerproduct = data => ({

      type:"GET_SELLER_PRODUCT",
      payload:data

})

export const totalcost = item => ({

      type:"TOTAL_COST",
      payload:item ,
})

export const subtractprice = item => ({

      type:"SUBTRACT_PRICE",
      payload:item ,
})



