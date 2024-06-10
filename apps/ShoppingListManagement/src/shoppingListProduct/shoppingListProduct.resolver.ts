import * as graphql from "@nestjs/graphql";
import { ShoppingListProductResolverBase } from "./base/shoppingListProduct.resolver.base";
import { ShoppingListProduct } from "./base/ShoppingListProduct";
import { ShoppingListProductService } from "./shoppingListProduct.service";

@graphql.Resolver(() => ShoppingListProduct)
export class ShoppingListProductResolver extends ShoppingListProductResolverBase {
  constructor(protected readonly service: ShoppingListProductService) {
    super(service);
  }
}
