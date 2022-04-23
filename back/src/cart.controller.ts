import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { Cart, CartService } from './cart.service';
import { AddToCartDTO } from './dto/add-to-cart.dto';

@Controller('/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/:id')
  getCart(@Param('id') id: string): Cart {
    return this.cartService.getCart(id);
  }

  @Post('/')
  createCart(): Cart {
    const createdCart = this.cartService.create();
    return createdCart;
  }

  @Post('/:id')
  addToCart(@Param('id') id: string, @Body() { items }: AddToCartDTO): Cart {
    return this.cartService.insertItems(id, items);
  }

  @Delete('/:id')
  deleteFromCart(
    @Param('id') id: string,
    @Body() { items }: AddToCartDTO,
  ): Cart {
    return this.cartService.removeItems(id, items);
  }
}
