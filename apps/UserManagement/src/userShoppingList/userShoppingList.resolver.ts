import * as graphql from "@nestjs/graphql";
import { UserShoppingListResolverBase } from "./base/userShoppingList.resolver.base";
import { UserShoppingList } from "./base/UserShoppingList";
import { UserShoppingListService } from "./userShoppingList.service";

@graphql.Resolver(() => UserShoppingList)
export class UserShoppingListResolver extends UserShoppingListResolverBase {
  constructor(protected readonly service: UserShoppingListService) {
    super(service);
  }
}
