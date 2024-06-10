import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserShoppingListService } from "./userShoppingList.service";
import { UserShoppingListControllerBase } from "./base/userShoppingList.controller.base";

@swagger.ApiTags("userShoppingLists")
@common.Controller("userShoppingLists")
export class UserShoppingListController extends UserShoppingListControllerBase {
  constructor(protected readonly service: UserShoppingListService) {
    super(service);
  }
}
