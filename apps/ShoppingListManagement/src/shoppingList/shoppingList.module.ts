import { Module } from "@nestjs/common";
import { ShoppingListModuleBase } from "./base/shoppingList.module.base";
import { ShoppingListService } from "./shoppingList.service";
import { ShoppingListController } from "./shoppingList.controller";
import { ShoppingListResolver } from "./shoppingList.resolver";

@Module({
  imports: [ShoppingListModuleBase],
  controllers: [ShoppingListController],
  providers: [ShoppingListService, ShoppingListResolver],
  exports: [ShoppingListService],
})
export class ShoppingListModule {}
