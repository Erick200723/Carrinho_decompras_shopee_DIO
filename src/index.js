import * as cartService from './services/cart.js';
import createItem from './services/item.js';
import readlineSync from 'readline-sync';

const myCart = [];

console.log('Welcome to the Shopping Cart!');

while (true) {
  console.log(`
Bem vindo ao carrinho de compras Shopee! escolha um numero para a ação desejada:

1. Adicionar item ao carrinho
2. Remover quantidade do item do carrinho
3. Exibir carrinho
4. Exibir total do carrinho
5. Remover item
6. Sair
  `);

  const action = readlineSync.question('Digite o número da ação desejada: ');

  switch(action) {
    case '1': {
      const itemName = readlineSync.question('Digite o nome do item: ');
      const itemPrice = parseFloat(readlineSync.question('Digite o preço do item: '));
      const itemQuantity = parseInt(readlineSync.question('Digite a quantidade do item: '), 10);

      const item = await createItem(itemName, itemPrice, itemQuantity);
      await cartService.addItem(myCart, item);
      break;
    }

    case '2': {
      const nameToRemove = readlineSync.question('Digite o nome do item a ser removido: ');
      await cartService.removeItemCart(myCart, nameToRemove);
      break;
    }

    case '3':
      await cartService.displaycart(myCart);
      break;

    case '4':
      await cartService.TotalCart(myCart);
      break;

    case '5':{
        const itemNameToDelete = readlineSync.question('Digite o nome do item a ser removido completamente: ');
        await cartService.deleteItem(myCart, itemNameToDelete);
        console.log(`Item ${itemNameToDelete} removido do carrinho.`);
        break;
    }

    case '6':
      console.log('Saindo do carrinho. Obrigado por usar a Shopee!');
      process.exit(0);
      break;

    default:
      console.log('Ação inválida. Por favor, escolha uma ação válida.');
  }
}
