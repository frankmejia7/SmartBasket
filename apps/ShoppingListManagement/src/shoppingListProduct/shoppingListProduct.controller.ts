import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShoppingListProductService } from "./shoppingListProduct.service";
import { ShoppingListProductControllerBase } from "./base/shoppingListProduct.controller.base";

@swagger.ApiTags("shoppingListProducts")
@common.Controller("shoppingListProducts")
export class ShoppingListProductController extends ShoppingListProductControllerBase {
  constructor(protected readonly service: ShoppingListProductService) {
    super(service);
  }
}
