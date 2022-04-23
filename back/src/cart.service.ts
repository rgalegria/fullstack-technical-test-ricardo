import { Injectable, NotImplementedException } from '@nestjs/common';
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

  create(): Cart {
    const cartId = '1';
    // const cartId = uuidv4();
    this.carts.push({ id: cartId, items: [] });
    return this.carts.find(({ id }) => id === id);
  }

  getCart(id: string): Cart {
    return this.carts.find(({ id }) => id === id);
  }

  putItem(id: string, item: Item): Cart {
    throw new NotImplementedException();
  }

  insertItems(id: string, items: Item[]): Cart {
    const cart = this.carts.find(({ id }) => id === id);

    items.forEach((item, index) => {
      this.carts[index].items.push(item);
    });

    return cart;
  }
}
