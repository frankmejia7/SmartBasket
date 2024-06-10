import { ShoppingListWhereInput } from "./ShoppingListWhereInput";
import { ShoppingListOrderByInput } from "./ShoppingListOrderByInput";

export type ShoppingListFindManyArgs = {
  where?: ShoppingListWhereInput;
  orderBy?: Array<ShoppingListOrderByInput>;
  skip?: number;
  take?: number;
};
