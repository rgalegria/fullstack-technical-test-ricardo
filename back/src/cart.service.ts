import {
  Injectable,
  BadRequestException,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
const { v4: uuidv4 } = require('uuid');

export type Cart = {
  id: string;
  items: Item[];
};

export type Item = {
  id: string;
  title: string;
  price: number;
  img: string;
};

@Injectable()
export class CartService {
  // Use this array as your database
  private carts: Cart[] = [];

  private findCart(id: string): [Cart, number] {
    const cartIndex = this.carts.findIndex(({ id }) => id === id);
    const foundCart = this.carts[cartIndex];

    if (!foundCart) throw new NotImplementedException('Cart not found');
    return [foundCart, cartIndex];
  }

  create(): Cart {
    const cartId = uuidv4();
    this.carts.push({ id: cartId, items: [] });
    return this.carts.find(({ id }) => id === id);
  }

  getCart(id: string): Cart {
    const cart = this.findCart(id)[0];
    if (!cart) throw new NotFoundException('Cart not found');
    else return this.carts.find(({ id }) => id === id);
  }

  insertItems(id: string, items: Item[]): Cart {
    const [cart, index] = this.findCart(id);

    items.forEach((item) => {
      this.carts[index].items.push(item);
    });

    return cart;
  }

  removeItems(id: string, items: Item[]): Cart {
    const [cart, index] = this.findCart(id);
    if (items.length === 0) throw new BadRequestException('No items to delete');
    if (!cart) throw new NotFoundException('Cart not found');
    if (cart.items.length === 0) throw new NotFoundException('Empty cart');

    items.forEach((deleteItem) => {
      const itemIndex = this.carts[index].items.findIndex(
        ({ id }) => deleteItem.id === id,
      );

      if (itemIndex === -1) return;
      else this.carts[index].items.splice(itemIndex, 1);
    });

    return cart;
  }
}
