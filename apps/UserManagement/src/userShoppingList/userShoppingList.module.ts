import { Module } from "@nestjs/common";
import { UserShoppingListModuleBase } from "./base/userShoppingList.module.base";
import { UserShoppingListService } from "./userShoppingList.service";
import { UserShoppingListController } from "./userShoppingList.controller";
import { UserShoppingListResolver } from "./userShoppingList.resolver";

@Module({
  imports: [UserShoppingListModuleBase],
  controllers: [UserShoppingListController],
  providers: [UserShoppingListService, UserShoppingListResolver],
  exports: [UserShoppingListService],
})
export class UserShoppingListModule {}
