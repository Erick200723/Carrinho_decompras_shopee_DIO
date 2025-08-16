//quais ações meu carrinho pode fazer?

async function addItem(userCart,item){
    userCart.push(item);
};

    async function removeItemCart(userCart, itemName){
    const indexFound = userCart.findIndex(p => p.name === itemName);
    if (indexFound === -1) {
        console.log('Item não encontrado no carrinho');
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1
        //atualiza o subtotal
        userCart[indexFound].subtotal = ()=> userCart[indexFound].price * userCart[indexFound].quantity
        return;
    }
    
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound,1);
        return; 
    }
};

async function deleteItem(userCart, name){

    const index = userCart.findIndex((item)=> item.name === name)
    if(index !== -1){
        userCart.splice(index,1);
    }
};

async function TotalCart(userCart, ){
    console.log("\nShopee cart TOTAL IS:");  
   const result = userCart.reduce((total, item) => total + item.subtotal(),0)
   console.log(`\n🎉Total: R$ ${result.toFixed(2)}`);
};

async function displaycart(userCart){
    console.log("\nShopee cart list")
    userCart.forEach((item, index)=>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    removeItemCart,
    deleteItem,
    TotalCart,
    displaycart
}