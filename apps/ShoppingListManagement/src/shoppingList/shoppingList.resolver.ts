import * as graphql from "@nestjs/graphql";
import { ShoppingListResolverBase } from "./base/shoppingList.resolver.base";
import { ShoppingList } from "./base/ShoppingList";
import { ShoppingListService } from "./shoppingList.service";

@graphql.Resolver(() => ShoppingList)
export class ShoppingListResolver extends ShoppingListResolverBase {
  constructor(protected readonly service: ShoppingListService) {
    super(service);
  }
}
