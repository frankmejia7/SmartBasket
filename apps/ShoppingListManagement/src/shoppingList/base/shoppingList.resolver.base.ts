/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ShoppingList } from "./ShoppingList";
import { ShoppingListCountArgs } from "./ShoppingListCountArgs";
import { ShoppingListFindManyArgs } from "./ShoppingListFindManyArgs";
import { ShoppingListFindUniqueArgs } from "./ShoppingListFindUniqueArgs";
import { DeleteShoppingListArgs } from "./DeleteShoppingListArgs";
import { ShoppingListService } from "../shoppingList.service";
@graphql.Resolver(() => ShoppingList)
export class ShoppingListResolverBase {
  constructor(protected readonly service: ShoppingListService) {}

  async _shoppingListsMeta(
    @graphql.Args() args: ShoppingListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ShoppingList])
  async shoppingLists(
    @graphql.Args() args: ShoppingListFindManyArgs
  ): Promise<ShoppingList[]> {
    return this.service.shoppingLists(args);
  }

  @graphql.Query(() => ShoppingList, { nullable: true })
  async shoppingList(
    @graphql.Args() args: ShoppingListFindUniqueArgs
  ): Promise<ShoppingList | null> {
    const result = await this.service.shoppingList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ShoppingList)
  async deleteShoppingList(
    @graphql.Args() args: DeleteShoppingListArgs
  ): Promise<ShoppingList | null> {
    try {
      return await this.service.deleteShoppingList(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
