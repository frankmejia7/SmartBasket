import { Module } from "@nestjs/common";
import { ShoppingListProductModuleBase } from "./base/shoppingListProduct.module.base";
import { ShoppingListProductService } from "./shoppingListProduct.service";
import { ShoppingListProductController } from "./shoppingListProduct.controller";
import { ShoppingListProductResolver } from "./shoppingListProduct.resolver";

@Module({
  imports: [ShoppingListProductModuleBase],
  controllers: [ShoppingListProductController],
  providers: [ShoppingListProductService, ShoppingListProductResolver],
  exports: [ShoppingListProductService],
})
export class ShoppingListProductModule {}
