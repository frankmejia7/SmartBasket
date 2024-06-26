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
import { ShoppingListProduct } from "./ShoppingListProduct";
import { ShoppingListProductCountArgs } from "./ShoppingListProductCountArgs";
import { ShoppingListProductFindManyArgs } from "./ShoppingListProductFindManyArgs";
import { ShoppingListProductFindUniqueArgs } from "./ShoppingListProductFindUniqueArgs";
import { DeleteShoppingListProductArgs } from "./DeleteShoppingListProductArgs";
import { ShoppingListProductService } from "../shoppingListProduct.service";
@graphql.Resolver(() => ShoppingListProduct)
export class ShoppingListProductResolverBase {
  constructor(protected readonly service: ShoppingListProductService) {}

  async _shoppingListProductsMeta(
    @graphql.Args() args: ShoppingListProductCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ShoppingListProduct])
  async shoppingListProducts(
    @graphql.Args() args: ShoppingListProductFindManyArgs
  ): Promise<ShoppingListProduct[]> {
    return this.service.shoppingListProducts(args);
  }

  @graphql.Query(() => ShoppingListProduct, { nullable: true })
  async shoppingListProduct(
    @graphql.Args() args: ShoppingListProductFindUniqueArgs
  ): Promise<ShoppingListProduct | null> {
    const result = await this.service.shoppingListProduct(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ShoppingListProduct)
  async deleteShoppingListProduct(
    @graphql.Args() args: DeleteShoppingListProductArgs
  ): Promise<ShoppingListProduct | null> {
    try {
      return await this.service.deleteShoppingListProduct(args);
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
